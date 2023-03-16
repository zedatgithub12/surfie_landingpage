import React from "react";

import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import Afromina from "../assets/afromina.png";

const Footer = () => {
  return (
 <Container fluid>
      <Row className="bg-light mt-3 ps-3 pt-3 border-top">
        <Col sm={3} className=""  >
       
          <ul className="list-unstyled text-small ">
          <img className="" src={Afromina} alt="Afromina" width={140}/>
            <li className="mb-1">With surfie parenting is easy </li>
            <li className="mb-1">and it is powered by AfroMiNA</li>
             <li>Digital Technologies Plc.</li> 
              
          </ul>
        </Col>

        <Col sm={3}>
        <h5>Menus</h5>
          <ul className="list-unstyled text-small">

          <li className="mb-1"><a className="link-secondary text-decoration-none" href="/">Home</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="/features">Features</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="/pricing">Pricing</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="/about">About us</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="/contact">Contact us</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="/createaccount">Create Account</a></li>
          </ul>
        </Col>
        <Col sm={4}>
        <h5>Contact us</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1 link-secondary text-decoration-none">support@surfie.afrominadigitals.com</li>
          <li className="mb-1 link-secondary text-decoration-none">contact@surfie.afrominadigitals.com</li>
          <li className="mb-1 link-secondary text-decoration-none">+2519********</li>
          <li className="mb-1 link-secondary text-decoration-none">+2519********</li>
        </ul>
        </Col>

        <Col sm={2}>
        <h5>Connect now</h5>
        <ul className="">
          <li className="mb-1 primary-bg "> <FaFacebook/> <FaInstagram/> <FaTelegram/> </li>
        </ul>
        </Col>

        <Row className="mt-2">
            <Col className="d-flex align-items-center justify-content-center">
            <p className="fs-7 text-small text-secondary">©2023 AfroMiNA Digital Technologies PLC. All Right Reserved.</p>
            </Col>
        </Row>

      </Row>
   </Container>
  );
};
export default Footer;
