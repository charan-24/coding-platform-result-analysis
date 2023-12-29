import React from 'react';
import imageUrl from './pfp.png'
const ProfilePicture = ({ altText }) => {
  return (
    <div className="text-center">
      <img
        src={imageUrl}
        alt={altText || 'Profile Picture'}
        className="rounded-full"
      />
    </div>
  );
};

export default ProfilePicture;
