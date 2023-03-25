import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

function Faqfull() {
  const navigate = useNavigate();
  return (
    <div>
      <Row className="mt-3 d-flex pb-4 ">
        <Col sm={2}>
          <div className=" mt-3 mb-2  d-flex justify-content-center align-items-center rounded-circle faq shadow-sm colored2 m-auto ">
            <AiOutlineQuestionCircle size={50} className="primary-bg m-auto " />
          </div>
        </Col>
        <Col sm={8} className=" ps-4">
          <h2 className="pe-3 mt-3 "> Frequently Asked Questions -FAQ</h2>
          <h6 className=" text-muted">How can we help you?</h6>
        </Col>
      </Row>

      <Container>
        <Row className="pb-5 d-flex justify-content-center align-items-center ">
          <Col sm={10}>
            <Accordion flush>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <h6 className=" py-2">
                    Can i disconnect my children's devices from the Internet in
                    case they spent too much time online ?
                  </h6>
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
                  <h6 className=" py-2">
                    I installed the child-app on my children's iphones but i do
                    not see any information on what application they used?
                  </h6>
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
                  <h6 className="py-2">
                    During the Surfie-Kid app installation, I got a VPN
                    connection error "Your certeficate is permature" what shouid
                    i do?
                  </h6>
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
                  <h6 className=" py-2">
                    I forgot my Parental app password. what can i do?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  Tab the "Forgot Password" option on the sign in screen of the
                  parent app. An email will be sent to you to reset your
                  password.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <h6 className="py-2">
                    I have Surfie installed on my son's device and i want to
                    give this device to my daughter now. How can i change the
                    profile?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  Login to our parent web-portal at:
                  http://surfie.puresight.com. We recommend to use a PC for
                  that. Select Settings, Advanced Setting and finally Device
                  settings. Look for your son’s device and select your
                  daughter’s profile from the drop-down list. Click Save
                  Changes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <h6 className=" py-2">
                    How can i block or allow specific website?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  <ul>
                    <li>
                      1. Login to our parent web-portal at:
                      http://surfie.puresight.com
                    </li>
                    <li>2. Click on Settings </li>
                    <li>3. Select the relevant child profile</li>
                    <li>4. Click on Websites</li>
                    <li>5. Scroll down to Block or Allow Websites</li>
                    <li>
                      6. Under Step 3, enter the relevant site (example:
                      cnn.com; disney.com)
                    </li>
                    <li>7. Select Block or Allow</li>
                    <li>8. Click Add</li>
                    <li>9. Click Save Changes</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  <h6 className=" py-2">
                    How can i change my child's profile picture?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  <ul>
                    <li>
                      1. On the parent app, tab Settings on the Family Overview
                      screen
                    </li>
                    <li>2. Select Child’s profile settings</li>
                    <li>3. Select the relevant child profile</li>
                    <li>4. Tab Change Profile Picture</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  <h6 className="py-2">
                    I installed the parental application on my android phone, i
                    then created a profile for my daughter and sent the download
                    link of the child-app to her phone. Later day i checked her
                    online activities but i only saw three empty screen: Social,
                    Web, and Time. Why and where is the Location and App screen?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  You did not complete the installation of the child-app on your
                  daughter’s phone. Take her phone and click on the installation
                  link you sent. Complete the installation and you will see also
                  the location and app screen. After your daughter uses her
                  phone, you will see some of her online activities.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  <h6 className="py-2">
                    I can't see any Facebook activities of my son. why?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  You have to activate our Facebook protection. Open the
                  Facebook App on your son’s Android device or iPhone and follow
                  the install wizard. Once you have activated our Facebook
                  protection on one platform (Android, iOS or Windows) it will
                  work for all of them.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="10">
                <Accordion.Header>
                  <h6 className=" py-2">
                    I subscribed from your service, How do i delete my account?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  <ul>
                    <li> To delete your account please contact us </li>
                    <li>support@surfieethiopia.com </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="11">
                <Accordion.Header>
                  <h6 className="py-2">How do i cancel my subscription?</h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  <ul>
                    <li>Purchase was made via surifieethiopia.com website: </li>
                    <li>
                      Contact us at: support@surfieethiopia.com with your order
                      number{" "}
                    </li>
                    <li> Purchase was made via Apple App store:</li>
                    <li> 1. On your iPhone open the Settings app.</li>
                    <li> 2. Type in your name.</li>
                    <li>
                      {" "}
                      3. Tap Subscriptions. (If you don’t see “Subscriptions,”
                      tap “iTunes & App Store” instead. Then type in your Apple
                      ID, tap View Apple ID, sign in, scroll down to
                      Subscriptions, and tap Subscriptions.)
                    </li>
                    <li> 4. Tap Surfie Parent</li>
                    <li> 5. Tap Cancel Subscription</li>
                    <li> Purchase was made via Google Play store:</li>
                    <li>
                      1. On your Android phone or tablet, open the Google Play
                      Store Google Play.{" "}
                    </li>
                    <li>2. Tap Menu and then Subscriptions </li>
                    <li>3. Select Surfie Parent </li>
                    <li>4. Tap Cancel subscription</li>
                    <li>5. Follow the instructions</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="12">
                <Accordion.Header>
                  <h6 className="py-2">
                    My daughter's profile is gray and it says "You turned her
                    device off". How do i turn it on again?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  It’s very easy. Open the parent-app (Surfie-Parent) and tab
                  the “Connect button” on the top of daughter’s profile. Within
                  a few seconds the device will be reconnected to the Internet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="13">
                <Accordion.Header>
                  <h6 className="py-2">
                    I used the option to disconnect the computer of son from the
                    internet. Now i want to reconnect him, but it does't seem to
                    work. what can i do?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  The reconnect may take some time. To speed things up we
                  recommend to open the Surfie sys tray icon on your son’s
                  computer taskbar and to click the option “synchronize now”.
                  Afterwards, your son should be reconnected to the Internet.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="14">
                <Accordion.Header>
                  <h6 className=" py-2">
                    I do not see my daughter's location anymore and i don't get
                    notification when she leaves school. what can i do?
                  </h6>
                </Accordion.Header>
                <Accordion.Body className="text-muted my-3">
                  <ul>
                    <li>
                      In such a case you need to check a few things on your
                      child’s mobile device.{" "}
                    </li>
                    <li>
                      For Android devices: First check if GPS is turned on and
                      if high accuracy mode is selected. Go to Settings, look
                      for location and update the GPS and accuracy mode
                      settings. Secondly, you need to check if Surfie-Kids still
                      has the required location permissions. Go to Settings,
                      Manage Apps, look for Surfie-Kids, go to permissions and
                      make sure that the location permission is turned on and
                      set to “always allow” (Note, the terms used by each phone
                      manufacturer might be slightly different.) If you need
                      help, let us know.{" "}
                    </li>
                    <li>
                      For iOS devices: Check if the location permission for
                      Surfie Kids is turned on. Go to settings, scroll down to
                      Surfie-Kids and make sure the location permission is
                      turned on and set to “always allow”.{" "}
                    </li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>

      <Row className=" pt-3 d-flex pb-5 ">
        <Col sm={2}>
          <div className=" mb-3 primary-fill d-flex justify-content-center align-items-center rounded-circle faq shadow-sm colored2 m-auto ">
            <MdOutlineAlternateEmail size={50} className="primary-bg m-auto" />
          </div>
        </Col>

        <Col sm={5} className="ps-4 pe-4">
          <h2 className=" mb-4 "> CONTACT US </h2>

          <h6 className="col text-muted ">
            {" "}
            Make sure all fields are filled before submitting!
          </h6>

          <form>
            <Row>
              <Col>
                <Form.Group className="bg-light mb-3" controlId="Name">
                  <Form.Control rows={1} placeholder="Name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="bg-light mb-3" controlId="Email">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="bg-light mb-3" controlId="Textarea">
              <Form.Control
                as="textarea"
                rows={8}
                placeholder="Write you message here..."
              />
            </Form.Group>
          </form>

          <Row className="mb-3 ">
            <button
              type="submit"
              className=" mx-2 py-1 m-auto btncolor  col-2 "
              onClick={() => navigate("/")}
            >
              Send
            </button>
          </Row>
        </Col>

        <Col sm={4} className="   text-white p-5 ">
          <Card className="rounded-4 ">
            <Card.Body className="primary-fill rounded-4 py-4">
              <Card.Title className="pt-5 ps-3 pb-2">
                <h3>Get in Touch</h3>
              </Card.Title>

              <Card.Text className="ps-3 pt-0">
                Don’t hesitate to drop a message at any time.
              </Card.Text>

              <Card.Text className=" pt-3">
                <Row className="ps-3">
                  <Col sm={2} className="hid">
                    <div className=" mt-2 d-flex justify-content-center align-items-center rounded-circle contact shadow-sm  textcolor-ct  m-auto ">
                      <GoLocation size={30} className="m-auto" />
                    </div>
                  </Col>
                  <Col sm={10} className="mt-2">
                    <h4> Visit Us </h4>
                    <h6 className=" textcolor-c pe-3">
                      {" "}
                      Husen Building, 2nd Floor,Bole 24, Addis ababa Ethiopia
                    </h6>
                  </Col>
                </Row>
              </Card.Text>

              <Card.Text className=" pt-3">
                <Row className="ps-3">
                  <Col sm={2} className="hid">
                    <div className="hid mt-2 d-flex justify-content-center align-items-center rounded-circle contact shadow-sm  textcolor-ct  m-auto ">
                      <FiMail size={30} className="m-auto" />
                    </div>
                  </Col>
                  <Col sm={10} className="mt-2 ">
                    <h4> Mail Us </h4>
                    <h6 className=" textcolor-c pe-3">
                      {" "}
                      support@surfieethiopia.com <br></br>
                      or <br></br>
                      contact@surfieethiopia.com{" "}
                    </h6>
                  </Col>
                </Row>
              </Card.Text>

              <Card.Text className=" pt-3">
                <Row className="ps-3 ">
                  <Col sm={2} className="hid">
                    <div className=" hid mt-2 d-flex justify-content-center align-items-center rounded-circle contact shadow-sm  textcolor-ct m-auto ">
                      <FiPhoneCall size={30} className="m-auto" />
                    </div>
                  </Col>
                  <Col sm={10} className="mt-2 ">
                    <h4> Call Us </h4>
                    <h6 className=" textcolor-c pe-3">
                      {" "}
                      +251-992 758 586 <br></br>
                      or <br></br>
                      +251-911 287 546{" "}
                    </h6>
                  </Col>
                </Row>
              </Card.Text>

              {/* <Row className="pt-5 ps-5 ms-5 pe-5">
                <MdFacebook type="button" size={30} className="col  ps-5 pe-2 " onClick={() => navigate("https://www.youtube.com/results?search_query=switch+button+react+js")} />
                <FaInstagram type="button" size={30} className="col  ps-5 pe-2" onClick={() => navigate("/")} />
                <FaTelegram type="button" size={30} className="col  ps-5 pe-2" onClick={() => navigate("/")} />
              </Row> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
export default Faqfull;
