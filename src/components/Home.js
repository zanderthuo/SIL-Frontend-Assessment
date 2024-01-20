import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { linkStyle } from '../styles/AllStyles.js';
import { getAllUsers } from "../redux/actions/allUsersActions.js";
import { getAlbumsForAUser } from "../redux/actions/albumActions.js";

const Home = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.allUsers.allUsers);
  const albums = useSelector((state) => state.albums.userAlbums);
  const albumsLoading = useSelector((state) => state.albums.loading);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const fetchAlbums = async () => {
      if (allUsers) {
        try {
          const albumPromises = allUsers.map((user) => dispatch(getAlbumsForAUser(user.id)));
          await Promise.all(albumPromises);
        } catch (error) {
          console.error("Error fetching albums:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAlbums();
  }, [dispatch, allUsers]);

  return (
    <Container fluid>
      <h2 className="text-center">All Users</h2>
      <Row>
        {loading && <div>Loading Users and Albums...</div>}
        {!loading && allUsers?.error ? (
          <div>Error: {allUsers.error}</div>
        ) : null}
        {albumsLoading && <div>Loading Albums...</div>}
        {!albumsLoading && albums.error ? (
          <div>Error loading albums: {albums.error}</div>
        ) : null}
        {!loading &&
          allUsers?.map((user) => (
            <Col xs={12} md={4} key={user.id}>
              <Card style={{ marginTop: "30px" }}>
                <Card.Body>
                  <Card.Title className="text-center" style={{ color: '#361F5C' }}>
                    {user.name}
                  </Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="text-center">
                    <strong style={{ color: '#361F5C' }}>Albums:</strong>{" "}
                    {albums[user.id]?.length || 0}
                  </ListGroup.Item>
                </ListGroup>
                <Button className="text-center">
                  <Link style={linkStyle} to={`/user/${user.id}`}>
                    View User
                  </Link>
                </Button>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default Home;
