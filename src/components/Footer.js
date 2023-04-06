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
    <Container fluid >
      <Row className="fot text-white  pt-3">
      <p className="fs-4 text-center text-dark mt-2" >
                  {t('Do you feel like trying?')}
                </p>
        <Col sm={4} className="pb-4">
        
                <form >
                  <FormControl>
                    <Input
                  style={{ backgroundColor: 'var(--input-bg)', color: 'var(--text-color)' }} 
                      className="px-3 py-2 rounded-pill ps-4 border-0"
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
                        {t('We have already sent you an emailcheck your inbox or spam folder!')}
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
                       {t('Oops! something went wrong')}
                      </FormHelperText>
                    )}

                    {data.status === "sent" && (
                      <FormHelperText
                        className="text-success fw-semibold"
                      >
                        <AiFillCheckCircle size={20} className="text-succees mx-2" />
                        {t('The link to download the app is sent to email provided!')}
                      </FormHelperText>
                    )}
                  </FormControl>
                </form>
          
            
        </Col>
      </Row>

      <Row className="primary-fill pt-4 ps-3  pb-4" >
        <Col sm={4} className="align-items-center" style={{color: 'var(--sec-bg)' }}>
        <img className="mt-4" src={Surfie} alt="Surfief" width={110} />
            <p className="pt-3 mb-1">{t('AI-Based Online Child Safety Service')} </p>

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

        <Col sm={4} className="align-items-center" style={{color: 'var(--sec-bg)' }}>
          <h5>
            {t('Menus')} <hr className="w-25" />
          </h5>
         
            <ul className="list-unstyled text-small mt-1" style={{color: 'var(--sec-bg)' }}>
              <li className="mb-1">
                <NavLink
                  to="/"
                  className=" text-decoration-none nav-link"
                >
                  {t('Home')}
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/features"
                  className=" text-decoration-none nav-link"
                >
                  {t('Features')}
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/pricing"
                  className=" text-decoration-none nav-link"
                >
                  {t('Pricing')}
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/about"
                  className=" text-decoration-none nav-link"
                >
                  {t('About Us')}
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/contact"
                  className=" text-decoration-none nav-link"
                >
                  {t('Contact us')}
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink
                  to="/account"
                  className=" text-decoration-none nav-link"
                >
                  {t('Get started')}
                </NavLink>
              </li>
            </ul>
        
        </Col>

        <Col sm={4} className="align-items-center">
          <h5 style={{color: 'var(--sec-bg)' }}>
            {t('Contact us')}
            <hr className="w-25" />
          </h5>
          <ul className="list-unstyled text-small mt-1 fw-normal" style={{color: 'var(--sec-bg)' }}>
            <li className="mb-1  text-decoration-none d-flex">
              <HiOutlineMail size={25} className="me-2" />
              <span>
             <p> support@surfieethiopia.com</p>
             <p> contact@surfieethiopia.com</p>
             </span>
            </li>
         
            <li className="mb-1 text-decoration-none d-flex">
              <HiOutlinePhone size={25} className="me-2" />
              <span>
             <p> +251-992 758 586</p>
             <p> +251-911 287 546</p>
             </span>
             </li>
            <li className="mb-1 text-decoration-none d-flex">
              <HiOutlineLocationMarker size={30} className="me-2" />
              <span>
             <p> {t('Husen Building, 2nd Floor, Bole 24, Addis ababa Ethiopia')} </p>
            
             </span>
             </li>
          </ul>
        </Col>
      </Row>
      <Row className="pt-3 copyright">
        <Col className="d-flex align-items-center justify-content-center">
          <p className=" text-small" style={{color: 'var(--sec-bg)' }}>
            ©2023 {t('AfroMiNA Digital Technologies PLC. All Right Reserved.')}
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
