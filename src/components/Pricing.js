import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import IntroImage from "../assets/mob.png";
import { BsCircle } from "react-icons/bs";

function Pricing() {
  return (
    <div>
      <Container>
        <Row className="d-flex p-4 mt-3 justify-content-center align-items-center">
          <h3 className="text-center pt-5 fw-bold"> Package Price! </h3>
          <h6 className="text-center text-color-primary mb-5 ">
            {" "}
            One license for one device
          </h6>
        </Row>
        

        <div className="row row-cols-1 row-cols-md-3 mb-5 text-center">
          <div className="col">
            {/* <BsCircle size={70} color="#10a698" className="m-2 align-items-center" /> */}
            <div className=" zindex-dropdown overflow-hidden d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-success rounded-circle license text-center">
              <h1 className="m-2 "> 1 </h1>
            </div>

            <div className="card overflow-visible border-0 shadow-sm space">
              <div className="card-header py-5 text-bg-primary">
                <h4 className="my-0 fw-normal">Device Licence</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ETB 200 <small className="text-muted fw-light">/month</small>
                </h1>
                <ul className="list-unstyled mt-5 mb-5">
                  <li>Annually Pay only 2200 ETB Get 1 month free</li>
                </ul>
                <Link
                  to="/pricing"
                  className=" w-100 btn btn-lg btn-outline-primary"
                  href="/Feature"
                >
                  {" "}
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 shadow">
              <div className="card-header py-5 text-bg-primary">
                <h4 className="my-0 fw-normal ">Device Licence</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ETB 300 <small className="text-muted fw-light">/month</small>
                </h1>
                <ul className="list-unstyled mt-5 mb-5">
                  <li>Annually Pay only 3300 ETB Get 1 month free</li>
                </ul>
                <Link
                  to="/pricing"
                  className=" w-100 btn btn-lg btn-outline-primary"
                  href="/Feature"
                >
                  {" "}
                  Select
                </Link>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card border-0 shadow-sm">
              <div className="card-header py-5 text-bg-primary">
                <h4 className="my-0 fw-normal">Device Licence</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ETB 500 <small className="text-muted fw-light">/month</small>
                </h1>
                <ul className="list-unstyled mt-5 mb-5">
                  <li>Annually Pay only 5500 ETB Get 1 month free</li>
                </ul>
                <Link
                  to="/pricing"
                  className=" w-100 btn btn-lg btn-outline-primary"
                  href="/Feature"
                >
                  {" "}
                  Select
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Row className="mt-0 mb-5 bg-light my-md-0 pt-md-3">
        <Col
          sm={9}
          className="d-flex align-items-center justify-content-center"
        >
          <h5 className="p-5">
            {" "}
            If you want surfie ethiopia license for more than 5 devices{" "}
          </h5>
        </Col>

        <Col sm={3}>
          <Button className="btn pb-2 mt-4 me-3" href="/Contact">
            Contact Us
          </Button>
        </Col>
      </Row>

      <Row className="d-flex p-4 mt-5 text-center align-items-center">
        <Col sm={4}>
          <h1 className="text-end pt-5 pe-3"> Pay with </h1>
          <h5 className="pb-4 pe-3  text-end  text-muted"> It is Made Easy</h5>
        </Col>

        <Col
          sm={6}
          className="d-flex justify-content-evenly align-items-center"
        >
          <img
            className="justfy-content-center"
            src={IntroImage}
            alt="IntroImage"
            width="96px"
            height="99px"
          />
          <img
            className="justfy-content-center "
            src={IntroImage}
            alt="IntroImage"
            width="96px"
            height="99px"
          />
          <img
            className="justfy-content-center  "
            src={IntroImage}
            alt="IntroImage"
            width="96px"
            height="99px"
          />
          <img
            className="justfy-content-center  "
            src={IntroImage}
            alt="IntroImage"
            width="96px"
            height="99px"
          />
        </Col>
      </Row>
    </div>
  );
}
export default Pricing;
