import React from "react";
import Surfie from "../assets/surfie.png";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import { HiOutlineMail,HiOutlinePhoneMissedCall,HiOutlineLocationMarker } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
const Footer = () => {
  return (
    <Container fluid>
      <Row className="fot text-white  pt-3">
        <Col >
          <p className="fs-6 text-center ">
            Schedule Surfie Ethiopia demo today!  

            <NavLink to="/pricing">
            <Button className=" text-center mt-2 ms-3 btn-light con">
            Schedule demo
            </Button>
          </NavLink>
          </p>
        
        </Col>                       
      </Row>

      <Row className="primary-fill pt-4 ps-3 text-white pb-4">
        <Col sm={4} className="align-items-center">
          <ul className="list-unstyled text-small mt-1">
            <img className="mt-4" src={Surfie} alt="Surfief" width={110} />
            <li className="pt-3 mb-1">AI-Based Online Child Safety Service </li>
       
          
            <li className="py-3"  >
            
              <FaFacebook size={25} className=""/>
              <FaInstagram size={25} className="ms-3"/>
              <FaTelegram size={25} className="ms-3"/>
            </li>
            </ul>
        </Col>

        <Col sm={4} className="align-items-center">
          <h5>Menus <hr className="w-25"/></h5>
        
          <ul className="list-unstyled text-small mt-1">
            <li className="mb-1">
              <a className="text-white text-decoration-none" href="/">
                Home
              </a>
            </li>
            <li className="mb-1">
              <a className="text-white text-decoration-none" href="/features">
                Features
              </a>
            </li>
            <li className="mb-1">
              <a className="text-white text-decoration-none" href="/pricing">
                Pricing
              </a>
            </li>
            <li className="mb-1">
              <a className="text-white text-decoration-none" href="/about">
                About us
              </a>
            </li>
            <li className="mb-1">
              <a className="text-white text-decoration-none" href="/contact">
                Contact us
              </a>
            </li>
            <li className="mb-1">
              <a className="text-white text-decoration-none" href="/account">
                Get Started
              </a>
            </li>
          </ul>
        </Col>
        <Col sm={4} className="align-items-center">
          <h5>Contact us<hr className="w-25"/></h5>
          <ul className="list-unstyled text-small mt-1 fw-normal">
          
            <li className="mb-1 text-white text-decoration-none">          
            <HiOutlineMail size={25} className="me-2"/>
            support@surfieethiopia.com
            </li>
            <li className="mb-1 ms-5 text-white text-decoration-none">
              contact@surfieethiopia.com
            </li>
            <li className="mb-1 text-white text-decoration-none">
            <HiOutlinePhoneMissedCall size={25} className="me-2"/>
              +251-992 758 586
            </li>
            <li className="mb-1 ms-5 text-white text-decoration-none">
              +251-911 287 546
            </li>
            <li className="mb-1 text-white text-decoration-none">
            <HiOutlineLocationMarker size={25} className="me-2"/>
             Husen Building, 2nd Floor,
            </li>
            <li className="mb-1 ms-5 text-white text-decoration-none">
            Bole 24, Addis ababa Ethiopia
            </li>
           
          </ul>
        </Col>

      
      </Row>
      <Row className="pt-3 copyright">
        <Col className="d-flex align-items-center justify-content-center">
          <p className=" text-small text-white ">
            ©2023 AfroMiNA Digital Technologies PLC. All Right Reserved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
