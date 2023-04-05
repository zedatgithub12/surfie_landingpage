import React from "react";
import imgNotFound from "../assets/404.png";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={7} className="p-5 pb-3">
          <img src={imgNotFound} class="img-fluid" alt="Responsive image" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col>
          <p className="fs-3 fw-semibold text-secondary text-center mt-3">
            Page Not Found
          </p>
          <p className="fs-6 fw-normal text-secondary text-center">
            The page you are looking for doesn't exist!
          </p>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={4} className="d-flex justify-content-center align-items-center mt-4">
          <button onClick={()=>navigate('/')} type="button" variant="light" class="btn  primary-bg shadow-sm  fw-semibold">Go to Homepage</button >
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
