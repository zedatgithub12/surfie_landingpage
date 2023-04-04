import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineProfile } from "react-icons/ai";
import Marquee from "react-fast-marquee";
import Afromina from "../assets/afromina.png";
import Puresight from "../assets/puresight.png";
import Surfiecolor from "../assets/surfiecolor.png";
import Placetobe from "../assets/p2b.png";
import Minawifi from "../assets/minawifi.png";
 import { useTranslation } from "react-i18next";

function Aboutus() {
  const {t} = useTranslation();
 
  return (
  <>
       <Container>
      <Row className="py-3">
        <Col sm={1}></Col>
        <Col sm={2}>
          <div className=" mt-4 d-flex justify-content-center align-items-center rounded-circle features shadow-sm  colored2 m-auto ">
          <AiOutlineProfile size={80} className="primary-bg m-auto" />
          </div>
        </Col>
        <Col sm={6} className=" ps-4">
         
          <p className="p-2 mt-4 fs-2"> {t('Who we are')}  </p>
          <p className="p-3 pt-0 mb-2 text-muted just fs-5 lead">
          {t('AfroMiNA Digital Technologies PLC is an African digital solutions company based in Ethiopia established back in 2018 with the motto “Striving to Narrow Down the Digital Divide in Africa” working mainly focused on easing the accessibility of impactful digital solutions to society.')}
          </p> 
            
          <p className="p-3 pt-0 mb-2 text-muted just fs-5 lead">
          {t('In-partnership with one of the world leading online parental control service providers called PureSight based in Israel, which is currently protecting millions of kids and families all over the world, we brought a digital solution called Surfie Ethiopia for Ethiopian society to contribute our part in ensuring the online safety of families and children in Ethiopia.')}
         </p>
        </Col>
      </Row>
      </Container>

      <Container fluid className="gradient">
        <Row className="d-flex  justify-content-center">
          <Col sm={4} className=" p-3 mb-3 m-3 h-100 px-4">
            <p className="pt-2 fs-3 text-white">{t('Vision')} </p>
            <h6 className="mb-5 text-dark  just lead">
              {t('To be one of the leading forefronts in ensuring online safety for families and children in Ethiopia.')}
            </h6>
          </Col>

          <Col sm={4} className=" border-start border-secondary p-3 px-4 mb-3 m-3 h-100">
            <p className="pt-2 fs-3 text-white">{t('Mission')} </p>
            <h6 className=" mb-5 text-dark  just lead">
              {t('To support and assure millions of families in Ethiopia to protect their children from any online unsafe activities, which they are exposed to because of smart devices, with our parental control mobile application, Surfie Ethiopia, and contribute towards creating good citizenship for our country and the world.')}
            </h6>
          </Col>
        </Row>
      
      </Container>

      
      <Row className="p-5"></Row>
      <Container>

  
      <Marquee gradientWidth={50} className=" colored1 ">
        
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
      <Row className="p-5"></Row>
      </Container>
    </>
  );
}
export default Aboutus;
