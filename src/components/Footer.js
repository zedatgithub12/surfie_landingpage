import React from "react";
import Surfie from "../assets/surfie.png";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";
import FormControl from "@mui/joy/FormControl";
import { AiFillCheckCircle,AiFillWarning } from "react-icons/ai";
import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
const Footer = () => {
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <Container fluid>
      <Row className="fot text-white  pt-3">
      <p className="fs-4 text-center text-dark mt-2" >
                  Do you feel like trying?
                </p>
        <Col sm={4} className="pb-4">
        
                <form onSubmit={handleSubmit} className="">
                  <FormControl>
                    <Input
                  
                      className="px-3 py-2 rounded-pill ps-4 "
                      placeholder="Enter your email address"
                      type="email"
                      required
                      value={data.email}
                      onChange={(event) =>
                        setData({
                          email: event.target.value,
                          status: "initial",
                        })
                      }
                      error={data.status === "failure"}
                      endDecorator={
                        <Button
                         className="rounded-pill px-4 gradient text-dark"
                          
                          loading={data.status === "loading"}
                          type="submit"
                        
                        >
                          Free Trial
                        </Button>
                      }
                    />
                    {data.status === "failure" && (
                      <FormHelperText
                        sx={(theme) => ({
                          color: theme.vars.palette.danger[400],
                        })}
                      >
                        <AiFillWarning size={16} className="text-danger mx-2" />
                        Oops! something went wrong, please try again later.
                      </FormHelperText>
                    )}

                    {data.status === "sent" && (
                      <FormHelperText
                        className="text-success "
                      >
                        <AiFillCheckCircle size={16} className="text-success mx-2" />
                        The link to download app is sent to email provided!
                      </FormHelperText>
                    )}
                  </FormControl>
                </form>
          
            
        </Col>
      </Row>

      <Row className="primary-fill pt-4 ps-3 text-white pb-4">
        <Col sm={4} className="align-items-center">
        <img className="mt-4" src={Surfie} alt="Surfief" width={110} />
            <p className="pt-3 mb-1">AI-Based Online Child Safety Service </p>

          <ul className="list-unstyled text-small mt-1 d-flex ">
          
            <li className="m-2 ms-0">
              <NavLink
                to="https://t.me/surfie_ethiopia"
                className=" nav-link "
              >
                <FaTelegram size={30} className="" />
              </NavLink>
              </li>

              <li className="m-2">
              <NavLink
                to=""
                className="nav-link "
              >
                <FaFacebook size={30} className="" />
              </NavLink>
              </li>

            
              <li className="m-2">
              <NavLink
                to=""
                className="nav-link "
              >
                <FaInstagram size={30} className="" />
              </NavLink>
             </li>
           
          </ul>
        </Col>

        <Col sm={4} className="align-items-center">
          <h5>
            Menus <hr className="w-25" />
          </h5>
         
            <ul className="list-unstyled text-small mt-1">
              <li className="mb-1">
                <NavLink
                  to="/"
                  className="text-white text-decoration-none nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/features"
                  className="text-white text-decoration-none nav-link"
                >
                  Features
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/pricing"
                  className="text-white text-decoration-none nav-link"
                >
                  Pricing
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/about"
                  className="text-white text-decoration-none nav-link"
                >
                  About us
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/contact"
                  className="text-white text-decoration-none nav-link"
                >
                  Contact us
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/account"
                  className="text-white text-decoration-none nav-link"
                >
                  Get Started
                </NavLink>
              </li>
            </ul>
        
        </Col>

        <Col sm={4} className="align-items-center">
          <h5>
            Contact us
            <hr className="w-25" />
          </h5>
          <ul className="list-unstyled text-small mt-1 fw-normal">
            <li className="mb-1 text-white text-decoration-none d-flex">
              <HiOutlineMail size={25} className="me-2" />
              <span>
             <p> support@surfieethiopia.com</p>
             <p> contact@surfieethiopia.com</p>
             </span>
            </li>
         
            <li className="mb-1 text-white text-decoration-none d-flex">
              <HiOutlinePhone size={25} className="me-2" />
              <span>
             <p> +251-992 758 586</p>
             <p> +251-911 287 546</p>
             </span>
             </li>
            <li className="mb-1 text-white text-decoration-none d-flex">
              <HiOutlineLocationMarker size={30} className="me-2" />
              <span>
             <p> Husen Building, 2nd Floor,
Bole 24, Addis ababa Ethiopia</p>
            
             </span>
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
