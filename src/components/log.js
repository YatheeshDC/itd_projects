import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleLogin = () => {
//     // You can add your login logic here
//     // For simplicity, let's just redirect to a dashboard page if the credentials are filled
//     if (username !== '' && password !== '') 
//     // {
//     //   history.push('/dashboard');
//     // }
//   };

  return (
    <div>
        <Container style={{background:'darkorange', 
        marginBottom:'2rem', marginTop:'2rem',
         height:'20rem',
         borderRadius:'10px',
         }}>
      <h2>Please Login Here</h2><br></br>
      <form>
        <div>
          <label htmlFor="username">Username:</label><br></br>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div><br></br><br></br>
        <div>
          <label htmlFor="password">Password:</label><br></br>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div><br></br><br></br>
        <button type="button"
        // onClick={handleLogin}
        >Login</button>
      </form>
      </Container>
    </div>
  );
};

export default LoginForm;
