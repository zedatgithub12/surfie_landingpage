import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbars from "../components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Connection from "../constants/Connections";
import { BiErrorCircle } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();
  const [info, setInfo] = useState({
    username: "",
    email: "",
    message: "",
    prompt: "",
    positive: false,
    negetive: false,
    loading: false,
  });

  const updateName = (event) => {
    setInfo({
      ...info,
      username: event.target.value,
    });
  };

  const updateEmail = (event) => {
    setInfo({
      ...info,
      email: event.target.value,
    });
  };

  const updateMessage = (event) => {
    setInfo({
      ...info,
      message: event.target.value,
    });
  };

  const DropMessage = () => {
    const re = /\S+@\S+\.\S+/;

    if (info.username === "" || info.email === "" || info.message === "") {
      setInfo({
        ...info,
        prompt: "Please fill all fields first!",
        negetive: true,
        positive: false,
      });
    }
    else if(!(re.test(info.email))){
      setInfo({
        ...info,
        prompt: "Email you provided is not valid!",
        negetive: true,
        positive: false,
      });
    }
     else {
      setInfo({
        ...info,
        loading: true,
      });
      var Api = Connection.api + Connection.newQuery;

      var data = {
        fullname: info.username,
        email: info.email,
        message: info.message,
        status: "0",
      };

      fetch(Api, {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response === "succeed") {
            setInfo({
              ...info,
              prompt: "Successfully sent, we will contact you soon!",
              positive: true,
              negetive: false,
              loading: false,
            });
          } else {
            setInfo({
              ...info,
              prompt: "We couldn't receive your message please retry later!",
              positive: false,
              negetive: true,
              loading: false,
            });
          }
        })
        .catch((e) => {
          setInfo({
            ...info,
            prompt: "There is error sending your message please retry later!",
            negetive: true,
            loading: false,
            positive: false,
          });
        });
    }
  };
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
      <Navbars />
      <>
        <Row className="mt-3 d-flex pb-4 ">
          <Col sm={2}>
            <div className=" mt-3 mb-2  d-flex justify-content-center align-items-center rounded-circle faq shadow  m-auto " style={{ color: 'var(--bg-color)' }}>
              <AiOutlineQuestionCircle
                size={50}
                className="primary-bg m-auto "
              />
            </div>
          </Col>
          <Col sm={8} className=" ps-4">
          <p className="pe-3 mt-3 fs-2">{t('Frequently Asked Questions -FAQ')}</p>
          <p className=" text-muted fs-6">{t('How can we help you?')}</p>
        </Col>
        </Row>

        <Container >
          <Row className="pb-5 d-flex justify-content-center align-items-center " style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
            <Col sm={10}>
              <Accordion flush >
                <Accordion.Item eventKey="0" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} id="accordian-header" >
                    <p className=" py-2 text-secondary ">
                      {t("Can i disconnect my children's devices from the Internet in case they spent too much time online?")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3" >
                    {t('Yes, you can. Just open the parent app (Surfie-Parent) and tab the disconnect button on the bottom of the Family Overview screen. If you want to disconnect just some of your children, then select the disconnect button on the relevant profiles.')}
                  </Accordion.Body>
                </Accordion.Item >


                <Accordion.Item eventKey="1" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header >
                  <p className=" py-2 text-secondary " >
                      {t('I installed the child-app on my childrens iphones but i do not see any information on what application they used?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                   {t('At this stage, our protection for iPhones include: WhatsApp and Facebook cyber-bullying alerts, location tracking and location alerts and website filtering. In the new future we will also introduce app-usage tracking for iOS devices (as we already have for Android phones and tablets).')}
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t("During the Surfie-Kid app installation, I got a VPN connection error 'Your certeficate is permature' what shouid i do?")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    <ul>
                      <li> {t('Go to Settings')}</li>
                      <li> {t('General')}</li>
                      <li> {t('Date & Time and turn on Set automatically')}</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t('I forgot my Parental app password. what can i do?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    {t("Tab the 'Forgot Password' option on the sign in screen of the parent app. An email will be sent to you to reset your password.")}
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="5" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t('I have Surfie installed on my son device and i want to give this device to my daughter now. How can i change the profile?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                   {t('Login to our parent web-portal at: http://surfie.puresight.com. We recommend to use a PC for that. Select Settings, Advanced Setting and finally Device settings. Look for your son’s device and select your daughter’s profile from the drop-down list. Click Save Changes.')}
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="6" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t('How can i block or allow specific website?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    <ul>
                      <li>
                        {t('1. Login to our parent web-portal at: http://surfie.puresight.com')}
                      </li>
                      <li>{t('2. Click on Settings')} </li>
                      <li>{t('3. Select the relevant child profile')}</li>
                      <li>{t('4. Click on Websites')}</li>
                      <li>{t('5. Scroll down to Block or Allow Websites')}</li>
                      <li>
                        {t('6. Under Step 3, enter the relevant site (example:cnn.com; disney.com)')}
                      </li>
                      <li>{t('7. Select Block or Allow')}</li>
                      <li>{t('8. Click Add')}</li>
                      <li>{t('9. Click Save Changes')}</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="7" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }} >
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t('How can i change my child profile picture?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    <ul>
                      <li>
                        {t('1. On the parent app, tab Settings on the Family Overview screen')}
                      </li>
                      <li>{t('2. Select Child profile settings')}</li>
                      <li>{t('3. Select the relevant child profile')}</li>
                      <li>{t('4. Tab Change Profile Picture')}</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                
                <Accordion.Item eventKey="8">
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t('I installed the parental control application on my android phone, then i created a profile for my daughter and sent the download link of the child-app to her phone. Later day i checked her online activities but i only saw three empty screen: Social, Web, and Time. Why and where is the Location and App screen?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    {t('You did not complete the installation of the child-app on your daughter’s phone. Take her phone and click on the installation link you sent. Complete the installation and you will see also the location and app screen. After your daughter uses her phone, you will see some of her online activities.')}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="9">
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t("I can't see any Facebook activities of my son. why?")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    {t('You have to activate our Facebook protection. Open the Facebook App on your son’s Android device or iPhone and follow the install wizard. Once you have activated our Facebook protection on one platform (Android, iOS or Windows) it will work for all of them.')}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="10">
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t('I subscribed to your service, How do i delete my account?')}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    <ul>
                      <li> {t('To delete your account please contact us')} </li>
                      <li>support@surfieethiopia.com </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="12">
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t("My daughter's profile is gray and it says 'You turned her device off'. How do i turn it on again?")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    {t("It’s very easy. Open the parent-app (Surfie-Parent) and tab the “Connect button” on the top of daughter’s profile. Within a few seconds the device will be reconnected to the Internet.")}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="13">
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t("I used the option to disconnect the computer of my son from the internet. Now i want to reconnect him, but it does't seem to work. what can i do?")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    {t("The reconnect may take some time. To speed things up we recommend to open the Surfie sys tray icon on your son’s computer taskbar and to click the option “synchronize now”. Afterwards, your son should be reconnected to the Internet")}.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="14">
                  <Accordion.Header>
                  <p className=" py-2 text-secondary ">
                      {t("I do not see my daughter's location anymore and i don't get notification when she leaves school. what can i do?")}
                    </p>
                  </Accordion.Header>
                  <Accordion.Body className="text-muted my-3">
                    <ul>
                      <li>
                        {t("In such a case you need to check a few things on your child’s mobile device.")}
                      </li>
                      <li>
                        {t("For Android devices: First check if GPS is turned on and if high accuracy mode is selected. Go to Settings, look for location and update the GPS and accuracy mode settings. Secondly, you need to check if Surfie-Kids still has the required location permissions. Go to Settings, Manage Apps, look for Surfie-Kids, go to permissions and make sure that the location permission is turned on and set to “always allow” (Note, the terms used by each phone manufacturer might be slightly different.) If you need help, let us know.")}
                      </li>
                      <li>
                        {t("For iOS devices: Check if the location permission for Surfie Kids is turned on. Go to settings, scroll down to Surfie-Kids and make sure the location permission is turned on and set to always allow.")}
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
            <div className=" mb-3 d-flex justify-content-center align-items-center rounded-circle faq shadow m-auto " style={{ color: 'var(--bg-color)' }}>
              <MdOutlineAlternateEmail
                size={50}
                className="primary-bg m-auto"
                
              />
            </div>
          </Col>

          <Col sm={5} className="ps-4 pe-4">
            <p className="mb-4 fs-2 "> {t('Drop Message')} </p>

            <form>
              <Row>
                <Col>
                  <Form.Group className=" mb-3" controlId="Name">
                    <Form.Control
                      type="text"
                      required
                      rows={1}
                      placeholder={t("Full name")}
                      className="form-control border p-2 ps-3"
                      value={info.username}
                      onChange={updateName}
                      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className=" mb-3" controlId="Email">
                    <Form.Control
                      type="email"
                      required
                      placeholder={t("Email")}
                      className="form-control border p-2 ps-3"
                      value={info.email}
                      onChange={updateEmail}
                      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className=" mb-3" controlId="Textarea" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
                <Form.Control
                  as="textarea"
                  rows={8}
                  required
                  placeholder={t("Write you message here...")}
                  className="form-control border p-2 ps-3"
                  value={info.message}
                  onChange={updateMessage}
                  style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
                />
              </Form.Group>
              <Row className="d-flex justify-content-evenly align-content-center ">
                <Col>
                  <button
                    variant="light"
                    type="button"
                    className=" btn btn-md  py-1 ms-2 primary-fill px-5 py-2 my-2"
                    onClick={() => DropMessage()}
                  >
                    {info.loading ? (
                      <div
                        class="spinner-border spinner-border-sm text-black"
                        role="status"
                      >
                        <span class="visually-hidden">{t('Loading...')}</span>
                      </div>
                    ) : (
                      <span>{t('Send')}</span>
                    )}
                  </button>
                </Col>
                {info.positive ? (
                  <Col className="m-auto bg-success bg-opacity-10 p-1 text-center rounded-1 px-2  d-flex justify-content-evenly align-content-center me-3">
                    <AiOutlineCheckCircle
                      size={40}
                      className="align-content-center m-auto me-2 text-success"
                    />
                    <p className="text-success m-auto small">{info.prompt}</p>
                  </Col>
                ) : info.negetive ? (
                  <Col className="m-auto bg-danger bg-opacity-10 p-1  text-center rounded-1 d-flex justify-content-evenly align-content-center me-3">
                    
                    <BiErrorCircle
                      size={30}
                      className="align-content-center m-auto me-2 text-danger"
                      
                    />
                    <p className="text-danger m-auto">{t(info.prompt)} </p>
                  
                  </Col>
                ) : null}
              </Row>
            </form>
          </Col>

          <Col sm={4} className="text-white p-5 ">
            <Card className="rounded-3 primary-fill">
              <Card.Body className=" py-4">
                <Card.Title className="pt-2 ps-3 pb-2">
                  <p className="fs-3 fw-bold" style={{ color: 'var(--bg-color)' }}>{t('Get in Touch')}</p>
                </Card.Title>

                <p className="ps-3 pe-3 pt-0 just  fs-6" style={{ color: 'var(--bg-color)' }}>
                  {t("Don’t hesitate to contact us at any time")} <br />
                  {t('we are 24/7 available.')}
                </p>

                <Card.Text className=" pt-3">
                  <Row className="ps-3 d-flex justify-content-between align-items-center">
                    <Col sm={2} className="hid">
                      <div className=" mt-2 d-flex justify-content-center  rounded-circle contact shadow-sm  textcolor-ct ">
                        <GoLocation size={28} className="m-auto"  style={{ color: 'var(--bg-color)' }}/>
                      </div>
                    </Col>
                    <Col sm={9} className="mt-2">
                      <span className=" fs-5 fw-semibold pe-3 " style={{ color: 'var(--bg-color)' }}>
                       
                        {t('Visit Us')}
                      </span>
                      <p className=" fs-6 pe-3 small" style={{ color: 'var(--bg-color)' }}>
                       {t('Husen Building, 2nd Floor, Bole 24, Addis ababa Ethiopia')}
                      </p>
                    </Col>
                  </Row>
                </Card.Text>

                <Card.Text className=" pt-3">
                  <Row className="ps-3 d-flex justify-content-between align-items-center">
                    <Col sm={2} className="hid">
                      <div className="hid mt-2 d-flex justify-content-center  rounded-circle contact shadow-sm  textcolor-ct ">
                        <FiMail size={28} className="m-auto" style={{ color: 'var(--bg-color)' }} />
                      </div>
                    </Col>
                    <Col sm={9} className="mt-2 ">
                      <span className=" fs-5 fw-semibold pe-3 " style={{ color: 'var(--bg-color)' }}> {t('Mail Us')} </span>
                      <p className=" fs-6 pe-3 small" style={{ color: 'var(--bg-color)' }}>
                        support@surfieethiopia.com <br />
                        contact@surfieethiopia.com
                      </p>
                    </Col>
                  </Row>
                </Card.Text>

                <Card.Text className=" pt-3">
                  <Row className="ps-3 d-flex justify-content-between align-items-center">
                    <Col sm={2} className="hid">
                      <div className=" hid mt-2 d-flex justify-content-center rounded-circle contact shadow-sm  textcolor-ct">
                        <FiPhoneCall size={28} className="m-auto" style={{ color: 'var(--bg-color)' }} />
                      </div>
                    </Col>
                    <Col sm={9} className="mt-2 ">
                      <span className=" fs-5 fw-semibold pe-3 " style={{ color: 'var(--bg-color)' }}> {t('Call Us')} </span>
                      <p className=" fs-6 pe-3 small" style={{ color: 'var(--bg-color)' }}>
                        +251-992 758 586 <br />
                        +251-911 287 546
                      </p>
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
      </>
      <Footer />
    </div>
  );
};
export default Contact;
