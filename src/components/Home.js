import React from "react";
import { Link } from "react-router-dom";
import { 
    Button, 
    Container,
    Row,
    Col,
    Card,
    ListGroup
} from "react-bootstrap";
import { linkStyle } from '../styles/AllStyles.js'

const Home = () => {
  return (
    <Container fluid>
      <h2 className="text-center">All Users</h2>
      <Row>
        <Col xs={12} md={4}>
          <Card style={{ marginTop: "30px" }}>
            <Card.Body>
              <Card.Title className="text-center" style={{ color:'#361F5C' }}>User</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="text-center">
                <strong style={{ color:'#361F5C' }}>Albums:</strong> 50
              </ListGroup.Item>
            </ListGroup>
            <Button className="text-center">
              <Link style={linkStyle} to="/login">
                View User
              </Link>
            </Button>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ marginTop: "30px" }}>
            <Card.Body>
              <Card.Title className="text-center" style={{ color:'#361F5C' }}>User</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="text-center">
                <strong style={{ color:'#361F5C' }}>Albums:</strong> 50
              </ListGroup.Item>
            </ListGroup>
            <Button className="text-center" >View User</Button>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card style={{ marginTop: "30px" }}>
            <Card.Body>
              <Card.Title className="text-center" style={{ color:'#361F5C' }}>User</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item className="text-center">
                <strong style={{ color:'#361F5C' }}>Albums:</strong> 50
              </ListGroup.Item>
            </ListGroup>
            <Button className="text-center">View User</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
