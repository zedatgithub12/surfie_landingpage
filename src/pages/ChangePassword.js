import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Button } from "react-bootstrap";
import Header from "../components/header";
import Connection from "../constants/Connections";

const ChangePassword = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const userinfo = sessionStorage.getItem("user");
  const customer = JSON.parse(userinfo);
  const [changing, setChanging] = useState(false);
  const [pass, setPass] = useState({
    type: "",
    content: "",
  });
  const [state, setState] = useState({
    loading: false,

    oldpassword: "",
    oldPassState: false,
    oldPassb: false,
    oldPasserrmsg: "",

    newpassword: "",
    newPassb: false,
    newPassState: false,
    newPasserrmsg: "",

    confirmpassword: "",
    confirmPassb: false,
    confirmPassState: false,
    confirmPasserrmsg: "",

    error: false,
    errorMessage: "",
  });

  //update  old password field
  const UpdateOldPassword = (event) => {
    setState({
      ...state,
      oldpassword: event.target.value,
    });
  };

  //update  password field
  const UpdatePassword = (event) => {
    setState({
      ...state,
      newpassword: event.target.value,
    });
  };

  //update Confirm password field
  const UpdateConfirmPass = (event) => {
    setState({
      ...state,
      confirmpassword: event.target.value,
    });
    if (state.confirmpassword === state.newpassword) {
      setState({
        ...state,
        confirmPassState: false,
        confirmPassb: false,
        confirmPasserrmsg: "",
      });
    }
  };

  const SubmitChange = () => {
    if (state.oldpassword === "") {
      setState({
        ...state,
        oldPassState: true,
        oldPassb: true,
        oldPasserrmsg: "Please enter your previous password!",
      });
      return false;
    } else if (state.newpassword === "") {
      setState({
        ...state,
        newPassState: true,
        newPassb: true,
        newPasserrmsg: "Enter new password!",
      });
      return false;
    } else if (state.confirmpassword === "") {
      setState({
        ...state,
        confirmPassState: true,
        confirmPassb: true,
        confirmPasserrmsg: "Confirm new password!",
      });
      return false;
    } else if (state.newpassword !== state.confirmpassword) {
      setState({
        ...state,
        confirmPassState: true,
        confirmPassb: true,
        confirmPasserrmsg: "Password Doesn't match!",
      });
      return false;
    } else if (
      state.oldpassword !== "" &&
      state.newpassword === state.confirmpassword
    ) {
      setState({
        ...state,
        confirmPassState: false,
        confirmPassb: false,
        confirmPasserrmsg: "",
      });

      // the api call code is going to be written here
      setChanging(true);
      var Api = Connection.api + Connection.changepassword + customer.id;
      var headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        oldpass: state.oldpassword,
        newpass: state.newpassword,
      };

      fetch(Api, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.message === "changed successfully") {
            setChanging(false);
            setPass({
              ...pass,
              type: "success",
              content: response.message,
            });
          } else if (response.message === "Old password does not match") {
            setChanging(false);
            setPass({
              ...pass,
              type: "error",
              content: response.message,
            });
          } else {
            setChanging(false);
            setPass({
              ...pass,
              type: "error",
              content: response.message,
            });
          }
        })
        .catch((e) => {
          setChanging(false);
          setPass({
            ...pass,
            type: "error",
            content: "error changing password",
          });
        });
    }
  };

  const [showpass, setShowPass] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "var(--sec-bg)",
        color: "var(--text-color)",
      }}
      className="pb-4"
    >
      <Header />
      <Container className="m-auto mt-4 ">
        <Row className="m-auto ">
          <Col
            style={{
              backgroundColor: "var(--sec-bg)",
              color: "var(--text-color)",
            }}
            sm={4}
            className="m-auto  p-2 ps-2  shadow-sm border rounded"
          >
            <div>
              <p
                className="fs-5 fw-bold ms-4 mt-2"
                style={{
                  color: "var(--text-color)",
                }}
              >
                Change Password
              </p>
            </div>
            {state.error ? (
              <div id="emailHelp" className="text-danger form-text ms-4 mt-3">
                {state.errorMessage}
              </div>
            ) : null}

            <form
              className="m-4 needs-validation"
              novalidate
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  className="form-label form-text"
                >
                  Old Password
                </label>
                <input
                  type="password"
                  className={
                    state.oldPassb
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  defaultValue={state.oldpassword}
                  onChange={UpdateOldPassword}
                  required
                  style={{
                    backgroundColor: "var(--sec-bg)",
                    color: "var(--text-color)",
                  }}
                />
                {state.oldPassState ? (
                  <div id="emailHelp" className="text-danger form-text">
                    {state.oldPasserrmsg}
                  </div>
                ) : null}
              </div>

              <div class="mb-3">
                <label
                  for="exampleInputPassword2"
                  className="form-label form-text"
                >
                  New Password
                </label>
                <input
                  className={
                    state.newPassb
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  id="exampleInputPassword2"
                  type={showpass ? "text" : "password"}
                  required
                  defaultValue={state.newpassword}
                  onChange={UpdatePassword}
                  style={{
                    backgroundColor: "var(--sec-bg)",
                    color: "var(--text-color)",
                  }}
                />

                {state.newPassState ? (
                  <div id="emailHelp" className="text-danger form-text">
                    {state.newPasserrmsg}
                  </div>
                ) : null}
              </div>

              <label for="exampleInputPassword3" class="form-label form-text">
                Confirm Password
              </label>
              <div class="mb-3 input-group">
                <input
                  className={
                    state.confirmPassb
                      ? "form-control border-danger"
                      : "form-control"
                  }
                  id="exampleInputPassword3"
                  type={showpass ? "text" : "password"}
                  required
                  defaultValue={state.confirmpassword}
                  onChange={UpdateConfirmPass}
                  style={{
                    backgroundColor: "var(--sec-bg)",
                    color: "var(--text-color)",
                  }}
                />

                <Button
                  title="show password"
                  onClick={() => setShowPass(!showpass)}
                  variant="white"
                  className="text-center primary-btn-bg  rounded-0 rounded-end border-3  me-2 "
                >
                  {showpass ? (
                    <AiOutlineEye size={22} className="me-1 pb-1" />
                  ) : (
                    <AiOutlineEyeInvisible size={22} className="me-1 pb-1" />
                  )}
                </Button>
              </div>
              {state.confirmPassState ? (
                <div id="emailHelp" className="text-danger form-text">
                  {state.confirmPasserrmsg}
                </div>
              ) : null}
              <div className="d-flex justify-content-between align-items-center mb-2 mt-4 pb-2">
                <Button
                  variant="light"
                  className="border-0 px-5 bg-secondary mt-1"
                  onClick={goBack}
                >
                  Back
                </Button>
                <Button
                  disabled={changing ? true : false}
                  size="md"
                  variant="light"
                  id="primarybtn"
                  className="border-0 px-5 mt-1"
                  onClick={() => SubmitChange()}
                >
                  {changing ? (
                    <div
                      className="spinner-border spinner-border-sm text-light "
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </div>
              <div className="mt-4 mb-3 end-0 ">
                {pass.type === "success" ? (
                  <div className="m-auto px-4 py-1 rounded bg-success bg-opacity-10">
                    <p className="py-1 text-capitalize my-auto text-success fw-normal">
                      {pass.content}
                    </p>
                  </div>
                ) : pass.type ? (
                  <div className="m-auto px-4 py-1 rounded bg-danger bg-opacity-10">
                    <p className="py-1 text-capitalize my-auto text-danger fw-normal">
                      {pass.content}
                    </p>
                  </div>
                ) : null}
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePassword;
