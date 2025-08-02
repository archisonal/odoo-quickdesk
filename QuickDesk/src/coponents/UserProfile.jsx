import React from 'react';
import './UserProfile.css';

const UserProfile = () => (
  <div className="user-profile">
    <h3>Profile & Settings</h3>
    <p>User: CurrentUser | Role: End User</p>
    <button className="profile-btn">Edit Profile</button>
  </div>
);

export default UserProfile;