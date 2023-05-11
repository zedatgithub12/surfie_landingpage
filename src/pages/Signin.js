import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import Parents from "../assets/parents.svg";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import Connection from "../constants/Connections";
import {
  //   FormControlLabel,
  //   Radio,
  //   RadioGroup,
  Grid,
  //   Typography,
} from "@mui/material";
import { AuthContext } from "../context";
function Auth() {
  const navigate = useNavigate();
  const { SignIn } = useContext(AuthContext);
  const Sign = (status, user) => {
    SignIn(status, user);
  };
  const [show, setShow] = useState(false);
  /****************************************** */
  //Login handling credentials
  /****************************************** */
  const [logSpinner, setLogSpinner] = useState(false);
  const [logInput, setLogInput] = useState({
    email: "",
    emailbc: false,
    emailht: "",
    password: "",
    passwordbc: false,
    passwordht: "",
  });
  const updateLogEmail = (event) => {
    setLogInput({
      ...logInput,
      email: event.target.value,
    });
  };
  const updateLogPassword = (event) => {
    setLogInput({
      ...logInput,
      password: event.target.value,
    });
  };
  const Login = () => {
    const re = /\S+@\S+\.\S+/;
    if (logInput.email === "") {
      setLogInput({
        ...logInput,
        emailbc: true,
        emailht: "Please enter email",
      });
      document.getElementById("logEmail").focus();
    } else if (!re.test(logInput.email)) {
      setLogInput({
        ...logInput,
        emailbc: true,
        emailht: "email must contain @ and . symbols",
      });
      document.getElementById("logEmail").focus();
    } else if (logInput.password === "") {
      setLogInput({
        ...logInput,
        passwordbc: true,
        passwordht: "Please enter your password",
      });
      document.getElementById("logpassword").focus();
    } else {
      setLogSpinner(true);
      //the api call to the backend of the system will be made from here!
      var Api = Connection.api + Connection.login;
      var headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };

      var data = {
        email: logInput.email,
        password: logInput.password,
      };

      fetch(Api, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (!(response === "83")) {
            setLogSpinner(false);
            setServerResponse({
              showres: false,
              errorMsg: "",
            });
            Sign("Signed", response);
            navigate("/dashboard");
          } else if (response.status === "83") {
            setLogSpinner(false);
            setServerResponse({
              showres: true,
              errorMsg: "Incorrect email or password",
            });
          } else {
            setLogSpinner(false);
            setServerResponse({
              showres: true,
              errorMsg: "Incorrect email or password!",
            });
          }
        })
        .catch((e) => {
          setLogSpinner(false);
        });
    }
  };
  //server reponse states
  const [serverresponse, setServerResponse] = useState({
    showres: false,
    errorMsg: "",
  });

  return (
    <div
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <Container fluid className="primary-bg  sticky-top">
        <Row>
          <Col onClick={() => navigate("/")} sm={2} className="me-3">
            <img src={Logo} alt="logo" width="90" height="80" />
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
      <Container maxWidth="lg">
        <Grid container spacing={1} className="m-auto my-4">
          <Grid
            item
            xs={12}
            md={5}
            id="image"
            className="  mt-5 py-2 px-auto pe-4 border border-1 border-start-0 border-top-0 border-bottom-0"
          >
            <div
              style={{
                backgroundColor: "var(--bg-color)",
                color: "var(--text-color)",
              }}
            >
              <div className="float-end mt-4 pt-2">
                <p className="fs-3 mb-0 pe-3 text-end">
                  Surfie Ethiopia Parents Dashboard
                </p>
              </div>
              <img
                src={Parents}
                alt="Surfie Ethiopia Partners"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "85%",
                  float: "right",
                  paddingRight: 3,
                  marginTop: 20,
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container className="mt-3 py-5" id="authcard">
              <Row className="d-flex justify-content-center align-items-center p-4 mx-5 ">
                <Col
                  className="border-0 rounded-2 shadow-sm p-4"
                  style={{
                    backgroundColor: "var(--sec-bg)",
                    color: "var(--text-color)",
                  }}
                >
                  <Row className="d-flex justify-content-between align-items-center ">
                    <Col sm={4} className=" text-start">
                      <p className="fw-bold fs-3">Login</p>
                    </Col>
                  </Row>
                  {serverresponse.showres ? (
                    <small class="form-text text-danger bg-danger bg-opacity-10 p-2 rounded form-control border-0 text-center mt-2 align-center mx-auto">
                      {serverresponse.errorMsg}
                    </small>
                  ) : null}
                  <input
                    type="email"
                    id="logEmail"
                    className={
                      logInput.emailbc
                        ? "form-control mt-4 border-danger"
                        : "form-control mt-4"
                    }
                    placeholder="Email Address"
                    aria-label="Email Address"
                    value={logInput.email}
                    onChange={updateLogEmail}
                  />
                  <small class="form-text mt-0 text-danger">
                    {logInput.emailht}
                  </small>
                  <div className="input-group mt-3">
                    <input
                      type={show ? "text" : "password"}
                      id="logpassword"
                      className={
                        logInput.passwordbc
                          ? "form-control  border-danger"
                          : "form-control "
                      }
                      placeholder="Password"
                      aria-label="Password"
                      value={logInput.password}
                      onChange={updateLogPassword}
                    />

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShow(!show)}
                    >
                      {show ? <BsEye size={18} /> : <BsEyeSlash size={18} />}
                    </button>
                  </div>
                  <small class="form-text mt-0 text-danger">
                    {logInput.passwordht}
                  </small>

                  <button
                    type="button"
                    disabled={logSpinner ? true : false}
                    id="primarybtn"
                    className=" primary-btn-bg border-0 mt-4 form-control"
                    onClick={() => Login()}
                  >
                    {logSpinner ? (
                      <div
                        className="spinner-border spinner-border-sm text-light "
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Login"
                    )}
                  </button>

                  <Row className="d-flex justify-content-between align-items-center text-center mt-3">
                    {/* <Col className="text-start d-flex align-items-center ">
                  <Checkbox label="Remember me" /> <span>Remember me</span>
                </Col> */}

                    <Col>
                      <NavLink
                        to="/forgotpass"
                        id="link"
                        className="text-decoration-none"
                      >
                        Forgot Password
                      </NavLink>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Auth;
