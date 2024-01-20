import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlices';
import { jwtDecode } from 'jwt-decode';
import { useHistory } from 'react-router-dom';
import { Form, Container, Row, Col, Card, Image } from 'react-bootstrap';
import Logo from '../images/SIL.png';

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleGoogleLogin = (credentialResponse) => {
    const { name, email } = jwtDecode(credentialResponse.credential);

    // Save as a user object in localStorage
    const userObject = { name, email };
    localStorage.setItem('user', JSON.stringify(userObject));

    dispatch(setUser(userObject));

    // Redirect to /home on successful login
    history.push('/home');
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header style={{ backgroundColor: '#361F5C' }}>
              <div className="d-flex justify-content-center">
                <Image
                  src={Logo}
                  alt="Logo"
                  height="50"
                  className="d-inline-block align-top"
                />
              </div>
            </Card.Header>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="text-center" style={{ color: '#361F5C' }}>
                Sign In
              </Card.Title>
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
              <Form>{/* Your form components here */}</Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
