import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import "./Login.css";
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('US'); // Default country
  const history=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Username:', username);
    console.log('Fullname:', fullname);
    console.log('Password:', password);
    console.log('Phone No:', phoneNo);
    console.log('Selected Country:', selectedCountry);
    history("/components/Login")
    // Add your authentication logic (e.g., API call) here
  };

  return (
    <form onSubmit={handleSubmit} style={{height:"120%"}}>
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
        type="text"
        placeholder='Fullname'
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
      <br />

      <div className="phone-input-container">
        <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="country-select">
          <option value="US">US +1</option>
          <option value="IN">IND +91</option>
        </select>

        {/* Phone Number Input */}
        <input
          style={{}}
          placeholder="Enter phone number"
          value={phoneNo}
          onChange={(e) => setPhoneNo(e.target.value)}
        />
      </div>
      <br />

      <input
        type="password"
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button type="submit">Sign Up</button>
      <br />
      <div className='lines'>
        <div className='line'>_________________________</div>
        <pre> OR </pre>
        <div className='line'>_________________________</div>
      </div>
      <p>
        already Registered <Link to="/components/Login">Log In</Link>
      </p>
    </form>
  );
};

export default SignUpForm;
