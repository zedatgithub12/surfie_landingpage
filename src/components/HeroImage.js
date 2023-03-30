import Afromina from "../assets/afromina.png";
import Puresight from "../assets/puresight.png";
import Surfiecolor from "../assets/surfiecolor.png";
import Placetobe from "../assets/p2b.png";
import Minawifi from "../assets/minawifi.png";

import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";


const HeroImage = () => {

  return (
    <Container fluid>
      <Row className="position-relative " id="frontimage" >


        <Col sm={6} className="bg-dark bg-opacity-50 pb-5 ps-3 pt-3" id="homepage">
          <div className=" mt-3 pt-1 pt-4 ms-4" >

          </div>
          <h6 className="mt-5 pt-5 ms-2  text-white" >
            AI-Based Online Child Safety Service
          </h6>
         
          <h1 className="  ms-2 fw-bold text-white w-85 my-2"> Parental Control Application</h1>
      

         <p className=" w-75 ms-2  text-white w-85 my-2">parental control services have become an essential tool for parents who want to protect their children in digital world.</p>
          <NavLink to="/account" className="mt-4 get btn button btn-outline-light mb-5 ms-2 px-3" id="getstartedbtn">
            Get started
          </NavLink>

        </Col>

        <Col sm={6} className="bg-dark bg-opacity-50 pt-5" id="emptycloumn">

        </Col>

      </Row>

      <Marquee gradientWidth={50} speed={10} className=" colored1 " >
      
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
          <img className="image_wrap mina" src={Minawifi} alt="Minawifi" />
          </Col>
          <Col>
          <img className="image_wrap p2" src={Placetobe} alt="Placetobe"  />
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
          <img className="image_wrap mina" src={Minawifi} alt="Minawifi" />
          </Col>
          <Col>
          <img className="image_wrap p2" src={Placetobe} alt="Placetobe"  />
          </Col>
        </Row>
       
      </Marquee>
  
    </Container>
  );
};
export default HeroImage;
