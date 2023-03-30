import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import IntroImage from "../assets/mob.png";
import Apple from "../assets/apple.png";
import Google from "../assets/google.png";
import Progressbar from "../components/Progressbar";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  MdWebAssetOff,
  MdTimer,
  MdDevices,
  MdLocationPin,
  MdOutlineAppBlocking,
} from "react-icons/md";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

function How() {
 
  return (
    <div>
      <Container>
        <Row className="p-5"></Row> 

        <Row className="d-flex p-4 mt-3">
          <p className="text-left pt-3 fs-2 fw-semibold"> Surfie Ethiopia App Features </p>
        </Row>

        <Row>
          <Col id="card">
            <Card className="border-0 shadow-sm m-2 mb-4 p-2 primary">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 bottom-0 m-2 ">
                  <span className="align-items-center rounded-circle  ">
                    <MdTimer size={42} className="m-2 secondary-color" />
                  </span>
                </div>
                <Card.Title className="primary-bg ">Set Time Limit</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                Allow parents to set limits on the amount of time their children can spend on their devices or on certain apps.
                </Card.Text>

               </Card.Body>
              
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-2 ">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 bottom-0 m-2 ">
                  <span className="align-items-center rounded-circle">
                    <MdDevices size={42} className="m-2 secondary-color" />
                  </span>
                </div>
                <Card.Title className="primary-bg mt-2">Cross Devices Protection</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                Allows parents to apply their chosen settings across multiple devices, such as smartphones, tablets, laptops, and desktop computers.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-2">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 bottom-0 m-2 ">
                  <span className="align-items-center rounded-circle">
                    <MdLocationPin size={42} className="secondary-color m-2" />
                  </span>
                </div>
                <Card.Title className="primary-bg mt-2">Track Location</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                  Location tracking features to help parents keep tabs on their children's whereabouts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col
            xl={6}
            className="d-flex justfy-content-center align-items-center rounded-circle m-auto"
          >
            <img
              className=" justfy-content-center border border-info m-auto rounded-circle"
              src={IntroImage}
              alt="IntroImage"
              width="500px"
              height="500px"
              id="image"
            />
          </Col>

          <Col id="card">
            <Card className="border-0 shadow-sm m-2 mb-4 p-2">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 bottom-0 m-2 ">
                  <span className="align-items-center rounded-circle">
                    <MdWebAssetOff size={42} className="secondary-color m-2 mt-3" />
                  </span>
                </div>
                <Card.Title className="primary-bg mt-2">Web filtering</Card.Title>

                <Card.Text className="text-muted fw-lighter mt-3">
                Allow parents to block access to certain websites or categories of websites deemed inappropriate for children.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-2">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 bottom-0 m-2 ">
                  <span className="align-items-center rounded-circle">
                    <MdOutlineAppBlocking
                      size={42}
                      className=" secondary-color m-2"
                    />
                  </span>
                </div>
                <Card.Title className="primary-bg mt-2">App and game blocking</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                Allows parents to block access to certain apps on their children's devices. Parents can choose which apps they want to block based on their content, age rating, or other criteria.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-2">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 bottom-0 m-2 ">
                  <span className="align-items-center rounded-circle  ">
                    <AiTwotoneSafetyCertificate
                      size={42}
                      className="secondary-color m-2"
                    />
                  </span>
                </div>
                <Card.Title className="primary-bg mt-2">Cyberbullying protection</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                Help parents detect and prevent cyberbullying, such as alerts for offensive or threatening messages
                </Card.Text>
              </Card.Body>
            </Card>

            <Link className="btn btn-md btn-light secondary-color px-3 ms-2 mb-5 p-2 fs-6 fw-semibold shadow-sm " id="find" to="/features">
              Find More <BsFillArrowRightCircleFill size={16} className="float-right  ms-4"/>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
      <Row className="p-5"></Row> 
        <Row className=" mb-3 p-4 rounded-4 gradient blur">
          <Col lg={5} >
            <p className="text-left fs-2 pt-4 text-white"> How to get started</p>
            <p className="pb-4 mt-4 text-dark fw-normal ">
              To use Surfie and manage your kids device follow-up step by step guideline listed here.
            </p>

            <Row className="py-2">
              <Col>
                <NavLink
                  to="https://apps.apple.com/us/app/surfie-parent/id997309073"
                  className="mx-2 my-2 nav-link "
                >
                  <img src={Apple}  className="w-50 p-3 pb-0" alt="App-store-logo"/>
                </NavLink>

                <NavLink
                  to="https://play.google.com/store/apps/details?id=com.puresight.surfie.parentapp"
                  className="mx-2 my-2 nav-link "
                >
                  <img src={Google} className="w-50" alt="play-store-logo" />
                </NavLink>
              </Col>
              
            </Row>
          </Col>
          <Col sm={1} className="mt-5"></Col>

          <Col lg={6} className="mt-4">
            <Progressbar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default How;
