import React from "react";
import { Button, Container, Row, Col, Card, Table, ListGroup } from "react-bootstrap";

const ViewAlbum = () => {
  return (
    <Container fluid>
      <h2 className="text-center">Album's Information</h2>
      <Card style={{ marginTop: "30px" }}>
        <Card.Body>
          <Row>
            {/* First Column with Table */}
            <Col md={4}>
                <h4 className="text-center">Album's Details</h4>
              <ListGroup>
                <ListGroup.Item>Album's Title</ListGroup.Item>
                {/* Add more list items as needed */}
              </ListGroup>
            </Col>

            {/* Second Column with List */}
            <Col md={8}>
            <h4 className="text-center">Album's Albums</h4>
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
                    <td>Album 1</td>
                    <td>
                        <Button>view</Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Album 2</td>
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

export default ViewAlbum;
