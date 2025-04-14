import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setMessage(`Welcome, ${username}!`);
    } else {
      setMessage("Please enter both username and password");
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username"
          value={username} onChange={(e) => setUsername(e.target.value)} />
        <br /><br />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <br /><br />
        <button type="submit">Login</button>
      </form>
      <h3>{message}</h3>
    </div>
  );
}

export default LoginForm;
