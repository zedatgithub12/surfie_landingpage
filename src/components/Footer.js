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
import Connection from "../constants/Connections";
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
     emailval: false,
     emailprompt: "",
     loading: false,
  });

const updateEmail =(event)=>{
 
    setData({
      ...data,
      email: event.target.value,
      status: "initial",
    })
  }


  const handleSubmit = () => {
  
    const re = /\S+@\S+\.\S+/;

    if(!(re.test(data.email))){
      setData({
        ...data,
        status: "failure",
        emailval: true,
        emailprompt: "Please provide valid email",
      });
    }
    else{
      setData({
        ...data,
        emailval: false,
        loading: true,
      });

    var Api = Connection.api+Connection.trial;
    var headers ={

      accept: "application/json",
      "Content-Type": "application/json"
    };
    var datas ={
      email: data.email,
    };

    fetch(Api,{
      method: "POST",
      headers:headers,
      body: JSON.stringify(datas)
    }).then((response) => response.json())
    .then((response)=>{

      if(response === "succeed"){
        setData({
          ...data,
          status: "sent",
          loading: false,
        });
      }
      else if(response === "exists"){
        setData({
          ...data,
          status: "exist",
          loading: false,
        });
      }
 }).catch((e)=>{
  setData({
    ...data,
    status: "failure",
    loading: false,
  });
 });
    }
  };

  return (
    <Container fluid>
      <Row className="fot text-white  pt-3">
      <p className="fs-4 text-center text-dark mt-2" >
                  {t('Do you feel like trying?')}
                </p>
        <Col sm={4} className="pb-4">
        
                <form >
                  <FormControl>
                    <Input
                  
                      className="px-3 py-2 rounded-pill ps-4 "
                      placeholder={t('Enter your email address')}
                      type="email"
                      required
                      value={data.email}
                      onChange={updateEmail}
                      error={data.status === "failure"}
                      endDecorator={

                        <Button
                         className="rounded-pill px-4 gradient text-dark"
                         type="button"
                          onClick={() => handleSubmit()}
                        >
                          {data.loading ? (
                      <div
                        class="spinner-border spinner-border-sm text-white"
                        role="status"
                      >
                        <span class="visually-hidden">{t('Loading...')}</span>
                      </div>
                    ) : (
                      <span className="fw-light">{t('Free Trial')}</span>
                    )}
                          
                        </Button>
                      }
                    />
                      {data.status === "exist" && (
                      <FormHelperText
                      
                        className="fs-6 fw-normal text-dark"
                      >
                        <AiFillWarning size={28} className="text-danger mx-2" />
                        We have already sent you an emailcheck your inbox or spam folder!
                      </FormHelperText>
                    )}
                    {data.status === "failure" && (
                      <FormHelperText
                        sx={(theme) => ({
                          color: theme.vars.palette.danger[400],
                        })}
                        className="fs-6 fw-normal"
                      >
                        <AiFillWarning size={28} className="text-dark mx-2" />
                        Oops! something went wrong, please try again later.
                      </FormHelperText>
                    )}

                    {data.status === "sent" && (
                      <FormHelperText
                        className="text-success fw-semibold"
                      >
                        <AiFillCheckCircle size={20} className="text-succees mx-2" />
                        The link to download the app is sent to email provided!
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
