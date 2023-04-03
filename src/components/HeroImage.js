import Afromina from "../assets/afromina.png";
import Puresight from "../assets/puresight.png";
import Surfiecolor from "../assets/surfiecolor.png";
import Placetobe from "../assets/p2b.png";
import Minawifi from "../assets/minawifi.png";
import IconButton from "@mui/material/IconButton";
import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BsPlayCircle } from "react-icons/bs";
import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSpring, animated } from "@react-spring/web";
import YouTube from 'react-youtube';
import { useTranslation } from 'react-i18next';


const Fade = React.forwardRef(function Fade(props, ref) {
  const {
    children,
    in: open,
    onClick,
    onEnter,
    onExited,
    ownerState,
    ...other
  } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter(null, true);
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited(null, true);
      }
    },
  });

 

  return (
    <animated.div ref={ref} style={style} {...other}>
      {React.cloneElement(children, { onClick })}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element.isRequired,
  in: PropTypes.bool,
  onClick: PropTypes.any,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  ownerState: PropTypes.any,
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 660,
  height: 450,
  p: 2,
};

const HeroImage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const { t } = useTranslation();

  const videoId = 'JNH03jZ2xOg'; // Replace with your YouTube video ID
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 1,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 0,
      fs: 1,
    },
  };
  return (
    <Container fluid>
      <Row className="position-relative " id="frontimage">
        <Col
          sm={6}
          className="bg-dark bg-opacity-50 pb-5 ps-3 pt-3"
          id="homepage"
        >
          <div className=" mt-3 pt-1 pt-4 ms-4"></div>
          <h6 className="mt-5 pt-5 ms-2  text-white">
           {t('Parental Control Application')}
          </h6>

          <h1 className="  ms-2 fw-bold text-white w-85 my-2">
            {" "}
            {t('AI-Based Online Child Safety Service')}
            {" "}
          </h1>

          <Row className="d-flex justify-content-evenly align-content-center">
            <Col className="my-5 ms-2">
              <NavLink
                to="/account"
                className="get btn button btn-outline-light  px-3"
                id="getstartedbtn"
              >
                {t('Get started')}
              </NavLink>

              <IconButton
                className="text-light ms-4 bg-light bg-opacity-10 blur "
                aria-label="Play Video"
                onClick={handleOpen}

              >
                <BsPlayCircle size={36} />
              </IconButton>
            </Col>
          </Row>
        </Col>

        <Col
          sm={6}
          className="bg-dark bg-opacity-50 pt-5"
          id="emptycloumn"
        ></Col>
      </Row>

      <Marquee gradientWidth={50} speed={10} className=" colored1 ">
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
            <img className="image_wrap mina" src={Minawifi} alt="Minawifi" />
          </Col>
          <Col>
            <img className="image_wrap p2" src={Placetobe} alt="Placetobe" />
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
          <Col>
            <img className="image_wrap mina" src={Minawifi} alt="Minawifi" />
          </Col>
          <Col>
            <img className="image_wrap p2" src={Placetobe} alt="Placetobe" />
          </Col>
        </Row>
      </Marquee>

      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            TransitionComponent: Fade,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="blur m-auto bg-light bg-opacity-10 rounded-2" >
          
             <YouTube videoId={videoId} opts={opts} className="h-100 w-100 rounded-2" />
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};
export default HeroImage;
