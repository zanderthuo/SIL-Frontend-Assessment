import React from "react";
import { Button, Container, Row, Col, Card, Table, ListGroup } from "react-bootstrap";

const ViewUser = () => {
  return (
    <Container fluid>
      <h2 className="text-center">User's Information</h2>
      <Card style={{ marginTop: "30px" }}>
        <Card.Body>
          <Row>
            {/* First Column with Table */}
            <Col md={4}>
                <h4 className="text-center">User's Details</h4>
              <ListGroup>
                <ListGroup.Item>User's Name</ListGroup.Item>
                <ListGroup.Item>User's Email</ListGroup.Item>
                {/* Add more list items as needed */}
              </ListGroup>
            </Col>

            {/* Second Column with List */}
            <Col md={8}>
            <h4 className="text-center">User's Albums</h4>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Album Name</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Add your table data here */}
                  <tr>
                    <td>1</td>
                    <td>User 1</td>
                    <td>
                        <Button>view</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>User 2</td>
                    <td>
                        <Button>view</Button>
                    </td>
                  </tr>
                  {/* ... more rows */}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewUser;
