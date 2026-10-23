import React, { useState } from 'react';
import { profile } from '../content/profile';

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const ProfilePhoto: React.FC = () => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="profile-photo">
      {failed ? (
        <div className="profile-photo-fallback" role="img" aria-label={`${profile.name} Profilfoto`}>
          {profile.initials}
        </div>
      ) : (
        <picture>
          {profile.photoAvif && <source srcSet={assetUrl(profile.photoAvif)} type="image/avif" />}
          {/* Größtes Bild der ersten Ansicht: früh laden, Maße gegen Layout-Sprünge */}
          <img
            className="profile-photo-img"
            src={assetUrl(profile.photo)}
            alt={`${profile.name} Profilfoto`}
            width={920}
            height={1150}
            fetchPriority="high"
            decoding="async"
            onError={() => setFailed(true)}
          />
        </picture>
      )}
    </figure>
  );
};
