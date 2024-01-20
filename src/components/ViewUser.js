import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Table,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import { getUserById } from "../redux/actions/allUsersActions";
import { getAllAlbumsForAUser } from "../redux/actions/albumActions";
import { linkStyle } from "../styles/AllStyles";

const ViewUser = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const user = useSelector((state) => state.allUsers.user);
  const userIsLoading = useSelector((state) => state.allUsers.loading);
  const albums = useSelector((state) => state.albums.userAlbums);
  const albumIsLoading = useSelector((state) => state.albums.loading);

  useEffect(() => {
    dispatch(getUserById(userId));
    dispatch(getAllAlbumsForAUser(userId));
  }, [dispatch, userId]);

  return (
    <Container fluid>
      <h2 className="text-center">User's Information</h2>
      <Card style={{ marginTop: "30px" }}>
        <Card.Body>
          <Row>
            {/* First Column with Table */}
            <Col md={4}>
              <h4 className="text-center">User's Details</h4>
              {userIsLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <ListGroup>
                  <ListGroup.Item>Name: {user.name}</ListGroup.Item>
                  <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                  <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                </ListGroup>
              )}
            </Col>
            <Col md={8}>
              <h4 className="text-center">User's Albums</h4>
              {albumIsLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Album Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {albums[userId]?.map((album, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{album.title}</td>
                        <td>
                          <Button className="text-center">
                            <Link style={linkStyle} to={`/album/${album.id}`}>
                              View Album
                            </Link>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewUser;
