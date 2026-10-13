import React, { useState } from 'react';
import { profile } from '../content/profile';

export const ProfilePhoto: React.FC = () => {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="profile-photo">
      {failed ? (
        <div className="profile-photo-fallback" role="img" aria-label={`${profile.name} Profilfoto`}>
          {profile.initials}
        </div>
      ) : (
        <img
          className="profile-photo-img"
          src={profile.photo}
          alt={`${profile.name} Profilfoto`}
          onError={() => setFailed(true)}
        />
      )}
    </figure>
  );
};
