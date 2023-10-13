import React from 'react';
import '../index.css'
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics'
import userData from '../data/user.json';
import statsData from '../data/data.json';

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
      <Statistics stats={statsData}
      />
    </div>
  );
}

export default App;
