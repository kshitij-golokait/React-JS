import React, { useState } from 'react';

function LoginSystem() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real application, you would perform validation and authentication here
    if (username === 'admin' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {username}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <div>
            <label>
              Username: 
              <input 
                type="text" 
                value={username} 
                onChange={e => setUsername(e.target.value)} 
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>
              Password: 
              <input 
                type="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)} 
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          <button onClick={handleLogin} style={{ marginTop: '20px' }}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginSystem;
