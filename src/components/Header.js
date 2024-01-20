import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Navbar, Button, Image } from 'react-bootstrap';
import { selectUserInfo, clearUser } from '../redux/slices/userSlices';
import Logo from '../images/SIL.png';

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userInfo = useSelector(selectUserInfo);

  const navbarStyle = {
    backgroundColor: '#361F5C',
    color: '#fff',
  };

  const handleSignOut = () => {
    // Dispatch the clearUser action to reset the user state
    dispatch(clearUser());
    localStorage.removeItem('user');

    // Redirect to the home page after signing out
    history.push('/');
  };

  return (
    <Navbar style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="Logo" height="60" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {userInfo ? (
              <>
                <Button variant="outline-light" onClick={handleSignOut}>
                  Sign Out
                </Button>
                <span>Signed in as: {userInfo.name}</span>
              </>
            ) : (
              <Button variant="outline-light" href="/login">
                Sign In
              </Button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
