import { Button, Col, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import {
  MdOutlineSupportAgent,
  MdOutlineAppShortcut
} from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { GiBinoculars } from "react-icons/gi";
import { RiParentLine } from "react-icons/ri";
import { FcMindMap } from "react-icons/fc";
import Card from "react-bootstrap/Card";
import Filter from "../assets/filter.jpg";
import Social from "../assets/social.jpg";
import Alert from "../assets/alert.jpg";
import Device from "../assets/device.jpg";
import Time from "../assets/time.jpg";
import Manage from "../assets/manage.jpg";
import Location from "../assets/location.jpg";
import Eyesup from "../assets/eyesup.jpg";
import Browse from "../assets/browse.jpg";
import Family from "../assets/family.jpg";
import Online from "../assets/online.jpg";
import { useTranslation } from "react-i18next";
import { FaChild } from "react-icons/fa";

function Platforms() {

  const {t} = useTranslation();
  const [advanced, setAdvanced] = useState(false);
  const [advanced1, setAdvanced1] = useState(false);
  const [advanced2, setAdvanced2] = useState(false);
  const [advanced3, setAdvanced3] = useState(false);
  const [advanced4, setAdvanced4] = useState(false);
  const [advanced5, setAdvanced5] = useState(false);
  const [advanced6, setAdvanced6] = useState(false);
  const [advanced7, setAdvanced7] = useState(false);
  const [advanced8, setAdvanced8] = useState(false);
  const [advanced9, setAdvanced9] = useState(false);
  const [advanced10, setAdvanced10] = useState(false);

  return (
    <>
    <Container>
      <Row className="py-3">
        <Col sm={1}></Col>
        <Col sm={2}>
          <div className=" mt-4 d-flex justify-content-center align-items-center rounded-circle features shadow-sm  colored2 m-auto ">
            <MdOutlineAppShortcut size={80} className="primary-bg m-auto" />
          </div>
        </Col>
        <Col sm={6} className="ps-4">
         
          <p className="p-2 mt-4 fs-2"> {t('Surfie Features')} </p>
          <p className="p-3 pt-0 mb-2 text-muted just fs-6 lead">
          {t('The internet has created endless opportunities and information is available to everybody anywhere. Our kids natural curiosity can lead them to search, and be exposed to inappropriate content, unfit for their age.')} </p> 
            <p className=" p-3 mb-2 text-muted just fst-italic">
            {t('Protect your kids with the Surfie apps innovative digital parenting features')}
          </p>
        </Col>
      </Row>
     
      </Container>
    

      <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <h3 className="text-center  pb-3 ">{t('Surfie Platforms')} </h3>
      </Row>
        <Row className="p-3 d-flex justify-content-center ">
          <Col
            sm={3}
            className=" primary-fill m-2 text-center border-0 shadow-sm  mb-4 p-3 rounded"
          >
            
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border-0 primary-bg border-0 m-auto ">
                  <RiParentLine size={60} className="text-white m-auto" />
                </div>

                <Card.Title>{t('Surfie Parent')}</Card.Title>
                <Card.Text className="textcolor-w">
                  {t('An approachable, simple-to-use tool that gives you constant access to your kids smart gadgets and keeps them safe and secure.')}
                </Card.Text>
              </Card.Body>
          
          </Col>

          <Col
            sm={3}
            className="primary-fill m-2 text-center border-0 shadow-sm  mb-4 p-3 rounded"
          >
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center primary-bg rounded-circle fcard shadow-sm border m-auto border-0 ">
                  <FaChild size={60} className=" text-white  m-auto" />
                </div>

                <Card.Title>{t('Surfie Child')}</Card.Title>
                <Card.Text className="textcolor-w">
                  {t('Install the app across all of your childrens devices to protect them from online risks.')}
                </Card.Text>
              </Card.Body>
          
          </Col>

          <Col
            sm={3}
            className="primary-fill m-2 text-center border-0 shadow-sm  mb-4 p-3 rounded"
          >
           
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm border primary-bg border-0 m-auto">
                  <BsLaptop size={60} className="text-white m-auto" />
                </div>

                <Card.Title>{t('Surfie PC Client')}</Card.Title>
                <Card.Text className="textcolor-w">
                  {t('Surfie PC client is installed on Windows-based computers.')}
                </Card.Text>
              </Card.Body>
           
          </Col>
        </Row>

        <Container className="alignme">
          {/* start one */}
          <Row className="d-flex  my-4 justify-content-center align-items-center ">
            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Filter}
                alt="Filter"
                width="300vw"
                height="300vh"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> {t('Advanced Internet Filtering')} </h4>
              <p className=" text-muted">
                {t('Monitor and filter your kids internet consumption, based on their age. Block access, restrict access and filter out what you think is appropriate or let Surfie decide for you.')}
              </p>
              {advanced ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced(false)}
                >
                  {t('Read Less')}
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced(true)}
                >
                  {t('Read More')}
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced ? (
                <>
                  <p className="just text-muted">
                    Caught your kid in the act of watching porn? For young
                    children especially, this can be incredibly worrying. You
                    wanted to have a conversation about sex and intimacy at a
                    designated time, providing them with a more open and
                    realistic environment to discuss sexual behavior.
                  </p>
                  <p className="just text-muted">
                    Or maybe your child has heard alarming discussions about the
                    need to look and behave a certain way, and then started
                    researching ways to lose weight quickly.{" "}
                  </p>
                  <p className="just text-muted">
                    In both of these cases, you should be alerted and ready to
                    take the course of action necessary to protect your
                    children. PureSight’s Advanced Internet Filtering alerts you
                    to any potentially worrying content competition, alerting
                    you as and when you need to be aware. Surfie will adjust the
                    acceptable content to each child’s age, meaning a 7 year old
                    will be allowed to view different content to a 14 year old.
                  </p>
                  <p className="just text-muted">
                    The content filtering feature covers a range of categories,
                    including drugs, hateful content., violence, gambling,
                    cyberbullying and more.
                  </p>
                </>
              ) : null}
            </Col>
          </Row>

          {/* end one */}

          {/* start two */}
          <Row className="d-flex my-4 justify-content-center align-items-center reverseit ">
            <Col sm={5} >
              <h4 className=""> Social Media Monitoring </h4>
              <p className=" text-muted">
                Track conversations across popular platforms like WhatsApp,
                Instagram, Viber and Facebook for troubling keywords to do with
                inappropriate situations, behaviors and conversations.
              </p>
              {advanced1 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced1(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced1(true)}
                >
                  Read More
                </Button>
              )}
            </Col>

            <Col sm={5} className="">
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Social}
                alt="Social"
                width="300vw"
                height="300vh"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced1 ? (
                <>
                  <p className="just text-muted">
                    How can you tell that your child is chatting with
                    appropriate people – and that they’re not being secretly
                    groomed? Can you be certain you know their chat partners are
                    safe, and who they say they are? How about what your
                    children are chatting about?
                  </p>
                  <p className="just text-muted">
                    Surfie monitors your children’s chats, making sure they are
                    safe and talking to people in their contact list, and about
                    safe topics. You’ll receive notifications should any
                    potentially troubling keywords come up, and know at all
                    times who your kids are chatting with. Enjoy a middle-ground
                    for you both – allowing your kids to keep their privacy,
                    while you protect them from any digital harm.{" "}
                  </p>
                </>
              ) : null}
            </Col>
          </Row>
          {/* end two */}

          {/* start three */}
          <Row className="d-flex  my-4 justify-content-center align-items-center ">
            <Col sm={5}>
              <img
                className="mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Alert}
                alt="Alert"
                width="300vw"
                height="300vh"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Parental Alert Notifications</h4>
              <p className=" text-muted">
                Receive notifications once certain flags are raised – if
                something happens, a keyword is triggered or otherwise.
              </p>
              {advanced2 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced2(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced2(true)}
                >
                  Read More
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced2 ? (
                <>
                  <p className="just text-muted">
                    Has your child received a message that their friend’s
                    parents aren’t at home? Or about something secual,
                    drug-related, violent or otherwise inappropriate?
                  </p>
                  <p className="just text-muted">
                    No matter the inappropriate action or content, Surfie will
                    alert you – according to pre-defined, age-appropriate
                    filters – when something has triggered the inappropriate
                    content filter and let you know all about it. Once you
                    receive a notification, you can then choose which action to
                    take in response – block, restrict or otherwise. It’s your
                    call.{" "}
                  </p>
                </>
              ) : null}
            </Col>
          </Row>

          {/* end three */}

          {/* start four */}
          <Row className="d-flex my-4 justify-content-center align-items-center reverseit">
            <Col sm={5}>
              <h4 className="">24/7 Cross-Device Monitoring </h4>
              <p className=" text-muted">
                Do you know how your kids use their devices at night? Now you
                can, and will! Monitor your kids’ devices 24/7, all from one
                easy-to-use dashboard.
              </p>
              {advanced3 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced3(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced3(true)}
                >
                  Read More
                </Button>
              )}
            </Col>

            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Device}
                alt="Device"
                width="300vw"
                height="300vh"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced3 ? (
                <>
                  <p className="just text-muted">
                    Is your child secretly messaging someone late at night, long
                    after you’d thought they;d gone to bed? Are they spending
                    too much time on their apps and social media? Could they be
                    secretly watching porn? Surfie will let you know exactly
                    what they’re doing, when and how – you’ll be notified as and
                    when something isn’t right, across multiple devices – all
                    from one secure dashboard.
                  </p>
                </>
              ) : null}
            </Col>
          </Row>
          {/* end four */}

          {/* start five */}
          <Row className="d-flex  my-4 justify-content-center align-items-center ">
            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Time}
                alt="Time"
                width="300vw"
                height="300vh"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Screen Time Limits</h4>
              <p className=" text-muted">
                Set the limits and Surfie will make sure they’re stuck to,
                meaning no more arguments! Block, restrict uses of apps, and
                limit the amount of time for use per app, or for screen time in
                total.
              </p>
              {advanced4 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced4(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced4(true)}
                >
                  Read More
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced4 ? (
                <>
                  <p className="just text-muted">
                    Are you worried your children are spending too long on their
                    devices, or on certain apps,and you can’t think of a way to
                    track or limit this? Surfie will do it all for you: you’ll
                    receive a detailed report of how long your children have
                    spent on devices and apps, and know exactly how long your
                    kids are spending with their screens, broken down by app and
                    activity, then limit the time being used by certain apps, or
                    restrict them completely.
                  </p>
                </>
              ) : null}
            </Col>
          </Row>

          {/* end five */}

          {/* start six */}
          <Row className="d-flex my-4 justify-content-center align-items-center reverseit">
            <Col sm={5}>
              <h4 className="">Manage Apps and Games </h4>
              <p className=" text-muted">
                Choose which apps your kids can use and block access to the ones
                you don’t want them to see. You can also balance the time they
                spend per app, and set a daily time limit for use.
              </p>
              {advanced5 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced5(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced5(true)}
                >
                  Read More
                </Button>
              )}
            </Col>

            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Manage}
                alt="Manage"
                width="300vw"
                height="300vh"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced5 ? (
                <>
                  <p className="just text-muted">
                    Don’t want your children accessing certain apps or games, or
                    maybe you’re worried about them tringto download
                    inappropriate ones? Surfie allows you to easily block or
                    restrict certain apps, games and other content, meaning no
                    more fights with your children about what they can and can’t
                    download or play!
                  </p>
                </>
              ) : null}
            </Col>
          </Row>
          {/* end six */}

          {/* start seven */}
          <Row className="d-flex  my-4 justify-content-center align-items-center ">
            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Location}
                alt="Location"
                width="300vw"
                height="300vh"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Find Your Kids’ Geolocation</h4>
              <p className=" text-muted">
                Hyper-accurate geolocation tracking – know exactly where your
                kids are, and get reliable, accurate location alerts when they
                reach certain places.
              </p>
              {advanced6 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced6(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced6(true)}
                >
                  Read More
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced6 ? (
                <>
                  <p className="just text-muted">
                    How can you know that your children are where they say they
                    are, and who they’re with, or if they’re safely on their way
                    home? Surfie’s hyper-accurate geolocation feature allows you
                    to know exactly where your kids are, and even receive
                    notifications when they leave a predefined point!
                  </p>
                </>
              ) : null}
            </Col>
          </Row>

          {/* end seven */}

          {/* start eight */}
          <Row className="d-flex my-4 justify-content-center align-items-center reverseit">
            <Col sm={5}>
              <h4 className="">Eyes Up Internet Disconnect </h4>
              <p className=" text-muted">
                Disconnect your kids from the internet, all from the click of a
                button! Choose your moment, and…all eyes will magically lift
                upwards from their screens!
              </p>
              {advanced7 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced7(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced7(true)}
                >
                  Read More
                </Button>
              )}
            </Col>

            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Eyesup}
                alt="Eyesup"
                width="300vw"
                height="300vh"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced7 ? (
                <>
                  <p className="just text-muted">
                    How many times have you called your family for dinner, only
                    to find your kids sitting there like zombies, refusing to
                    disconnect from their devices? With the Eyes Up internet
                    Disconnect feature, you can disconnect the internet, so
                    they’re forced to be parted from their dearly beloved phones
                    for the duration of your choosing! Choose when and who to
                    reconnect to the internet at your leisure, and enjoy quiet,
                    screen-free family time when you want to.
                  </p>
                </>
              ) : null}
            </Col>
          </Row>
          {/* end eight */}

          {/* start nine */}
          <Row className="d-flex  my-4 justify-content-center align-items-center ">
            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Browse}
                alt="Browse"
                width="300vw"
                height="300vh"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> Browsing Habits</h4>
              <p className=" text-muted">
                Alongside the top blocked websites, Surfie will give you a list
                of your kids’ top 10 most-visited websites. You’ll be able to
                see if your kids’ preferences change, for example, due to
                something they’ve recently experienced, or should any new
                behaviors develop. This feature can also be used to understand
                your kids’ areas of interest.
              </p>
              {advanced8 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced8(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced8(true)}
                >
                  Read More
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced8 ? (
                <>
                  <p className="just text-muted">
                    Kids tent to search their area of interest so as a parent
                    its important to know it. Changes in the area of interest
                    may point on event they have been involvement or new
                    discussion they are part of it. Surfie will provide you the
                    info for better parenting.
                  </p>
                </>
              ) : null}
            </Col>
          </Row>

          {/* end nine */}

          {/* start ten */}
          <Row className="d-flex my-4 justify-content-center align-items-center reverseit">
            <Col sm={5}>
              <h4 className="">Family Safety Dashboard </h4>
              <p className=" text-muted">
                Our Surfie parent app is your family digital dashboard! The app
                will give you an overview of all your kid’s potential digital
                risks – aloof their devices, operating systems, and aloof your
                children, in one convenient, centralized place. The app will
                also proactively alert you in case something needs your
                attention, meaning you get to make the right digital parenting
                decisions, in real-time.
              </p>
              {advanced9 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced9(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced9(true)}
                >
                  Read More
                </Button>
              )}
            </Col>

            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Family}
                alt="Family"
                width="300vw"
                height="300vh"
              />
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced9 ? (
                <>
                  <p className="just text-muted">
                    You can add all your kids and all their devices including
                    you family shared devices. Surfie covers all kids digital
                    threats and challenges such as content filtering, screen
                    time, location, social applications monitoring and much
                    more…
                  </p>
                </>
              ) : null}
            </Col>
          </Row>
          {/* end ten */}

      {/* start eleven */}
      <Row className="d-flex  my-4 justify-content-center align-items-center ">
            <Col sm={5}>
              <img
                className=" mb-3 img-fluid justfy-content-center d-flex m-auto rounded-circle"
                src={Online}
                alt="Online"
                width="300vw"
                height="300vh"
              />
            </Col>

            <Col sm={5}>
              <h4 className=""> New online trends and risks</h4>
              <p className=" text-muted">
              The internet removes all of the real life geographical, 
              age and cultural boundaries, meaning there are a wealth of 
              new daily risks and threats that are ever-changing, and potentially 
              dangerous for our kids’ online lives. Challenges such as the Momo 
              Challange and the Blue Whale challenge are online trends erncouraging 
              kids to perform a series of 
              dangerous tasks including violent attacks, self-harm and even suicide.
              </p>
              {advanced10 ? (
                <Button
                  variant=" text-white bg"
                  className="btnn rounded-pill bg "
                  onClick={() => setAdvanced10(false)}
                >
                  Read Less
                </Button>
              ) : (
                <Button
                  variant=" text-white primary-fill"
                  className="btnn rounded-pill primary-fill"
                  onClick={() => setAdvanced10(true)}
                >
                  Read More
                </Button>
              )}
            </Col>
          </Row>
          <Row>
            <Col sm={10} className=" text-center m-auto">
              {advanced10 ? (
                <>
                  <p className="just text-muted">
                  PureSight has an established Content Lab with international 
                  content analysts, researching the emerging trends for children 
                  of all ages. Those threats are published to the PureSight site and uploaded to the Surfie service, alerting parents in case their children discuss or look into these new threats. With Surfie from Puresight, 
                  you’ll always be up-to-date with ever emerging risk and threats.  
                  </p>
                 
                </>
              ) : null}
            </Col>
          </Row>

          {/* end eleven */}



        </Container>
      </Container>

      <Row className=" mt-5  d-flex pb-5 d-flex justify-content-center align-items-center">
        <p className="mt-3  text-center pb-1 fw-bold fs-3">Advantages of using Surfie Ethiopia </p>
      </Row>

      <Container className="mb-5">
        <Row>
          <Col sm={3}>
            <Card className="text-center border-0 shadow-sm m-2 mb-3 p-3 h-100">
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm  colored2 m-auto ">
                  <GiBinoculars size={40} className="primary-bg m-auto" />
                </div>

                <Card.Title>Total Overlook</Card.Title>
                <Card.Text>
                  Easy understanding of your child’s digital lifestyle, making
                  it easier to start an open conversation about online
                  behaviors.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className="text-center border-0  shadow-sm m-2 mb-3 p-3  h-100">
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm colored2 m-auto ">
                  <RiParentLine size={40} className="primary-bg m-auto" />
                </div>

                <Card.Title>Parenting Style</Card.Title>
                <Card.Text>
                  Define age-appropriate boundaries, monitor digital use, or
                  just simply get alerts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={3}>
            <Card className="text-center border-0  shadow-sm m-2 mb-3 p-3  h-100">
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

          <Col sm={3}>
            <Card className="text-center border-0  shadow-sm m-2 mb-3 p-3  h-100">
              <Card.Body>
                <div className="mb-4 d-flex justify-content-center align-items-center rounded-circle fcard shadow-sm colored2 m-auto ">
                  <MdOutlineSupportAgent
                    size={40}
                    className=" primary-bg m-auto"
                  />
                </div>

                <Card.Title>24/7 Support</Card.Title>
                <Card.Text>
                  Unlike other apps, with Surfie you are not left behind –
                  support is here when you need it.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="p-4"></Row>
      </Container>
    </>
  );
}
export default Platforms;
