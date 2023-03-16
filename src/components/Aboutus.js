import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MdTimer } from "react-icons/md";
import Teamcarousel from "./Teamcarousel";
import Coca from "../assets/coca.png";
import Rainbow from "../assets/rainbow.png";
import Uniceif from "../assets/uniseif.png";


function Aboutus() {
  return (
    <div className="">
   
        <Row className="mt-3 d-flex pb-5 ">
          <Col sm={2}>
            <div className="mt-3 d-flex justify-content-center align-items-center rounded-circle features shadow-sm  colored2 m-auto ">
              <MdTimer size={80}  className="primary-bg m-auto" />
            </div>
          </Col>
          <Col sm={7} className=" ps-4">
            <h6 className=" mt-3 text-muted">We do care about the future!</h6>
            <h1 className=""> How we work </h1>
            <h6 className=" pb-4 mb-5 text-muted">
              Lorem ipsum dolor sit amet. Ut fugiat alias ad accusamus error eos
              itaque eius qui reiciendis animi eos sunt magni qui architecto
              placeat aut architecto iure. Ea consequatur dignissimos in
              voluptatem molestiae qui illum impedit.
            </h6>
          </Col>
        </Row>
        <Container>
          <Row className="mt-3 d-flex  pb-5">
            <Col sm={5} className="pe-3">
              <h2 className=""> Vision </h2>
              <h6 className=" pb-4 mb-5 text-muted">
              To be one of the leading forefronts in ensuring online safety for families and children in Ethiopia.
              </h6>
            </Col>

            <Col sm={5}className="pe-3">
              <h2 className="">Mission </h2>
              <h6 className=" pb-4 mb-5 text-muted">
              To support and assure millions of families in Ethiopia to protect their children from any online unsafe activities, which they are exposed to because of smart devices, with our parental control mobile application, Surfie Ethiopia, and contribute towards creating good citizenship for our country and the world.
              </h6>
            </Col>
          </Row>
      

        <h2 className="">AfroMiNA Digitals Teams </h2>
        <h6 className=" pb-4 mb-5 text-muted">
          The AfroMiNA Digitals is made up of 15+ year experienced professionals
        </h6>

        <Teamcarousel />

        <Row className="mt-5 pt-5  d-flex ">
          <h2 className="">Our Partners </h2>
          <h6 className="  mb-5 text-muted">
            The ones trust our services and love our existance
          </h6>
        </Row>     
     

      <Row >
       
        <Col className=" mb-5 pb-5 d-flex">
          <img
            className="me-4 justfy-content-center "
            src={Coca}
            alt="Coca"
            width="90px"
            height="89px"
          />
     
          <img
            className="me-4 justfy-content-center "
            src={Rainbow}
            alt="Rainbow"
            width="110px"
            height="89px"
          />
     
          <img
            className="justfy-content-center  "
            src={Uniceif}
            alt="Uniceif"
            width="76px"
            height="89px"
          />
          </Col>
        </Row>
        </Container>
    </div>
  );
}
export default Aboutus;
