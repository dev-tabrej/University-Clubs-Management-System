import React, { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
const LoginForm = () => {
  // State for user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    // For simplicity, let's just log the input for now
    console.log('Username:', username);
    console.log('Password:', password);

    // You can add your authentication logic (e.g., API call) here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ClubGram
        </label>
        <input
          type="text"
          placeholder='Username or email'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      
      <br />
      
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      
      <br />
      <button type="submit">Log in</button>
      <br/>
      <div className='lines'>
      <div className='line'>_________________________</div>
      <pre> OR </pre>
      <div className='line'>_________________________</div>
      </div>
      <a href="#">Forget your password?</a>
      <p>
        Not Registered? <Link to="/components/SignUp">Sign Up</Link>
      </p>
      
    </form>
  );
};

export default LoginForm;
