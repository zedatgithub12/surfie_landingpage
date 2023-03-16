
import IntroImage from "../assets/bg.png";
import Coca from "../assets/coca.png";
import Rainbow from "../assets/rainbow.png";
import Uniceif from "../assets/uniseif.png";
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";


const HeroImage = () => {
  return (
    <Container fluid>
      <Row className="position-relative" id="frontimage" >


        <Col sm={6} className="bg-dark bg-opacity-50 pb-5 ps-3">
          <div className=" mt-3 pt-1 ms-4" >

          </div>
          <h5 className="mt-5 pt-5 ms-3 w-75 pb-2 text-white" >
            We are ensuring online safety for families and children in Ethiopia{" "}
          </h5>
          <h1 className="  ms-3 fw-bold text-white"> Parental Control Application</h1>
          <p className=" mb-5 ms-3 text-light mt-4 w-75">

            By proving a parental control mobile application for parents that
            will allow them to be involved and supportive of their child`s
            internet use, without affecting their child's digital skills and
            familiarity with the online environment.

          </p>

          <NavLink to="/account" className="btn button btn-outline-light mb-5 ms-4 ">
            Get started
          </NavLink>

        </Col>

        <Col sm={6} className="bg-dark bg-opacity-50">

        </Col>

      </Row>

      <Row className=" colored1">
        <Col className=" d-flex align-items-center justify-content-center" >
          <img className="pe-3 me-2" src={Coca} alt="Cocacola" width={150} id="sponsor" />
          <img className="pe-3 me-2" src={Rainbow} alt="Rainbow" width={150} id="sponsor" />
          <img className="pe-3 me-2" src={Uniceif} alt="Uniceif" width={150} id="sponsor" />
        </Col>
      </Row>
    </Container>
  );
};
export default HeroImage;
