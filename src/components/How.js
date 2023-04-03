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
import { useTranslation } from 'react-i18next';


function How() {
  const { t } = useTranslation();
  return (
    <div>
      <Container>
        <Row className="p-5"></Row> 

        <Row className="d-flex p-4 mt-3">
          <p className="text-left pt-3 fs-2 fw-semibold"> {t('Surfie Ethiopia App Features')} </p>
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
                <Card.Title className="primary-bg ">{t('Set Time Limit')}</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                {t('Allow parents to set limits on the amount of time their children can spend on their devices or on certain apps.')}
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
                <Card.Title className="primary-bg mt-2">{t('Cross Devices Protection')}</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                {t('Allows parents to apply their chosen settings across multiple devices, such as smartphones, tablets, laptops, and desktop computers.')}
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
                <Card.Title className="primary-bg mt-2">{t('Track Location')}</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                  {t('Location tracking features to help parents keep tabs on their childrens whereabouts.')}
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
                <Card.Title className="primary-bg mt-2">{t('Web filtering')}</Card.Title>

                <Card.Text className="text-muted fw-lighter mt-3">
               {t('Allow parents to block access to certain websites or categories of websites deemed inappropriate for children.')}
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
                <Card.Title className="primary-bg mt-2">{t('App and game blocking')}</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                {t('Allows parents to block access to certain apps on their childrens devices. Parents can choose which apps they want to block based on their content, age rating, or other criteria.')}
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
                <Card.Title className="primary-bg mt-2">{t('Cyberbullying protection')}</Card.Title>
                <Card.Text className="text-muted fw-lighter mt-3">
                {t('Help parents detect and prevent cyberbullying, such as alerts for offensive or threatening messages')}
                </Card.Text>
              </Card.Body>
            </Card>

            <Link className="btn btn-md btn-light secondary-color px-3 ms-2 mb-5 p-2 fs-6 fw-semibold shadow-sm " id="find" to="/features">
              {t('Find More')} <BsFillArrowRightCircleFill size={16} className="float-right  ms-4"/>
            </Link>
          </Col>
        </Row>
      </Container>

      <Container>
      <Row className="p-5"></Row> 
        <Row className=" mb-3 p-4 rounded-4 gradient blur">
          
        <Col lg={6} className="mt-3 mb-3 ms-3">
        <p className="text-left fs-2 text-white "> {t('How to get started')}</p>
            <Progressbar />
          </Col>
          <Col sm={1} className="mt-5"></Col>


          <Col lg={4} className="m-auto align-items-center justify-content-center">
    
           
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
      </Container>
    </div>
  );
}
export default How;
