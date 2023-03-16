import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Cbe from "../assets/cbe.png";
import Telebirr from "../assets/telebirr.png";
import Amole from "../assets/amole.png";


function Pricingcom() {
  const navigate = useNavigate();

  const [monthly, setMonthly] = useState(true);

  return (

    <Container fluid>
      <Row className="d-flex p-4 mt-3 justify-content-center align-items-center">
        <h2 className="text-center mt-3 fw-bold"> Package Price ! </h2>
        <h5 className="text-center primary-bg mb-3 ">
          {" "}
          One license for one device
        </h5>
      </Row>

      <Row>
        <div className="form-box mb-5  d-flex align-items-center justify-content-center ">
          <div className="mb-4 d-flex align-items-center justify-content-between bg-light  m-auto shadow-sm rounded-pill px-0">
            <button
              type="button"
              className={
                monthly
                  ? "border-0 ms-0 rounded-pill primary-fill p-2 px-4 py-2 text-white fw-semibold"
                  : "border-0 rounded-pill bg-light p-2 px-4 py-2 primary-text fw-semibold"
              }
              onClick={() => setMonthly(!monthly)}
            >
              Monthly
            </button>
            <button
              type="button"
              className={
                monthly
                  ? "border-0 rounded-pill bg-light p-2 px-4 py-2 primary-text fw-semibold"
                  : "border-0 rounded-pill primary-fill p-2 px-4 py-2 text-white fw-semibold"
              }
              onClick={() => setMonthly(!monthly)}
            >
              Annual
            </button>
          </div>
        </div>
      </Row>

      <div className="px-5 row row-cols-1  row-cols-md-3 mb-5 text-center">
        <div className="col mb-3 ">
          {/* <BsCircle size={70} color="#10a698" className="m-2 align-items-center" /> */}
          <div className="position-relative p-5 d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-info rounded-circle license text-center">
            <h1 className="m-2 "> 5 </h1>
          </div>

          <div className="card overflow-visible border-0 shadow-sm space">
            <div className="rounded-top py-5 primary-fill">
              <h4 className="mt-3 fw-normal text-white">Device Licence</h4>
            </div>
            <div className="card-body cardcol">
              {monthly ? (
                <h1 className="card-title pricing-card-title">
                  ETB 200 <small className="text-muted fw-light">/month</small>
                </h1>
              ) : (
                <h1 className="card-title pricing-card-title">
                  ETB 2200<small className="text-muted fw-light">/annual</small>
                </h1>
              )}

              <ul className="list-unstyled mt-5 mb-5">
                <li>Annually Pay only 2200 ETB Get 1 month free</li>
              </ul>
              <Link
                to="/pricing"
                className=" w-100 btn btn-lg btn-outline-info"

              >
                {" "}
                Select
              </Link>
            </div>
          </div>
        </div>

        <div className="col mb-3">
          <div className="position-relative p-5 d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-info rounded-circle license text-center">
            <h1 className="m-2 "> 10 </h1>
          </div>
          <div className="card overflow-visible border-0 shadow-sm space">
            <div className="rounded-top py-5 primary-fill">
              <h4 className="mt-3 fw-normal text-white">Device Licence</h4>
            </div>
            <div className="card-body cardcol">
              {monthly ? (
                <h1 className="card-title pricing-card-title">
                  ETB 300 <small className="text-muted fw-light">/month</small>
                </h1>
              ) : (
                <h1 className="card-title pricing-card-title">
                  ETB 3300 <small className="text-muted fw-light">/annual</small>
                </h1>
              )}
              <ul className="list-unstyled mt-5 mb-5">
                <li>Annually Pay only 3300 ETB Get 1 month free</li>
              </ul>
              <Link
                to="/pricing"
                className=" w-100 btn btn-lg btn-outline-info"

              >
                {" "}
                Select
              </Link>
            </div>
          </div>
        </div>

        <div className="col mb-3">
          <div className="position-relative p-5 d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-info rounded-circle license text-center">
            <h1 className="m-2 "> 15 </h1>
          </div>
          <div className="card overflow-visible border-0 shadow-sm space ">
            <div className="rounded-top py-5 primary-fill">
              <h4 className="mt-3 fw-normal text-white">Device Licence</h4>
            </div>
            <div className="card-body cardcol">
              {monthly ? (
                <h1 className="card-title pricing-card-title">
                  ETB 500 <small className="text-muted fw-light">/month</small>
                </h1>
              ) : (
                <h1 className="card-title pricing-card-title">
                  ETB 5500 <small className="text-muted fw-light">/annual</small>
                </h1>
              )}
              <ul className="list-unstyled mt-5 mb-5">
                <li>Annually Pay only 5500 ETB Get 1 month free</li>
              </ul>
              <Link
                to="/pricing"
                className=" w-100 btn btn-lg btn-outline-info"

              >
                {" "}
                Select
              </Link>
            </div>
          </div>
        </div>
      </div>


      <Row fluid className="colored2 ">
        <Col
          lg={9}
          className="d-flex align-items-center justify-content-center"
        >
          <h5 className="py-4 px-3 ps-0 fs-5">
            If you want surfie ethiopia license for more than 15 devices
          </h5>

          <button
            type="button"
            className="btncolor p-2 px-5 "
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </Col>
      </Row>

      <Row className="d-flex pb-0 p-4 mt-3 text-center align-items-center">
        <Col lg={6}>
          <h1 className="text-left pt-5 pe-3"> Pay with </h1>
          <h5 className="pb-4 pe-3  text-left  text-muted"> It is Made Easy</h5>
        </Col>

        <Col sm={1}>
        </Col>

        <Col
          lg={2}
          className="d-flex justify-content-evenly align-items-center"

        >
          <img
            className="justfy-content-center p-1 pe-2"
            src={Cbe}
            alt="Cbe"
            width="86px"
            height="89px"

          />
          <img
            className="justfy-content-center p-1 pe-2"
            src={Telebirr}
            alt="Telebirr"
            width="86px"
            height="89px"
          />
          <img
            className="justfy-content-center p-1 "
            src={Amole}
            alt="Amole"
            width="86px"
            height="89px"
          />
        </Col>

      </Row>

      {/* <Row className="d-flex mb-5 p-4 pt-0 text-center align-items-center">
        <Col sm={4}>         
        </Col>

        <Col
          sm={4}
          className="d-flex justify-content-evenly align-items-center"
        >
          <h5>Cbe</h5> 
          <h5>Telebirr</h5> 
          <h5>Amole</h5>   
             
        </Col>

      </Row> */}
    </Container>
  )
}
export default Pricingcom;
