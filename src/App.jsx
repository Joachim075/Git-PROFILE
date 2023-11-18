import React, { useState } from 'react';
import './App.css';
import Butn from './assets/Componets/Butn';


function App() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const getUserData = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError(null);
      } else {
        setUserData(null);
        setError('User not found');
      }
    } catch (err) {
      setUserData(null);
      setError('An error occurred while fetching data');
    }
  };

  return (
    <div className="App">
      <h1 className='text-red-950'>Github Profile Viewer</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={getUserData}>Get Profile</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            <h2>{userData.login}</h2>
          </a>
          <img className='pic' src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
          
          <Butn
            location={userData.location}
            followers={userData.followers}
            following={userData.following}
            public_repos={userData.public_repos}
          />
        </div>
      )}
    </div>
  );
}

export default App;
