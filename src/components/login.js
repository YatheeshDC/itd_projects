import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

 
function  Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");
    const navigate = useNavigate();
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //       const { data } = await axios.post('http://localhost:3002/Login', { email, password });
    //       localStorage.setItem('token', data.token);
    //       // Redirect user or update UI
    //     } catch (error) {
    //       console.error('Login failed:', error);
    //     }
    //   };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3002/Login", { email, password })
          .then(result => {
            if (result.data === "success") {
              navigate("/Home");
            } else {
              setError("Invalid email or password. Please try again.");
            }
          })
          .catch(error => {
            console.error("Error:", error);
            setError("An error occurred. Please try again later.");
          });
      }

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020,marginTop:'0px'}}>
                <Container fluid className='navColor' style={{height:'50px'}}>
                    <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
                        <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
                    </Navbar.Brand>
                    </Container>
                    </Navbar>
    <div className='d-flex justify-content-center align-items-center  mb-4' style={{marginTop:'10rem'}}>
    <Card style={{ width: '25rem' ,height:'85vh',border:'1px solid lightgray',backgroundColor:'ffff' }}>
    {error && <div className="alert alert-danger" role="alert">{error}</div>}

    <Form onSubmit={handleSubmit}>
        <div className='px-4'>
        <p  className='fs-5'>Login</p>
        
       
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  
         name="userEmail"
         value={email}
         onChange={e => setEmail(e.target.value)}
         placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3"  >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  
         name="userPassword"
         value={password}
         onChange={e => setPassword(e.target.value)}
         placeholder="Email" />
      </Form.Group>
 
      <Form.Group className="mb-3 " controlId="formBasicCheckbox" style={{fontSize:'12px'}}>
          <Form.Check type="checkbox" label="I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy"  />
        </Form.Group>
    
      <Button  type='submit'  variant='danger' style={{borderColor:'red'  ,width:'80%'}} className='mx-2'>
            Continue
                </Button>
                <Form.Group className="mb-3  mt-2 d-flex justify-content-center "   >
          <Form.Text> New To magicbricks?</Form.Text> 
          <Link to='/Signup' style={{color:'red'}}>SignUp</Link>
        </Form.Group> 
      </div>
    </Form>
    </Card>
    </div>
    </>
  );
}

export default Login;
 






  