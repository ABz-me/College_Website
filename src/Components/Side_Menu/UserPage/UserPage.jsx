import React from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
  const { name } = useParams();

  return (
    <div>
      <h1>User Profile for {name}</h1>
      {/* Add more user details here */}
    </div>
  );
};

export default UserPage;
