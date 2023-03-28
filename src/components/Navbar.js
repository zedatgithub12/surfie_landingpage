import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Surfie from "../assets/surfie.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar className=" colored " expand="lg" sticky="top" >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            className=" ms-4 "
            src={Surfie}
            alt="Surfie"
            width="90px"
            height="43px"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse  className="  m-auto align-center">
          <Nav className="me-auto my-2 my-lg-0 ">
            
          <NavItem>
              <NavLink className=" nav-link ps-5 ">               
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/" className=" text-white nav-link ps-5 ">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/features" className="nav-link text-white ps-5">
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pricing" className="nav-link text-white ps-5">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link text-white ps-5">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link pb-3 text-white ps-5">
                Contact
              </NavLink>
            </NavItem>
          </Nav>

          {/* <NavItem>
            <NavLink to="/" className="nav-link ps-4 me-3">
              Signin
            </NavLink>
          </NavItem> */}

<NavLink to="/account" className="ms-3 px-4 button btn btn-outline-light get">
            Get started
          </NavLink>
        </Navbar.Collapse>
        </Container>
    </Navbar>
     
  );
};

export default Navbars;
