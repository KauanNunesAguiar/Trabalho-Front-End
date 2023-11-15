import React, { useState } from 'react';
import './style.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(username);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Wherezap</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="entrada-usuario"
            className="text_input_default"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="entrada-senha"
            className="text_input_default"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button_default" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
