import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cbe from "../assets/cbe.png";
import Telebirr from "../assets/telebirr.png";
import { NavLink } from "react-router-dom";
import Cash from "../assets/cash.png";
import Chapa from "../assets/chapa.png";
import { useTranslation } from 'react-i18next';

function Pricingcom() {
  const [monthly, setMonthly] = useState(true);
  const { t } = useTranslation();
  return (
    <Container fluid>
      <Row className="d-flex p-4 mt-3 justify-content-center align-items-center">
        <h2 className="text-center mt-3 fw-bold"> {t('Package Pricing')} </h2>
        <p className="text-center text-secondary fw-semibold mb-3 fs-6">
          {t('One license for one device')}
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
              {t('Monthly')}
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
              {t('Annual')}
            </button>
          </div>
        </div>
      </Row>

      <Container>
        <div className="row  mb-5 text-center d-flex justify-content-center">
          <div className="col-sm-3 mb-3 ">
            <div className="position-relative p-5 d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-info rounded-circle license text-center">
              <h1 className="m-2 "> 1 </h1>
            </div>

            <div className="card overflow-visible border-0 rounded-3 shadow-sm space py-2">
              <div className="rounded-top py-5 primary-fill rounded-top-3">
                <h4 className="mt-3 fw-normal text-white ">{t('Device Licence')}</h4>
              </div>
              <div className="card-body cardcol ">
                {monthly ? (
                  <p className=" pricing-card-title fs-4 pt-2">
                    300 {t('Birr')}{" "}
                    <small className="text-muted fw-light">/{t('month')}</small>
                  </p>
                ) : (
                  <p className="pricing-card-title fs-4 pt-2">
                    3,300 {t('Birr')}
                    <small className="text-muted fw-light">/{t('annual')}</small>
                  </p>
                )}

                {monthly ? (
                  <ul className="list-unstyled mt-5 mb-5 text-muted">
                    <li>{t('14 days free trial')}</li>
                  </ul>
                ) : (
                  <ul className="list-unstyled mt-5 mb-5 text-muted">
                    <li>{t('Annually Pay only 3,300 Birr Get 1 month free')}</li>
                  </ul>
                )}

                <Link
                  to="/account"
                  className=" w-75  btn btn-md bg-dark fw-normal text-light"
                >
                  {t('Select')}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3">
            <div className="position-relative p-5 d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-info rounded-circle license text-center">
              <h1 className="m-2 "> 3 </h1>
            </div>
            <div className="card overflow-visible border-0 rounded-3 shadow-sm space py-2">
              <div className="rounded-top py-5 primary-fill">
                <h4 className="mt-3 fw-normal text-white">{t('Device Licence')}</h4>
              </div>
              <div className="card-body cardcol">
                {monthly ? (
                  <p className="pricing-card-title fs-4 pt-2">
                    450 {t('Birr')}{" "}
                    <small className="text-muted fw-light">/{t('month')}</small>
                  </p>
                ) : (
                  <p className="card-title pricing-card-title fs-4 pt-2">
                    4,950 {t('Birr')}
                    <small className="text-muted fw-light">/{t('annual')}</small>
                  </p>
                )}
                {monthly ? (
                  <ul className="list-unstyled mt-5 mb-5 text-muted">
                     <li>{t('14 days free trial')}</li>
                  </ul>
                ) : (
                  <ul className="list-unstyled mt-5 mb-5 text-muted">
                    <li>{t('Annually Pay only 4,950 Birr Get 1 month free')}</li>
                  </ul>
                )}
                <Link
                  to="/account"
                  className=" w-75  btn btn-md bg-dark fw-normal text-light"
                >
                  {t('Select')}
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-3 mb-3">
            <div className="position-relative p-5 d-flex justify-content-center align-items-center bg-white m-auto border border-3 border-info rounded-circle license text-center">
              <h1 className="m-2 "> 5 </h1>
            </div>
            <div className="card overflow-visible border-0 rounded-3 shadow-sm space py-2">
              <div className="rounded-top py-5 primary-fill">
                <h4 className="mt-3 fw-normal text-white">{t('Device Licence')}</h4>
              </div>
              <div className="card-body cardcol">
                {monthly ? (
                  <p className="card-title pricing-card-title fs-4  pt-2">
                    600 {t('Birr')}{" "}
                    <small className="text-muted fw-light">/{t('month')}</small>
                  </p>
                ) : (
                  <p className="card-title pricing-card-title fs-4  pt-2">
                    6,600 {t('Birr')}
                    <small className="text-muted fw-light">/{t('annual')}</small>
                  </p>
                )}
                {monthly ? (
                  <ul className="list-unstyled mt-5 mb-5 text-muted">
                    <li>{t('14 days free trial')}</li>
                  </ul>
                ) : (
                  <ul className="list-unstyled mt-5 mb-5 text-muted">
                    <li>{t('Annually Pay only 6,600 ETB Get 1 month free')}</li>
                  </ul>
                )}
                <Link
                  to="/account"
                  className=" w-75  btn btn-md bg-dark fw-normal text-light"
                >
                  {t('Select')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container  className="gradient py-4 rounded-3 d-flex align-items-center justify-content-center">
    
        <Row>
          <Col
            sm={8}
            className="d-flex align-items-center justify-content-center ps-4"
          >
            <p className="  text-center text-dark fw-light fs-4 ">
              {t('If you want Surfie Ethiopia license for more than 5 devices Contact us!')}
            </p>
          </Col>

          <Col
            sm={3}
            className="d-flex align-items-center justify-content-center"
          >
            <NavLink
              to="/contact"
              className="btn btn-light primary-bg text-dark  fw-semibold p-2 px-5 text-decoration-none"
            >
              {t('Contact')}
            </NavLink>
          </Col>
        </Row>
      </Container>

<Container>
      <Row className="p-3"></Row> 
      <Row className="d-flex mb-5 pb-0 p-4 mt-3 text-center align-items-center">
        <Col lg={7} >
          <h1 className="text-left pt-5 pe-3"> {t('Pay with')} </h1>
          <p className="pb-4 pe-3  text-left  text-muted"> {t('It is Made Easy')}</p>
        </Col>


        <Col
          sm={2}
          className="d-flex justify-content-evenly align-items-start"
        >
            <img
            className="justfy-content-center p-2 pe-2"
            src={Cash}
            alt="Cash"
            width="86px"
            height="89px"
          />
          <img
            className="justfy-content-center p-2 pe-2"
            src={Cbe}
            alt="Cbe"
            width="86px"
            height="89px"
          />
          <img
            className="justfy-content-center p-2 pe-2"
            src={Telebirr}
            alt="Telebirr"
            width="86px"
            height="89px"
          />
        
          <img
            className="justfy-content-center p-2 "
            src={Chapa}
            alt="Chapa"
            width="82px"
            height="84px"
          />
        </Col>
      </Row>
      </Container>
      <Row className="p-4"></Row> 
    
    </Container>
  );
}
export default Pricingcom;
