// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple hardcoded login validation
    if (username === 'admin' && password === 'admin123') {
      setUser({ name: 'Admin' });
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setUsername('');
    setPassword('');
  };

  if (user) {
    return (
      <div className="dashboard">
        <h1>Welcome, {user.name}!</h1>
        <p>This is your dashboard.</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
