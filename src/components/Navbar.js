import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Surfie from "../assets/surfie.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem } from "react-bootstrap";

const Navbars = () => {
  return (
    <Navbar className="colored" expand="lg" sticky="top" >
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            className=" ms-3 "
            src={Surfie}
            alt="Surfie"
            width="80px"
            height="40px"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="  m-auto align-center">
          <Nav className=" me-auto my-2 my-lg-0 ms-4 ">
            <NavItem>
              <NavLink to="/" className=" text-white nav-link ">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/features" className="nav-link text-white">
                Features
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pricing" className="nav-link text-white">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link text-white">
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link pb-3 text-white">
                Contact
              </NavLink>
            </NavItem>
          </Nav>

          {/* <NavItem>
            <NavLink to="/" className="nav-link ps-4 me-3">
              Signin
            </NavLink>
          </NavItem> */}

<NavLink to="/account" className="btn btn-outline-light ">
            Get started
          </NavLink>
        </Navbar.Collapse>
        </Container>
    </Navbar>
     
  );
};

export default Navbars;
