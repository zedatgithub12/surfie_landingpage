import Afromina from "../assets/afromina.png";
import Puresight from "../assets/puresight.png";
import Surfiecolor from "../assets/surfiecolor.png";
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";


const HeroImage = () => {
  return (
    <Container fluid>
      <Row className="position-relative" id="frontimage" >


        <Col sm={6} className="bg-dark bg-opacity-50 pb-5 ps-3">
          <div className=" mt-3 pt-1 ms-4" >

          </div>
          <h6 className="mt-5 pt-5 ms-2  text-white" >
            AI-Based Online Child Safety Service
          </h6>
         
          <h1 className="  ms-2 fw-bold text-white w-85"> Parental Control Application</h1>
      
          <NavLink to="/account" className="mt-4 get btn button btn-outline-light mb-5 ms-3 px-3">
            Get started
          </NavLink>

        </Col>

        <Col sm={6} className="bg-dark bg-opacity-50">

        </Col>

      </Row>

      <Marquee gradientWidth={50} className=" colored1 " >
      
        <Row className=" align-items-center justify-content-between ">
       
        <Col>
          <img className="image_wrap" src={Afromina} alt="Afromina" />
          </Col>
          <Col>
          <img className="image_wrap" src={Puresight} alt="Puresight"  />
          </Col>
          <Col>
          <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor"  />
        </Col>
        <Col>
          <img className="image_wrap" src={Afromina} alt="Afromina" />
          </Col>
          <Col>
          <img className="image_wrap" src={Puresight} alt="Puresight"  />
          </Col>
          <Col>
          <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor"  />
        </Col>
        <Col>
          <img className="image_wrap" src={Afromina} alt="Afromina" />
          </Col>
          <Col>
          <img className="image_wrap" src={Puresight} alt="Puresight"  />
          </Col>
          <Col>
          <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor"/>
        </Col>
        <Col>
          <img className="image_wrap" src={Afromina} alt="Afromina" />
          </Col>
          <Col>
          <img className="image_wrap" src={Puresight} alt="Puresight"  />
          </Col>
          <Col>
          <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor"/>
        </Col>
        <Col>
          <img className="image_wrap" src={Afromina} alt="Afromina" />
          </Col>
          <Col>
          <img className="image_wrap" src={Puresight} alt="Puresight"  />
          </Col>
          <Col>
          <img className="image_wrap" src={Surfiecolor} alt="Surfiecolor"/>
        </Col>
        </Row>
       
      </Marquee>
  
    </Container>
  );
};
export default HeroImage;
