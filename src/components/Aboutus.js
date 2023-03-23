import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineProfile } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Afromina from "../assets/afromina.png";
import Puresight from "../assets/puresight.png";
import Surfiecolor from "../assets/surfiecolor.png";
import {useNavigate } from "react-router-dom";

function Aboutus() {
  const navigate = useNavigate();
  return (
    
    <div className="">
      <Row className="mt-3 d-flex pb-5 ">
        <Col sm={2}>
          <div className="mt-3 d-flex justify-content-center align-items-center rounded-circle features shadow-sm  colored2 m-auto ">
            <AiOutlineProfile size={80} className="primary-bg m-auto" />
          </div>
        </Col>
        <Col sm={7} className=" ps-4">
          <h1 className=""> Who we are </h1>
          <h6 className=" pt-4 mb-5 text-muted just">
            AfroMiNA Digital Technologies PLC is an African digital solutions
            company based in Ethiopia established back in 2018 with the motto
            “Striving to Narrow Down the Digital Divide in Africa” working
            mainly focused on easing the accessibility of impactful digital
            solutions to society.
            <p className="  mt-3 text-muted just">
              Partnering with one of the world's leading online parental control
              service providers called PureSight based in Israel, which is
              currently protecting millions of kids and families all over the
              world, we brought a digital solution called Surfie Ethiopia for
              Ethiopian society to contribute our part in ensuring the online
              safety of families and children in Ethiopia.  </p>  
          
            <button
             className="p-2 px-5 over align-items-center justify-content-center button"
            type="button"          
            onClick={() => navigate("/https://www.puresight.com/#home-stats-cont")}
          >
            Overview
          </button>
          
          </h6>
        </Col>
      </Row>
      <Container>
        <Row className="mt-3 d-flex  pb-5">
          <Col sm={5} className="pe-3">
            <h2 className=""> Vision </h2>
            <h6 className=" pb-4 mb-5 text-muted just">
              To be one of the leading forefronts in ensuring online safety for
              families and children in Ethiopia.
            </h6>
          </Col>

          <Col sm={5} className="pe-3">
            <h2 className="">Mission </h2>
            <h6 className=" pb-4 mb-5 text-muted just">
              To support and assure millions of families in Ethiopia to protect
              their children from any online unsafe activities, which they are
              exposed to because of smart devices, with our parental control
              mobile application, Surfie Ethiopia, and contribute towards
              creating good citizenship for our country and the world.
            </h6>
          </Col>
        </Row>
        </Container>
        <Marquee gradientWidth={50} className=" colored1 ">
          <Row className=" align-items-center justify-content-between ">
            <Col>
              <img className="image_wrap" src={Afromina} alt="Afromina" />
            </Col>
            <Col>
              <img className="image_wrap" src={Puresight} alt="Puresight" />
            </Col>
            <Col>
              <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor" />
            </Col>
            <Col>
              <img className="image_wrap" src={Afromina} alt="Afromina" />
            </Col>
            <Col>
              <img className="image_wrap" src={Puresight} alt="Puresight" />
            </Col>
            <Col>
              <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor" />
            </Col>
          </Row>
        </Marquee>
     
    </div>
  );
}
export default Aboutus;
