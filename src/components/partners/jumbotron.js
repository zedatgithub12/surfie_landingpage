import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Typography } from "@mui/material";
import Partners from "../../assets/partners.svg";
import { useTranslation } from "react-i18next";

const Jumbotron = () => {
  const { t } = useTranslation();
  return (
    <Container alignItems="center">
      <Row
        style={{
          backgroundColor: "var(--sec-bg)",
          color: "var(--text-color)",
        }}
        className="d-flex justify-content-around rounded-4 shadow-sm p-4 m-4 mb-5 bg-gradient border"
      >
        <Col className="h-100">
          <Typography className="fs-1 display-1 fw-semibold mt-4 ms-2 primarytext">
            {t("Partnership with Surfie Ethiopia")}
          </Typography>
          <Typography className="fs-4 mt-2 ms-2">
            {t("Refer & Earn")}
          </Typography>
          <Typography className="display-5  mt-2 mb-3 ms-2 text-capitalize">
            {t(
              "Be partner, invite parents or caregivers and get performance based revenue through our affiliate marketing program."
            )}
          </Typography>

          <Button
            component="a"
            href="https://partners.surfieethiopia.com/"
            target="_blank"
            rel="noopener"
            id="primarybg"
            className="text-white m-5 ms-0 p-2 px-4 rounded-2  fw-semibold fs-6 "
          >
            {t("Join us Today")}
          </Button>
        </Col>

        <Col id="image">
          <img src={Partners} alt="partners" className="img-fluid " />
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbotron;
