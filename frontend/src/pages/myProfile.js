import React from 'react';
import ProfilePicture from './ProfilePicture'; // Assuming ProfilePicture.js is in the same directory
import LineGraph from './LineGraph';
import BarGraph from './BarChart';
import UserInfo from './UserProfileInfo';

const MyProfile = () => {
  const profileImageUrl = ''; // Add the actual image URL

  const user = {
    name: 'Full Name',
    username: 'UserName',
    location: 'IN',
    overallScore: 17220,
    globalRank: 5121,
  };

  return (
    <div className="border border-gray-300 p-6 rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Left Column: Profile Picture */}
        <div className="flex-none border-b md:border-b-0 md:border-r pr-4 mb-4 md:mb-0">
          <ProfilePicture imageUrl={profileImageUrl} />
          <UserInfo {...user} />
        </div>

        {/* Right Column: Other Components */}
        <div className="flex-1 pl-4">
          {/* Component 1 Box */}
          <div className="mb-8 p-4 border border-blue-500 rounded-lg">
            {/* Include your first component content here */}
            {/*<h2 className="text-2xl font-bold mb-4">Component 1</h2>*/}
            <LineGraph />
            {/* ... */}
          </div>

          {/* Component 2 Box */}
          <div className="p-4 border border-red-500 rounded-lg">
            {/* Include your second component content here */}
            {/*<h2 className="text-2xl font-bold mb-4">Component 2</h2>*/}
            <BarGraph />
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

