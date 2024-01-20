import React, { useEffect, useState } from "react";
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
  Spinner
} from "react-bootstrap";
import { getAlbumById } from "../redux/actions/albumActions";
import { linkStyle } from "../styles/AllStyles";
import { getPhotosForAnAlbum } from "../redux/actions/photoActions";

const ViewAlbum = () => {
  const dispatch = useDispatch();
  const { albumId } = useParams();
  const album = useSelector((state) => state.albums.album);
  const albumIsLoading = useSelector((state) => state.albums.loading);
  const photos = useSelector((state) => state.photos.photos);
  const photosIsLoading = useSelector((state) => state.photos.loading);

  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [itemsPerPage, _] = useState(10);

  useEffect(() => {
    dispatch(getAlbumById(albumId));
    dispatch(getPhotosForAnAlbum(albumId));
  }, [dispatch, albumId]);

  // Calculate the index range for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPhotos = photos[albumId]?.slice(indexOfFirstItem, indexOfLastItem) || [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container fluid>
      <h2 className="text-center">Album's Information</h2>
      <Card style={{ marginTop: "30px" }}>
        <Card.Body>
          <Row>
            {/* First Column with Table */}
            <Col md={4}>
              <h4 className="text-center">Album's Details</h4>
              {albumIsLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <ListGroup>
                  <ListGroup.Item>Title: {album.title}</ListGroup.Item>
                </ListGroup>
              )}
            </Col>

            {/* Second Column with List */}
            <Col md={8}>
              <h4 className="text-center">Album's Photos</h4>
              {photosIsLoading ? (
                <Spinner animation="border" role="status">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>title</th>
                        <th>url</th>
                        <th>thumbnailUrl</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentPhotos.map((photo, index) => (
                        <tr key={index}>
                          <td>{indexOfFirstItem + index + 1}</td>
                          <td>{photo.title}</td>
                          <td>{photo.url}</td>
                          <td>{photo.thumbnailUrl}</td>
                          <td>
                            <Button className="text-center">
                              <Link style={linkStyle} to={`/photos/${photo.id}`}>
                                View Photo
                              </Link>
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  {/* Pagination */}
                  <div className="text-center">
                    {photos[albumId]?.length > itemsPerPage && (
                      <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={photos[albumId]?.length}
                        paginate={paginate}
                        currentPage={currentPage}
                      />
                    )}
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

// Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} className="page-link" href="pageLink">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ViewAlbum;
