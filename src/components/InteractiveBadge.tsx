import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, Move } from 'lucide-react';
import { profile } from '../content/profile';

export const InteractiveBadge: React.FC = () => {
  // Container & Card dimensions - tuned for exact AGENTS.md proportions (270px width x 380px height)
  const STAGE_WIDTH = 340;
  const STAGE_HEIGHT = 460;
  const ANCHOR_X = STAGE_WIDTH / 2;
  const ANCHOR_Y = 0; // Top of the hero stage
  const REST_Y = 64; // Distance from anchor to card top

  // State & Physics tracking
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [imageError, setImageError] = useState(false);

  const dragStartRef = useRef({ x: 0, y: 0 });
  const currentPosRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const hasInteractedRef = useRef(false);

  currentPosRef.current = pos;
  isDraggingRef.current = isDragging;
  hasInteractedRef.current = hasInteracted;

  // Spring physics loop for realistic damped pendulum recovery
  const startSpringAnimation = useCallback(() => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);

    const STIFFNESS = 0.095;
    const DAMPING = 0.86;
    const MASS = 1.0;

    const tick = () => {
      if (isDraggingRef.current) return;

      const current = currentPosRef.current;
      const vel = velRef.current;

      const forceX = -STIFFNESS * current.x;
      const forceY = -STIFFNESS * current.y;

      const newVelX = (vel.x + forceX / MASS) * DAMPING;
      const newVelY = (vel.y + forceY / MASS) * DAMPING;

      const newPosX = current.x + newVelX;
      const newPosY = current.y + newVelY;

      velRef.current = { x: newVelX, y: newVelY };

      const rotZ = (newPosX / 12) + (newVelX * 0.9);
      const rotY = (newPosX / 16);
      const rotX = -(newPosY / 20) + (newVelY * 0.4);

      setPos({ x: newPosX, y: newPosY });
      setRotation({
        x: Math.max(-28, Math.min(28, rotX)),
        y: Math.max(-32, Math.min(32, rotY)),
        z: Math.max(-35, Math.min(35, rotZ)),
      });

      const isSettled =
        Math.abs(newPosX) < 0.2 &&
        Math.abs(newPosY) < 0.2 &&
        Math.abs(newVelX) < 0.08 &&
        Math.abs(newVelY) < 0.08;

      if (!isSettled) {
        animFrameRef.current = requestAnimationFrame(tick);
      } else {
        setPos({ x: 0, y: 0 });
        setRotation({ x: 0, y: 0, z: 0 });
        velRef.current = { x: 0, y: 0 };
      }
    };

    animFrameRef.current = requestAnimationFrame(tick);
  }, []);

  // Intro swing effect on page load: smoothly sways left and right, then settles
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const introTimeout = setTimeout(() => {
      if (hasInteractedRef.current || isDraggingRef.current) return;

      let startTimestamp: number | null = null;
      const totalDuration = 3800; // ~3.8 seconds graceful swing
      const maxAmplitude = 48; // Max swing amplitude in pixels
      const frequency = 0.0032; // Frequency of pendulum swing
      const decayCoeff = 0.00092; // Damping rate

      const introLoop = (now: number) => {
        if (hasInteractedRef.current || isDraggingRef.current) return;
        if (!startTimestamp) startTimestamp = now;
        const elapsed = now - startTimestamp;

        if (elapsed < totalDuration) {
          // Exponentially decaying sine wave: smooth swing left and right
          const envelope = Math.exp(-decayCoeff * elapsed);
          const currentX = maxAmplitude * envelope * Math.sin(frequency * elapsed * 2 * Math.PI);
          const currentY = (Math.abs(currentX) / maxAmplitude) * 6; // Slight natural vertical rise when swinging

          const rotZ = currentX / 10;
          const rotY = currentX / 13;
          const rotX = -currentY / 5;

          setPos({ x: currentX, y: currentY });
          setRotation({
            x: Math.max(-25, Math.min(25, rotX)),
            y: Math.max(-28, Math.min(28, rotY)),
            z: Math.max(-30, Math.min(30, rotZ)),
          });

          animFrameRef.current = requestAnimationFrame(introLoop);
        } else {
          // Settled smoothly into rest
          setPos({ x: 0, y: 0 });
          setRotation({ x: 0, y: 0, z: 0 });
          velRef.current = { x: 0, y: 0 };
        }
      };

      animFrameRef.current = requestAnimationFrame(introLoop);
    }, 450);

    return () => {
      clearTimeout(introTimeout);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Handle Dragging
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    setIsDragging(true);
    setHasInteracted(true);

    const target = e.currentTarget;
    target.setPointerCapture(e.pointerId);

    dragStartRef.current = {
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    };
    lastTimeRef.current = performance.now();
    velRef.current = { x: 0, y: 0 };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);
    lastTimeRef.current = now;

    const rawX = e.clientX - dragStartRef.current.x;
    const rawY = e.clientY - dragStartRef.current.y;

    const maxRadius = 160;
    const dist = Math.hypot(rawX, rawY);
    const scale = dist > maxRadius ? (maxRadius + (dist - maxRadius) * 0.25) / dist : 1;

    const newX = rawX * scale;
    const newY = Math.max(-35, Math.min(160, rawY * scale));

    velRef.current = {
      x: ((newX - currentPosRef.current.x) / dt) * 16,
      y: ((newY - currentPosRef.current.y) / dt) * 16,
    };

    const rotZ = Math.max(-32, Math.min(32, newX / 10));
    const rotY = Math.max(-30, Math.min(30, newX / 12));
    const rotX = Math.max(-25, Math.min(25, -newY / 14));

    setPos({ x: newX, y: newY });
    setRotation({ x: rotX, y: rotY, z: rotZ });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignored if already released
    }
    startSpringAnimation();
  };

  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const clipX = ANCHOR_X + pos.x;
  const clipY = REST_Y + pos.y;
  const midX = (ANCHOR_X + clipX) / 2 + (pos.x * 0.15);
  const midY = (ANCHOR_Y + clipY) / 2;

  return (
    <div
      className="badge-stage"
      style={{
        width: `${STAGE_WIDTH}px`,
        height: `${STAGE_HEIGHT}px`,
        perspective: '1000px',
      }}
      role="region"
      aria-label="Interaktiver Profil-Ausweis"
    >
      {/* Dynamic SVG Lanyard & Hardware */}
      <svg
        className="lanyard-svg"
        width={STAGE_WIDTH}
        height={STAGE_HEIGHT}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="strapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#181822" />
            <stop offset="35%" stopColor="#2c2c3e" />
            <stop offset="50%" stopColor="#484860" />
            <stop offset="65%" stopColor="#2c2c3e" />
            <stop offset="100%" stopColor="#14141c" />
          </linearGradient>

          <linearGradient id="metalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f0f0f5" />
            <stop offset="45%" stopColor="#c5c5d5" />
            <stop offset="70%" stopColor="#828296" />
            <stop offset="100%" stopColor="#d8d8e8" />
          </linearGradient>

          <filter id="ribbonShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.18" />
          </filter>
        </defs>

        {/* Top Anchor Mount */}
        <circle cx={ANCHOR_X} cy={ANCHOR_Y} r="7" fill="url(#metalGrad)" stroke="#111116" strokeWidth="1.5" />
        <circle cx={ANCHOR_X} cy={ANCHOR_Y} r="3" fill="#111116" />

        {/* The Lanyard Ribbon Strap */}
        <path
          d={`M ${ANCHOR_X - 8} ${ANCHOR_Y} Q ${midX - 6} ${midY} ${clipX - 7} ${clipY - 14} L ${clipX + 7} ${clipY - 14} Q ${midX + 6} ${midY} ${ANCHOR_X + 8} ${ANCHOR_Y} Z`}
          fill="url(#strapGrad)"
          stroke="#111118"
          strokeWidth="1"
          filter="url(#ribbonShadow)"
        />

        {/* Subtle woven center stripe on strap */}
        <path
          d={`M ${ANCHOR_X} ${ANCHOR_Y + 4} Q ${midX} ${midY} ${clipX} ${clipY - 14}`}
          stroke="rgba(144, 41, 255, 0.75)"
          strokeWidth="2.5"
          strokeDasharray="4 2.5"
          fill="none"
        />

        {/* Metal Swivel Connector / Ring */}
        <rect
          x={clipX - 10}
          y={clipY - 18}
          width="20"
          height="12"
          rx="3"
          fill="url(#metalGrad)"
          stroke="#1a1a24"
          strokeWidth="1.5"
        />
        {/* Metal Clip Hook attaching through slot */}
        <path
          d={`M ${clipX - 5} ${clipY - 7} L ${clipX - 5} ${clipY + 8} Q ${clipX} ${clipY + 12} ${clipX + 5} ${clipY + 8} L ${clipX + 5} ${clipY - 7}`}
          fill="none"
          stroke="url(#metalGrad)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Floating Drag Hint Pill */}
      <div className={`drag-hint-pill ${hasInteracted ? 'interacted' : ''}`}>
        <Move size={14} className="drag-hint-icon" />
        <span>Zieh die Karte</span>
      </div>

      {/* Interactive Badge Card */}
      <div
        className={`id-badge-card ${isDragging ? 'is-dragging' : ''}`}
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
          transformOrigin: 'top center',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Lanyard punch hole slot at card top */}
        <div className="badge-slot" aria-hidden="true">
          <div className="badge-slot-hole" />
        </div>

        {/* Glossy Sheen Overlay */}
        <div
          className="badge-specular"
          style={{
            transform: `translate(${rotation.y * 3}px, ${rotation.x * 3}px)`,
          }}
          aria-hidden="true"
        />

        {/* Top Header Section with Signature Gradient */}
        <div className="badge-header">
          <div className="badge-header-bg" />
          <div className="badge-header-content">
            <span className="badge-org-tag">PORTFOLIO ID PASS</span>
            <div className="badge-chip-icon">
              <Sparkles size={14} />
            </div>
          </div>
        </div>

        {/* Avatar & Identity Section */}
        <div className="badge-body">
          <div className="badge-avatar-wrap">
            {!imageError ? (
              <img
                src={profile.photo}
                alt={`${profile.name} Profilfoto`}
                className="badge-avatar-img"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="badge-avatar-fallback">{profile.initials}</div>
            )}
            <div className="badge-status-dot" title="Aktiv & Verfügbar" />
          </div>

          <div className="badge-identity">
            <h3 className="badge-name">{profile.name}</h3>
            <p className="badge-role">{profile.role}</p>
          </div>

          <div className="badge-divider" />

          {/* 2-Column Info Grid */}
          <div className="badge-info-grid">
            <div className="badge-info-cell">
              <span className="badge-info-label">SCHWERPUNKT</span>
              <span className="badge-info-value">Web & Auto</span>
            </div>
            <div className="badge-info-cell">
              <span className="badge-info-label">STANDORT</span>
              <span className="badge-info-value">{profile.location}</span>
            </div>
            <div className="badge-info-cell">
              <span className="badge-info-label">STATUS</span>
              <span className="badge-info-value highlight">Verfügbar</span>
            </div>
            <div className="badge-info-cell">
              <span className="badge-info-label">CODE</span>
              <span className="badge-info-value">TS / React / Py</span>
            </div>
          </div>

          {/* Decorative Barcode Section */}
          <div className="badge-barcode-section" aria-hidden="true">
            <div className="barcode-bars">
              {[4, 2, 6, 1, 3, 5, 2, 7, 3, 2, 5, 1, 4, 3, 6, 2, 4, 1, 3, 5, 2, 6, 3, 4, 2, 5, 3].map(
                (w, i) => (
                  <span
                    key={i}
                    className="barcode-line"
                    style={{
                      width: `${w}px`,
                      marginRight: `${(i % 3) + 1}px`,
                    }}
                  />
                )
              )}
            </div>
            <span className="barcode-serial mono-font">AT-9029-WI-2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};
