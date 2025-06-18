import React from 'react';
import './SignUp.css';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-left">
        <h2 className="brand"><strong>Fetch</strong><span>&</span><span className="light">Fur</span></h2>
        <h1>Sign Up</h1>

        <TextField label="Full Name" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField label="Password" variant="outlined" fullWidth margin="normal" type="password" />

        <Button fullWidth variant="contained" color="primary" className="signup-button">
          Register
        </Button>

        <p className="bottom-text">
          Already have an account?{' '}
          <span className="link" onClick={() => navigate('/login')}>Sign in</span>
        </p>
      </div>
      <div className="signup-right">
        <img src="/assets/login-image.png" alt="Dogs" />
      </div>
    </div>
  );
};

export default SignUp;
