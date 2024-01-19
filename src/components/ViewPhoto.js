import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import Logo from "../images/SIL.png";

const ViewPhoto = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center">Photo's Title</h2>
          <Card>
            <Card.Img variant="top" src={Logo} />
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title className="text-center">Photo Title</Card.Title>
              <Button variant="outline-dark" size="sm" className="mt-3">
                <Link style={{ color: "white" }} to="">
                  Edit Photo
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewPhoto;
