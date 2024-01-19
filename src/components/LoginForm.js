import React from 'react';
import { Form, Button, Container, Row, Col, Card, Image } from 'react-bootstrap';
import Logo from '../images/SIL.png';

const LoginForm = () => {

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Card>
            <Card.Header style={{backgroundColor:'#361F5C'}}>
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
              <Card.Title className="text-center" style={{ color:'#361F5C' }}>Sign In</Card.Title>
              <Form>
                <Button className='mt-3' variant="outline-dark" style={{ color:'#361F5C' }}>Sign In With Google</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;