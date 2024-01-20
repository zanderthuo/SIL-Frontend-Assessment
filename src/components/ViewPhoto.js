import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { 
  Alert,
  Button,
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Modal,
  Form
} from "react-bootstrap";
import { getPhotoById, updatePhotoTitle } from "../redux/actions/photoActions";

const ViewPhoto = () => {
  const dispatch = useDispatch();
  const { photoId } = useParams();
  const photo = useSelector((state) => state.photos.photo);
  const photoIsLoading = useSelector((state) => state.photos.loading);

  const [showEditModal, setShowEditModal] = useState(false);
  const [newTitle, setNewTitle] = useState(photo.title);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  useEffect(() => {
    dispatch(getPhotoById(photoId));
  }, [dispatch, photoId]);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleSaveClick = () => {
    // Dispatch the action to update the photo title
    dispatch(updatePhotoTitle({ photoId, newTitle }));

    // Show success alert
    setShowSuccessAlert(true);

    // Close the modal after a brief delay
    setTimeout(() => {
      setShowEditModal(false);
      setShowSuccessAlert(false);
    }, 2000);
  };

  const handleCancelClick = () => {
    // Reset the new title and close the modal
    setNewTitle(photo.title);
    setShowEditModal(false);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h2 className="text-center">View Photo</h2>
          {photoIsLoading ? (
            <Spinner animation="border" role="status" />
          ) : (
            <Card>
              <Card.Img
                variant="top"
                src={photo.url}
                style={{ width: "100%", height: "20vw" }}
              />
              <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title className="text-center">{photo.title}</Card.Title>
                <Button variant="outline-dark" size="sm" onClick={handleEditClick} className="mt-3">
                  Edit Photo
                </Button>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
      {/* Edit Photo Title Modal */}
      <Modal show={showEditModal} onHide={handleCancelClick}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Photo Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>New Title:</Form.Label>
              <Form.Control
                type="text"
                value={newTitle}
                onChange={handleTitleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveClick}>
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancelClick}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Success Alert */}
      <Alert variant="success" show={showSuccessAlert} onClose={() => setShowSuccessAlert(false)} dismissible>
        Photo title successfully updated!
      </Alert>
    </Container>
  );
};

export default ViewPhoto;
