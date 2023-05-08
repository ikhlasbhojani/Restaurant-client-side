import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignupForm() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      username: username,
      email: email,
      password: password,
      role: "user"
    };

    try {
      const response = await fetch('http://localhost:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Request was successful
        console.log('Form data submitted successfully!');
        // Perform any additional actions or handle the response as needed
      } else {
        // Request failed
        console.error('Error submitting form data:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
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
        <h2 className='form-heading'>Create Account</h2>
        <TextField
          label="User Name"
          type="text"
          value={username}
          onChange={handleUserNameChange}
        />
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
          Sign up
        </Button>
      </Box>
    </form>
  );
}
