import React from 'react';

const ProfilePicture = ({ altText }) => {
  const imageUrl = ' '; 

  return (
    <div className="text-center">
      <img
        src={imageUrl}
        alt={altText || 'Profile Picture'}
        className="rounded-full w-20 h-20"
      />
    </div>
  );
};

export default ProfilePicture;
