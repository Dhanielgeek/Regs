import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import axios from 'axios';

import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({ ...errors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors({ ...errors, password: '' });
  };

  const validateForm = () => {
    let valid = true;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim() || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Enter a valid email address' }));
      valid = false;
    }

    if (!password.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Enter a password' }));
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setLoading(true);

      const url = 'http://localhost:3025/api/v1/loginuser';
      const data = { email, password };

      try {
        // Make the API request
        const response = await axios.post(url, data);
        console.log('Response:', response.data);
        alert('Login successful');
      } catch (error) {
        console.log('Error occurred:', error.response);
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Invalid email or password',
          password: 'Invalid email or password',
        }));
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className='loginHolder'>
      <div className="login_hold">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="username">Email:</label>
          {errors.email && <p className="errorText">{errors.email}</p>}
          <input
            type="text"
            id="username"
            name="email"
            required
            placeholder='example@gmail.com'
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="password">Password:</label>
          {errors.password && <p className="errorText">{errors.password}</p>}
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder='*********'
            value={password}
            onChange={handlePasswordChange}
          />

          <div className="forgot-password" to={'./'}>
            Forgot Password?
          </div>
          <button type="submit">
            {loading ? (
              <Oval
                height={20}
                width={20}
                color="#4fa94d"
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#4fa94d"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              'Login'
            )}
          </button>

          <p className="signup-link">
            Don't have an account?<Link to={'/register'} className='INK╝'>Sign Up</Link>
          </p>
          <button>Explore</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
