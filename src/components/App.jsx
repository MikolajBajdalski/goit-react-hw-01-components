import React from 'react';
import Profile from './Profile/Profile';
import userData from '../data/user.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </div>
  );
}

export default App;
