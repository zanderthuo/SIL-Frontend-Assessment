import React from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Button
} from 'react-bootstrap';
import {
  jumbotronStyle,
  buttonStyle,
  linkStyle,
  sectionStyle
} from '../styles/AllStyles.js'

const Landing = () => {
  
  return (
    <Container>
      <Row>
        <Col>
          <div
            className="jumbotron"
            style={jumbotronStyle}
          >
            <h1>Welcome to Our App!</h1>
            <p>
              Discover the amazing features of our app and how it can simplify your life.
            </p>
            <p>
              <Button style={buttonStyle} variant="outline-dark" size="sm" className="mt-3">
                <Link style={linkStyle} to="/login">
                  Get Started
                </Link>
              </Button>
            </p>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <section style={sectionStyle} id="about">
            <h2>About Application</h2>
            <p>
              The use of this Application is to view Albums and Images for a specific user.<br />
              A user will be able to edit 
            </p>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default Landing
