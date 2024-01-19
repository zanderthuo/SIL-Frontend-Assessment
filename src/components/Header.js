import React from 'react';
import { Container, Navbar, Button, Image } from 'react-bootstrap';
import Logo from '../images/SIL.png';

const Header = () => {
  const navbarStyle = {
    backgroundColor: '#361F5C',
    color: '#fff'
  };

  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={Logo}
            alt="Logo"
            height="60"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="outline-light">Sign Out</Button>
            <Button variant="outline-light" href="/login">
              Sign In
            </Button>
          </Navbar.Text>
          <Navbar.Text>Signed in as: <a href="#login">username</a></Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
