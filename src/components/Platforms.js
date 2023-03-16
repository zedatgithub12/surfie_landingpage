import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import {
  MdTimer,
  MdDevices,
  MdLocationOn,
  MdWebAssetOff,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { GiBabyFace, GiBinoculars } from "react-icons/gi";
import { RiParentLine } from "react-icons/ri";
import { CiHashtag } from "react-icons/ci";
import { TbDeviceMobileMessage, TbApps, TbDiscOff } from "react-icons/tb";
import { CgBrowse } from "react-icons/cg";
import { FcMindMap } from "react-icons/fc";

import Card from "react-bootstrap/Card";

function Platforms() {
  return (
    <div>
      <Row className=" mt-3 d-flex  pb-5 ">
        <Col sm={2}>
          <div className=" mt-3 d-flex justify-content-center align-items-center rounded-circle features shadow-sm  colored2 m-auto ">
            <MdTimer size={80} className="primary-bg m-auto" />
          </div>
        </Col>
        <Col sm={8} className=" ps-4">
          <h6 className=" mt-3 text-muted">We do care about the future!</h6>
          <h1 className=""> Surfie Features </h1>
          <h6 className=" pb-3 mb-2 text-muted">
            Lorem ipsum dolor sit amet. Ut fugiat alias ad accusamus error eos
            itaque eius qui reiciendis animi eos sunt magni qui architecto
            placeat aut architecto iure. Ea consequatur dignissimos in
            voluptatem molestiae qui illum impedit.
          </h6>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center align-items-center">
        <h3 className="text-center  pb-3 ">Surfie Platforms </h3>
      </Row>


      <Container>
        <Row className="d-flex justify-content-center ">
          <Col            
             className="primary-fill m-4 text-center border shadow-sm  mb-4 p-3 rounded"
             >
       
            <div className="border-0 primary-fill">
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border-0 bg-white m-auto ">
                  <RiParentLine size={60} className="primary-bg m-auto" />
                </div>

                <Card.Title>Surfie Parent</Card.Title>
                <Card.Text className="textcolor-w">
                  A friendly, easy to use app that offers 24/7 access to your
                  child's digital world and keeps them safe and secure.
                </Card.Text>
              </Card.Body>
            </div>
          </Col>

          <Col
           
            className="primary-fill m-4 text-center border shadow-sm  mb-4 p-3 rounded"
          >
            <div className="border-0 primary-fill">
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border bg-white m-auto ">
                  <GiBabyFace size={60} className=" primary-bg m-auto" />
                </div>

                <Card.Title>Surfie Child</Card.Title>
                <Card.Text className="textcolor-w">
                  Install the app across all of your child’s devices to protect
                  them from online risks
                </Card.Text>
              </Card.Body>
            </div>
          </Col>

          <Col
            
            className="primary-fill m-4 text-center border shadow-sm  mb-4 p-3 rounded"
          >
            <div className="border-0 primary-fill">
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border bg-white m-auto">
                  <BsLaptop size={60} className="primary-bg m-auto" />
                </div>

                <Card.Title>Surfie PC Client</Card.Title>
                <Card.Text className="textcolor-w">
                  Surfie PC client is installed on Windows-based computers
                </Card.Text>
              </Card.Body>
            </div>
          </Col>
        </Row>

        <Container className="">
          <Row className=" d-flex py-5 my-5 justify-content-center align-items-center ">
            <Col sm={5}>
              <MdTimer
                size={90}
                className="primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Set Screen Time Limit </h4>
              <h6 className="  text-muted">
                Set the limits and Surfie will make sure they’re stuck to,
                meaning no more arguments! Block, restrict uses of apps, and
                limit the amount of time for use per app, or for screen time in
                tota
              </h6>
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <h4 className=""> Cross Devices Protection </h4>
              <h6 className="  text-muted">
                Do you know how your kids use their devices at night? Now you
                can, and will! Monitor your kids’ devices 24/7, all from one
                easy-to-use dashboard.
              </h6>
            </Col>
            <Col sm={5}>
              <MdDevices
                size={90}
                className=" primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <MdLocationOn
                size={90}
                className=" primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Find Your Kids’ Geolocation</h4>
              <h6 className="  text-muted">
                Hyper-accurate geolocation tracking – know exactly where your
                kids are, and get reliable, accurate location alerts when they
                reach certain places.
              </h6>
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <h4 className=""> Web filtering </h4>
              <h6 className="  text-muted">
                Monitor and filter your kids’ internet consumption, based on
                their age. Block access, restrict access and filter out what you
                think is appropriate – or let Surfie decide for you
              </h6>
            </Col>
            <Col sm={5}>
              <MdWebAssetOff
                size={90}
                className="primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <CiHashtag
                size={90}
                className=" primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Social Media Monitoring</h4>
              <h6 className="  text-muted">
                Track conversations across popular platforms like WhatsApp,
                Instagram, Viber and Facebook for troubling keywords to do with
                inappropriate situations, behaviors and conversations.
              </h6>
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <h4 className=""> Parent Alert Notification </h4>
              <h6 className="  text-muted">
                Receive notifications once certain flags are raised – if
                something happens, a keyword is triggered or otherwise.
              </h6>
            </Col>
            <Col sm={5}>
              <TbDeviceMobileMessage
                size={90}
                className=" primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <TbApps
                size={90}
                className="primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>

            <Col sm={5}>
              <h4 className="">Manage Apps and Games</h4>
              <h6 className="  text-muted">
                Choose which apps your kids can use and block access to the ones
                you don’t want them to see. You can also balance the time they
                spend per app, and set a daily time limit for use.
              </h6>
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <h4 className=""> Browsing Habits</h4>
              <h6 className="  text-muted">
                Alongside the top blocked websites, Surfie will give you a list
                of your kids’ top 10 most-visited websites. You’ll be able to
                see if your kids’ preferences change, for example, due to
                something they’ve recently experienced, or should any new
                behaviors develop.This feature can also be used to understand
                your kids’ areas of interest.
              </h6>
            </Col>
            <Col sm={5}>
              <CgBrowse
                size={90}
                className="primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>
          </Row>

          <Row className="d-flex py-5 my-5 justify-content-center align-items-center">
            <Col sm={5}>
              <TbDiscOff
                size={90}
                className="primary-bg d-flex justify-content-center align-items-center m-auto"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Disconnect Internet </h4>
              <h6 className="  text-muted">
                Disconnect your kids from the internet, all from the click of a
                button! Choose your moment, and…all eyes will magically lift
                upwards from their screens!
              </h6>
            </Col>
          </Row>
        </Container>
      </Container>

      <Row className=" mt-5  d-flex pb-5 d-flex justify-content-center align-items-center">
        <h3 className="mt-3  text-center pb-3 fw-bold ">Surfie Advantages </h3>
      </Row>


      <Container className="mb-5">
        <Row>
          <Col  >
          <Card className="text-center border-0 shadow-sm m-2 mb-3 p-3">
            <Card.Body>
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm  colored2 m-auto ">
                <GiBinoculars size={40} className="primary-bg m-auto" />
              </div>

              <Card.Title>Total Overlook</Card.Title>
              <Card.Text>
                Easy understanding of your child’s digital lifestyle, making it
                easier to start an open conversation about online behaviors.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col >
          <Card className="text-center border-0  shadow-sm m-2 mb-3 p-3">
            <Card.Body>
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm colored2 m-auto ">
                <RiParentLine size={40} className="primary-bg m-auto" />
              </div>

              <Card.Title>Parenting Style</Card.Title>
              <Card.Text>
                Define age-appropriate boundaries, monitor digital use, or just
                simply get alerts.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col >
          <Card className="text-center border-0  shadow-sm m-2 mb-3 p-3">
            <Card.Body>
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm colored2 m-auto ">
                <FcMindMap size={40} className="primary-bg m-auto" />
              </div>

              <Card.Title>Peace of Mind</Card.Title>
              <Card.Text>
                Know you child’s current activity at a glance, get immediate
                alerts and prevent screen addiction.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>

          <Col >
          <Card className="text-center border-0  shadow-sm m-2 mb-3 p-3">
            <Card.Body>
              <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm colored2 m-auto ">
                <MdOutlineSupportAgent
                  size={40}
                  className=" primary-bg m-auto"
                />
              </div>

              <Card.Title>24/7 Support</Card.Title>
              <Card.Text>
                Unlike other apps, with Surfie you are not left behind – support
                is here when you need it.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Platforms;
