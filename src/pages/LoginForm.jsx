import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create an object with the form data
    const formData = {
      email: email,
      password: password,
    };

    // Send the form data to the API using fetch
    fetch('http://localhost:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log('Response:', data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          '& .MuiTextField-root': { m: '20px 0px', width: '100%' },
          border: '1px solid grey',
          borderRadius: '10px',
          width: '50%',
          padding: '20px'
        }}
      >
        <h2 className='form-heading'>Login</h2>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Login
        </Button>
        <p style={{ marginTop: '10px' }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </Box>
    </form>
  );
}
