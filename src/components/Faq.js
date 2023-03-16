import React from "react";

import Accordion from "react-bootstrap/Accordion";
import { Container, Row, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <Container className="mb-5 pt-3">
        <Row className="d-flex p-4 mt-3 justify-content-center align-items-center">
          <h3 className="text-center p-4">Frequently Asked Questions - FAQ</h3>
        </Row>
        <Row className="pb-5 d-flex justify-content-center align-items-center ">
          <Col sm={10}>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                <h6 className="fw-bold py-2">
                  Can i disconnect my children's devices from the Internet in
                  case they spent too much time online?</h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  Yes, you can. Just open the parent app (Surfie-Parent) and tab
                  the disconnect button on the bottom of the Family Overview
                  screen. If you want to disconnect just some of your children,
                  then select the disconnect button on the relevant profiles.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                <h6 className="fw-bold py-2">
                  I installed the child-app on my children's iphones but i do
                  not see any information on what application they used?</h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  At this stage, our protection for iPhones include: WhatsApp
                  and Facebook cyber-bullying alerts, location tracking and
                  location alerts and website filtering. In the new future we
                  will also introduce app-usage tracking for iOS devices (as we
                  already have for Android phones and tablets).
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                <h6 className="fw-bold py-2">
                  During the SurfieEthiopia-Kid app installation, I got a VPN
                  connection error "Your certeficate is permature" what shouid i
                  do?</h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  <ul>
                    <li> Go to Settings</li>
                    <li> General</li>
                    <li> Date & Time and turn on “Set automatically”</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>
                <h6 className="fw-bold py-2">
                  I forgot my Parental app password. what can i do?</h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  Tab the "Forgot Password" option on the sign in screen of the
                  parent app. An email will be sent to you to reset your
                  password.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Faq;
