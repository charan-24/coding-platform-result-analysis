import React from 'react';

const UserProfileInfo = ({ name, username, location, overallScore, globalRank }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-gray-500">({username})</p>
      <p className="text-gray-500">Location: {location}</p>
      <p className="mt-4">
        <span className="font-bold">Overall score:</span> {overallScore} <br />
        <span className="font-bold">Global rank:</span> {globalRank}
      </p>
    </div>
  );
};

export default UserProfileInfo;
