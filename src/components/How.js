import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import IntroImage from "../assets/mob.png";
import Apple from "../assets/apple.png";
import Google from "../assets/google.png";
import Progressbar from "../components/Progressbar";
import { Link, useNavigate } from "react-router-dom";

import {
  MdWebAssetOff,
  MdTimer,
  MdDevices,
  MdLocationPin,
  MdOutlineAppBlocking,
} from "react-icons/md";
import { AiTwotoneSafetyCertificate } from "react-icons/ai";

function How() {
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        <Row className="d-flex p-4 mt-3">
          <h2 className="text-left pt-3"> Feature of Surfie Ethiopia </h2>
       
        </Row>

        <Row>
          <Col id="card">
            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdTimer size={30} className="primary-bg m-2" />
                  </span>
                </div>
                <Card.Title>Set Time Limit</Card.Title>
                <Card.Text className="text-muted">
                  You can set how many hour your kids can use the digital device.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdDevices size={30} className="m-2 primary-bg" />
                  </span>
                </div>
                <Card.Title>Cross Devices Protection</Card.Title>
                <Card.Text className="text-muted">
                  Provides protection at home and on the go on mobile devices.{" "}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdLocationPin size={30} className="primary-bg m-2" />
                  </span>
                </div>
                <Card.Title>Track Location</Card.Title>
                <Card.Text className="text-muted">
                  You can keep track of your child location and also set allowed
                  geofence intervals.
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
            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdWebAssetOff size={30} className="primary-bg m-2" />
                  </span>
                </div>
                <Card.Title>Web filtering</Card.Title>

                <Card.Text className="text-muted">
                  You can block website access and allow the one you trusted.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdOutlineAppBlocking
                      size={30}
                      className=" primary-bg m-2"
                    />
                  </span>
                </div>
                <Card.Title>Block Apps</Card.Title>
                <Card.Text className="text-muted">
                  You can block unwanted app access and allow the one you
                  trusted.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <AiTwotoneSafetyCertificate
                      size={30}
                      className=" primary-bg m-2"
                    />
                  </span>
                </div>
                <Card.Title>Online Safety</Card.Title>
                <Card.Text className="text-muted">
                  Catch & block offensive contents.
                </Card.Text>
              </Card.Body>
            </Card>

            <Link className=" mb-5 p-2 fs-6  " id="find" to="/features">
              Find More
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=" mb-3 ">
          <Col lg={5} className="mt-5">
            <h2 className="text-left  pt-5"> How to get started</h2>
            <p className="pb-4 mt-4 text-muted ">
              To use Surfie and manage your kids device first you should
              download Surfie Parent, click down below.
            </p>

            <Row className="pt-2 pb-2 d-grid gap-5 d-md-flex">
              <Col>
                <img
                  src={Apple}
                  alt="Apple"
                  width="200px"
                  height="50px"
                  className="mx-2  my-2 pointer"
                  onClick={() =>
                    navigate(
                      "https://apps.apple.com/us/app/surfie-parent/id997309073"
                    )
                  }
                />

                <img
                  src={Google}
                  alt="Google"
                  width="200px"
                  height="50px"
                  className="mx-2  my-2 pointer"
                  onClick={() =>
                    navigate(
                      "https://play.google.com/store/apps/details?id=com.puresight.surfie.parentapp"
                    )
                  }
                />              



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
