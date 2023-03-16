import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import IntroImage from "../assets/mob.png";

import { useNavigate } from "react-router-dom";

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
          <h1 className="text-left pt-5"> How it works </h1>
          <h4 className="pb-4 mb-5 text-muted"> Feature of Surfie Ethiopia </h4>
        </Row>

        <Row>
          <Col id="card">
            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdTimer size={22}  className="primary-bg m-2" />
                  </span>
                </div>
                <Card.Title>Set Time Limit</Card.Title>
                <Card.Text>
                  You can set how many hour your kids can use the digital device
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdDevices size={22}  className="m-2 primary-bg" />
                  </span>
                </div>
                <Card.Title>Cross Devices Protection</Card.Title>
                <Card.Text>
                  Provides protection at home and on the go on mobile devices{" "}
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdLocationPin size={22}  className="primary-bg m-2" />
                  </span>
                </div>
                <Card.Title>Track Location</Card.Title>
                <Card.Text>
                  You can keep track of your child location and also set allowed
                  geofence intervals
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
                    <MdWebAssetOff size={22} className="primary-bg m-2" />
                  </span>
                </div>
                <Card.Title>Web filtering</Card.Title>

                <Card.Text className="text-dark">
                  You can block website access and allow the one you trusted.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="border-0 shadow-sm m-2 mb-4 p-3">
              <Card.Body>
                <div className="d-flex justify-content-end position-absolute end-0 top-0 m-2 ">
                  <span className="align-items-center rounded-circle shadow-sm  border-light bg-white border ">
                    <MdOutlineAppBlocking
                      size={22}
                      className=" primary-bg m-2"
                    />
                  </span>
                </div>
                <Card.Title>Block Apps</Card.Title>
                <Card.Text>
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
                      size={22}
                      className=" primary-bg m-2"
                    />
                  </span>
                </div>
                <Card.Title>Online Safety</Card.Title>
                <Card.Text>Catch & block offensive contents.</Card.Text>
              </Card.Body>
            </Card>

           
           
            <button type="button"  className=" btncolor mb-5 p-2 " onClick={() => navigate("/features")}>
            Find More
              </button>



          </Col>
        </Row>
      </Container>

      <Container>
        <Row className=" mb-3 ">
          
          <Col lg={5} className="mt-5">
            <h2 className="text-left  pt-5"> How to get started</h2>
            <h5 className="pb-4 mt-4 text-muted ">
              To use surfie and manage your kids device first you should
              download surfie child Application.
            </h5>

            <Row className="pt-2 pb-2 d-grid gap-5 d-md-flex">
           <Col>
              <button
            type="button"
            className="btncolor m-2 p-2 ps-5 pe-5  me-3"
            onClick={() => navigate("/")}
          >For Android</button>

            <button
            type="button"
            className="m-2 p-2 ps-5 pe-5 btn btn-light border border-1 me-3"
            onClick={() => navigate("/")}
          >For Iphone</button>            

</Col>
            </Row>
            </Col>
         

          <Col sm={1} className="mt-5">
            </Col>

          <Col lg={6} className="mt-5">
          </Col>

        </Row>
      </Container>
    </div>
  );
}
export default How;
