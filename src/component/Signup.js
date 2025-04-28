import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Signup.css';

const Signup = () => {
  const [Username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://localhost:7221/api/Event', {
        Username,
        email,
        password,
        cart: `{"items":[],"isEmpty":true,"totalItems":0,"totalUniqueItems":0,"cartTotal":0,"metadata":{}}`
      });

      console.log('Signup response:', res);

      if (res.data.success) {
        alert('🎉 Welcome aboard! Your account has been created.');
        navigate('/login');
      } else {
        setError(res.data.message || 'This Email already exists');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className='sign'>
      <div className="signup-container">
        <form onSubmit={handleSignup} className="signup-form">
          <h2>Create Your Account 🚀</h2>

          <div className="input-group">
            <FaUser className="icon" />
            <input
              placeholder="Username"
              value={Username}
              onChange={e => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group password-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Secure Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">🌟 Sign Up Now</button>

          {error && <p className="error">{error}</p>}

          <div className="auth-redirect">
            <p>
              🔐 Already a member?{' '}
              <span onClick={() => navigate('/login')} className="auth-redirect-link">
                Login into your account
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
