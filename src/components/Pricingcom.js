import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cbe from "../assets/cbe.png";
import Telebirr from "../assets/telebirr.png";
import { NavLink } from "react-router-dom";
import Cash from "../assets/cash.png";
import Chapa from "../assets/chapa.png";
import { useTranslation } from "react-i18next";
import Pricing from "../constants/Constants";

function Pricingcom() {
  const [monthly, setMonthly] = useState(true);
  const { t } = useTranslation();
  return (
    <Container fluid>
      <Row className="d-flex p-4 mt-3 justify-content-center align-items-center">
        <h2 className="text-center mt-3 fw-bold"> {t("Package Pricing")} </h2>
        <p className="text-center text-secondary fw-semibold mb-3 fs-6">
          {t("One license for one device")}
        </p>
      </Row>

      <Row>
        <div className="form-box mb-5  d-flex align-items-center justify-content-center ">
          <div className="mb-4 d-flex align-items-center justify-content-between bg-light  m-auto shadow-sm rounded-pill px-0">
            <button
              type="button"
              className={
                monthly
                  ? "border-0 ms-0 rounded-pill primary-fill p-2 px-4 py-2 text-white fw-semibold gradient"
                  : "border-0 rounded-pill bg-light p-2 px-4 py-2 primary-text fw-semibold"
              }
              onClick={() => setMonthly(!monthly)}
            >
              {t("Monthly")}
            </button>
            <button
              type="button"
              className={
                monthly
                  ? "border-0 rounded-pill bg-light p-2 px-4 py-2 primary-text fw-semibold "
                  : "border-0 rounded-pill primary-fill p-2 px-4 py-2 text-white fw-semibold gradient"
              }
              onClick={() => setMonthly(!monthly)}
            >
              {t("Annual")}
            </button>
          </div>
        </div>
      </Row>

      <Container>
        <div className="row  mb-5 text-center d-flex justify-content-center">
          <div className="col-sm-3 mb-3 ">
            <div
              className="position-relative p-5 d-flex justify-content-center align-items-center m-auto border border-3 border-info rounded-circle license text-center"
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <h1 className="m-2 "> 1 </h1>
            </div>

            <div
              className="card overflow-visible border-0 rounded-3 shadow space "
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <div className="rounded-top py-5 primary-fill rounded-top-3">
                <h4 className="mt-3 fw-normal text-white ">
                  {t("Device Licence")}
                </h4>
              </div>
              <div className="card-body  ">
                {monthly ? (
                  <p className=" pricing-card-title fw-semibold fs-4 pt-2">
                    {Pricing.monthlyone} {t("Birr")}{" "}
                    <small className="text-muted fw-light">/{t("month")}</small>
                  </p>
                ) : (
                  <p className="pricing-card-title fw-semibold fs-4 pt-2">
                    {Pricing.annuallyone} {t("Birr")}
                    <small className="text-muted fw-light">
                      /{t("annual")}
                    </small>
                  </p>
                )}

                {monthly ? (
                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li className="p-3 fw-bold fs-5 ">
                      {t("7 days free trial")}
                    </li>
                    <span className="py-3 px-2 mt-4 fs-6 text-center fw-normal">
                      {t("40% Discount on Annual Subscription")}
                    </span>
                  </ul>
                ) : (
                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li className="p-3 fw-bold fs-5 ">
                      {t("7 days free trial")}
                    </li>
                    <span className="py-3 px-2 mt-4 fs-6 text-center fw-normal">
                      {t("40% Discount on Annual Subscription")}
                    </span>
                  </ul>
                )}

                {/* <Link
                  to="/account"
                  className=" w-75  btn btn-md bg-dark fw-normal text-light"
                >
                  {t("Select")}
                </Link> */}
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3">
            <div
              className="position-relative p-5 d-flex justify-content-center align-items-center  m-auto border border-3 border-info rounded-circle license text-center"
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <h1 className="m-2 "> 5 </h1>
            </div>
            <div
              className="card overflow-visible border-0 rounded-3 shadow space "
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <div className="rounded-top py-5 primary-fill">
                <h4 className="mt-3 fw-normal text-white">
                  {t("Device Licence")}
                </h4>
              </div>
              <div className="card-body">
                {monthly ? (
                  <p className="pricing-card-title fs-4 fw-semibold pt-2">
                    {Pricing.monthlythree} {t("Birr")}{" "}
                    <small className="text-muted fw-light">/{t("month")}</small>
                  </p>
                ) : (
                  <p className="card-title pricing-card-title fw-semibold fs-4 pt-2">
                    {Pricing.annuallythree} {t("Birr")}
                    <small className="text-muted fw-light">
                      /{t("annual")}
                    </small>
                  </p>
                )}
                {monthly ? (
                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li className="p-3 fw-bold fs-5">
                      {t("7 days free trial")}
                    </li>
                    <span className="py-3 px-2 mt-4 fs-6 text-center fw-normal">
                      {t("40% Discount on Annual Subscription")}
                    </span>
                  </ul>
                ) : (
                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li className="p-3 fw-bold fs-5">
                      {t("7 days free trial")}
                    </li>
                    <span className="py-3 px-2 mt-4 fs-6 text-center fw-normal">
                      {t("40% Discount on Annual Subscription")}
                    </span>
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3">
            <div
              className="position-relative p-5 d-flex justify-content-center align-items-center  m-auto border border-3 border-info rounded-circle license text-center"
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <h1 className="m-2 "> 10 </h1>
            </div>
            <div
              className="card overflow-visible border-0 rounded-3 shadow space "
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <div className="rounded-top py-5 primary-fill">
                <h4 className="mt-3 fw-normal text-white">
                  {t("Device Licence")}
                </h4>
              </div>
              <div className="card-body">
                {monthly ? (
                  <p className="card-title pricing-card-title fs-4 fw-semibold pt-2">
                    {Pricing.monthlyfive}
                    {t(" Birr ")}
                    <small className="text-muted fw-light">/{t("month")}</small>
                  </p>
                ) : (
                  <p className="card-title pricing-card-title fs-4 fw-semibold pt-2">
                    {Pricing.annuallyfive} {t("Birr")}
                    <small className="text-muted fw-light">
                      /{t("annual")}
                    </small>
                  </p>
                )}
                {monthly ? (
                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li className="p-3 fw-bold fs-5">
                      {t("7 days free trial")}
                    </li>
                    <span className="py-3 px-2 mt-4 fs-6 text-center fw-normal">
                      {t("40% Discount on Annual Subscription")}
                    </span>
                  </ul>
                ) : (
                  <ul className="list-unstyled mt-4 mb-4 text-muted">
                    <li className="p-3 fw-bold fs-5">
                      {t("7 days free trial")}
                    </li>
                    <span className="py-3 px-2 mt-4 fs-6 text-center fw-normal">
                      {t("40% Discount on Annual Subscription")}
                    </span>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container className="gradient  py-4 rounded-3 d-flex align-items-center justify-content-center">
        <Row>
          <Col
            sm={8}
            className="d-flex align-items-center justify-content-center ps-4"
          >
            <p className="  text-center text-dark fw-light fs-4 ">
              {t(
                "If you want Surfie Ethiopia license for more than 10 devices contact us!"
              )}
            </p>
          </Col>

          <Col
            sm={3}
            className="d-flex align-items-center justify-content-center"
          >
            <NavLink
              to="/contact"
              className="btn btn-light primary-bg border-0  fw-semibold p-2 px-5 text-decoration-none"
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
              }}
            >
              {t("Contact us")}
            </NavLink>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="p-3"></Row>
        <Row className="d-flex mb-5 pb-0 p-4 mt-3 text-center align-items-center">
          <Col lg={7}>
            <h1 className="text-left pt-5 pe-3"> {t("Pay with")} </h1>
            <p className="pb-4 pe-3  text-left  text-muted">
              {t("It is Made Easy")}
            </p>
          </Col>

          <Col
            sm={2}
            className="d-flex justify-content-evenly align-items-center"
          >
            <img
              className="justfy-content-center p-3 pe-2 shadow-sm rounded-3 me-2"
              src={Cash}
              alt="Cash"
              width="80px"
              height="73px"
            />

            <img
              className="justfy-content-center mt-1 p-2 pe-2 shadow-sm rounded-3 me-2"
              src={Telebirr}
              alt="Telebirr"
              width="68px"
              height="68px"
            />

            <img
              className="justfy-content-center p-2  rounded-4"
              src={Chapa}
              alt="Chapa"
              width="82px"
              height="84px"
            />
            <img
              className="justfy-content-center p-2 pe-2 pt-2"
              src={Cbe}
              alt="Cbe"
              width="84px"
              height="86px"
            />
          </Col>
        </Row>
      </Container>
      <Row className="p-4"></Row>
    </Container>
  );
}
export default Pricingcom;
