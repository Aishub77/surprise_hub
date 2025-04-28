import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://localhost:7221/api/Event/login', {
        Email,
        Password
      });

      if (res.data.success) {
        localStorage.setItem('Login', Email); // Save login email
        alert('🚀 Welcome back!');
        const loggedemail = localStorage.getItem('Login');
        axios.get(`https://localhost:7221/api/Event/getuserbyemail/${loggedemail}`)
          .then((res) => {
            localStorage.setItem('react-use-cart', res.data.cart)
            window.location.reload();
          })
          .catch(() => console.log('error'));
        navigate('/');
      }
      else {
        setError(res.data.message || 'Login failed');
      }
    } 
    catch (err) {
      console.error(err);
      setError('Error connecting to server');
    }
  };
 
  return (
    <div className='login'>
      <div className="login-container">
        <form onSubmit={handleLogin} className="login-form">
          <h2>Welcome Back! 🔐</h2>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="email"
              placeholder="Enter your email"
              value={Email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={Password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">🔓 Login Now</button>
          <div className="auth-redirect">
            <p>
              🔐 Don't have an Account{' '}
              <span onClick={() => navigate('/signup')} className="auth-redirect-link">
                Register Now
              </span>
            </p>
          </div>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
