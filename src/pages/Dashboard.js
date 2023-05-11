import React, { useState } from "react";
import Header from "../components/header";
import { Container, Row, Col } from "react-bootstrap";
import {
  FcCalendar,
  FcOvertime,
  FcCollaboration,
  FcStackOfPhotos,
  FcMoneyTransfer,
} from "react-icons/fc";
import { BsCheckCircle } from "react-icons/bs";
import Licenses from "../data/packages";
import Channels from "../data/paymentChannels";
import Connection from "../constants/Connections";
import { ButtonBase, Typography, Button, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Dropdown from "react-bootstrap/Dropdown";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Dashboard() {
  const userinfo = sessionStorage.getItem("user");
  const customer = JSON.parse(userinfo);
  const [user] = useState({
    fname: customer.first_name === null ? "" : customer.first_name,
    mname: customer.middle_name === null ? "" : customer.middle_name,
    lname: customer.lname === null ? "" : customer.lname,
    status: customer.status === null ? "" : customer.status,
    license: customer.license === null ? "" : customer.license,
    subscription: customer.subscription === null ? "" : customer.subscription,
    duedate: customer.duedate === null ? "" : customer.duedate,
    email: customer.email === null ? "" : customer.email,
    phone: customer.phone === null ? "" : customer.phone,
    date: customer.created_at === null ? "" : customer.created_at,
    address: customer.living_address === null ? "" : customer.living_address,
    payment_method:
      customer.payment_method === null ? "" : customer.payment_method,
  });
  const [pmodal, setPModal] = useState("1001");
  const [renew, setRenew] = useState(false);
  const [upgrade, setUpgrade] = useState(false);
  const [actionload, setactionload] = useState(false);
  const [initialValue, setInitialValue] = useState({
    title: "",
    currentPlan: "",
    updatedInfo: "",
    operation: "",
    cofirmationtxt: "",
    errormsg: "",
    lid: "",
    cid: "",
  });
  const [renewLoader, setRenewLoader] = useState(false);
  const [upgradeLoader, setUpgradeLoader] = useState(false);
  const [responseMsg, setResponseMsg] = useState({
    severity: "success",
    content: "",
    status: false,
  });
  //modal dropdown license listing states
  const [license, setLicense] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [confirm, setConfirm] = useState(false);
  const choseen = Channels.find((channel) => channel.id === pmodal);
  const [open, setOpen] = useState(false);

  //handles a snackbar close function
  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const DateSlice = (date) => {
    var subdate;
    var year = date.slice(0, 4);
    var month = date.slice(5, 7);
    var day = date.slice(8, 10);

    subdate = day + "/" + month + "/" + year;
    return subdate;
  };

  //calculate and return the license expire date
  const ExpireDate = (date) => {
    var duedate;
    if (date == null) {
      duedate = "Not payed!";
    } else {
      var year = date.slice(0, 4);
      var month = date.slice(5, 7);
      var day = date.slice(8, 10);
      duedate = day + "/" + month + "/" + year;
    }
    return duedate;
  };

  function getDaysLeft(subscriptionEndDate, subscriptionType) {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const today = new Date();
    const endDate = new Date(subscriptionEndDate);
    const diffInTime = endDate.getTime() - today.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    if (subscriptionType === "monthly") {
      return diffInDays % 30; // Assuming a month has 30 days
    } else if (subscriptionType === "annual") {
      return diffInDays;
    } else {
      return null; // Invalid subscription type
    }
  }

  // dayleft for next subscription
  const duedates = user.duedate.slice(0, 10); // YYYY-MM-DD format
  const monthlyDaysLeft = getDaysLeft(duedates, user.subscription);

  const Payment = (mode) => {
    var gateway;

    switch (mode) {
      case 1000:
        gateway = "With Cash";
        break;
      case 1001:
        gateway = "Chapa";
        break;
      case 1002:
        gateway = "Telebirr";
        break;
      default:
        gateway = "With Cash";
    }

    return gateway;
  };
  const userPackage = Licenses.find((p) => p.device === user.license);
  const price = userPackage ? userPackage[user.subscription + "_price"] : 0;
  const annualPrice = userPackage ? userPackage["annual_price"] : 0;

  const OpenDialog = (item, operation) => {
    var info = operation === "add" ? "Change to" : "Downgrade to";

    if (operation === "add") {
      setConfirm("1");
      setInitialValue({
        ...initialValue,
        title: "Change License",
        currentPlan: item.license,
        updatedInfo: info,
        operation: operation,
        lid: item.id,
        cid: item.remote_id,
        errormsg: "",
      });
      setLicense(item.license);
      handleShow();
    }
    //when the user clicked deactivate account button from dropdown
    else if (operation === "deactivate") {
      setConfirm("2");
      setInitialValue({
        ...initialValue,
        title: "Deactivate Account!",
        cofirmationtxt:
          "Are you sure do you want to deactivate this user account!",
        operation: operation,
        lid: item.id,
        cid: item.remote_id,
        errormsg: "",
      });
      setLicense(item.license);
      handleShow();
    } else {
      setConfirm("2");
      setInitialValue({
        ...initialValue,
        title: "Detach Credentials",
        cofirmationtxt:
          "Are you sure do you want to Detach this user credentials!",
        operation: operation,
        lid: item.id,
        cid: item.remote_id,
        errormsg: "",
      });
      setLicense(item.license);
      handleShow();
    }
  };
  const Renew = () => {
    setUpgrade(false);
    setRenew(!renew);
  };
  const UpgradeSub = () => {
    setRenew(false);
    setUpgrade(!upgrade);
  };
  const AddSubscription = () => {
    var currentPackages = `AFROMINA_${initialValue.currentPlan}`;
    var packages = `AFROMINA_${license}`;

    setactionload(true);

    var Api = Connection.api + Connection.changeLicense + customer.id;
    var headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };

    var Data = {
      remoteid: customer.remote_id,
      localid: customer.id,
      license: license,
      package: packages,
      currentPackage: currentPackages,
    };

    fetch(Api, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(Data),
    })
      .then((response) => response.json())
      .then((response) => {
        // the action will be taken depending on the server response

        if (response === 0) {
          setConfirm("3");
          setInitialValue({
            ...initialValue,
            cofirmationtxt: `Succeessfully Changed to ${license} device license`,
            errormsg: "",
          });
          setactionload(false);
        } else if (response === 1001) {
          setInitialValue({
            ...initialValue,
            cofirmationtxt: "",
            lid: "",
            cid: "",
            errormsg: "Mandatory parameter missing!",
          });
          setactionload(false);
        } else if (response === 1002) {
          setInitialValue({
            ...initialValue,
            errormsg: "Invalid Username or Password!",
          });
          setactionload(false);
        } else if (response === 1003) {
          setInitialValue({
            ...initialValue,
            errormsg: "Already Subscribed!",
          });
          setactionload(false);
        } else if (response === 1004) {
          setInitialValue({
            ...initialValue,
            errormsg: "Invalid Package Id!",
          });
          setactionload(false);
        } else if (response === 1021) {
          setInitialValue({
            ...initialValue,
            errormsg: "Email already exist!",
          });
          setactionload(false);
        } else if (response === 1022) {
          setInitialValue({
            ...initialValue,
            errormsg: "Phone number already exist!",
          });
          setactionload(false);
        } else {
          setInitialValue({
            ...initialValue,
            errormsg: "Failed to to upgrade license",
          });
          setactionload(false);
        }
      });
  };
  // deactivate customer account
  const Deactivate = () => {
    if (initialValue.cid !== "") {
      setactionload(true);

      var Api = Connection.api + Connection.deactivate + customer.id;
      var headers = {
        accept: "application/json",
        "Content-Type": "application/json",
      };

      var Data = {
        remoteid: customer.remote_id,
        localid: customer.id,
        cstatus: 3,
      };

      fetch(Api, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          // the action will be taken depending on the server response

          if (response === 0) {
            setConfirm("3");
            setInitialValue({
              ...initialValue,
              cofirmationtxt: `Succeessfully Deactivated!`,
              errormsg: "",
            });
            setactionload(false);
          } else if (response === 1002) {
            setInitialValue({
              ...initialValue,
              errormsg: "Invalid Username or Password!",
            });
            setactionload(false);
          } else if (response === 1006) {
            setInitialValue({
              ...initialValue,
              errormsg: "Account id doesn't exist!",
            });
            setactionload(false);
          } else if (response === 2001) {
            setInitialValue({
              ...initialValue,
              errormsg: "Account is not active!",
            });
            setactionload(false);
          } else {
            setInitialValue({
              ...initialValue,
              errormsg: "Failed to deactivate customer credentials!",
            });
            setactionload(false);
          }
        })
        .catch((e) => {
          setInitialValue({
            ...initialValue,
            errormsg: "Error deactivating customer credentials",
          });
          setactionload(false);
        });
    } else {
      setInitialValue({
        ...initialValue,
        errormsg: "Please enter remote customer id!",
      });
      setactionload(false);
    }
  };
  const handleRenewal = () => {
    setRenewLoader(true);
    var Api = Connection.api + Connection.renew + customer.id;
    var headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    var data = {
      id: customer.id,
      channel: pmodal,
    };
    fetch(Api, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.original.status === "success") {
          setRenewLoader(false);
          setResponseMsg({
            ...responseMsg,
            severity: "info",
            content: "Redirecting to payment gateway...",
            status: true,
          });
          setOpen(true);
          window.location.href = response.original.data.checkout_url;
        } else {
          setRenewLoader(false);
          setResponseMsg({
            ...responseMsg,
            severity: "error",
            content: "We couldn't renew your license for now retry later ",
            status: true,
          });
          setOpen(true);
        }
      })
      .catch((e) => {
        setRenewLoader(false);
        setResponseMsg({
          ...responseMsg,
          severity: "error",
          content: "There is error renewing your license",
          status: true,
        });
        setOpen(true);
      });
  };
  const handleUpgrade = () => {
    setUpgradeLoader(true);
    var Api = Connection.api + Connection.upgrade + customer.id;
    var headers = {
      accept: "application/json",
      "Content-Type": "application/json",
    };
    var data = {
      channel: pmodal,
    };

    fetch(Api, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.original.status === "success") {
          setUpgradeLoader(false);
          setResponseMsg({
            ...responseMsg,
            severity: "info",
            content: "Redirecting to payment gateway...",
            status: true,
          });
          setOpen(true);
          window.location.href = response.original.data.checkout_url;
        } else {
          setUpgradeLoader(false);
          setResponseMsg({
            ...responseMsg,
            severity: "error",
            content: "We couldn't renew your license for now retry later ",
            status: true,
          });
          setOpen(true);
        }
      })
      .catch((e) => {
        setUpgradeLoader(false);
        setResponseMsg({
          ...responseMsg,
          severity: "error",
          content: "There is error renewing your license",
          status: true,
        });
        setOpen(true);
      });
  };

  return (
    <div
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
      }}
    >
      <Header />
      <Container
        style={{
          backgroundColor: "var(--sec-bg)",
          color: "var(--text-color)",
        }}
      >
        <Row className="mt-5 shadow bg-whiten py-3 rounded px-3 pt-3">
          <Row className="px-2 mb-4">
            <Col
              className="pt-3"
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <div className="d-flex justify-content-between align-items-center p-3 shadow border border-warning  border-4 border-end-0  border-top-0  border-bottom-0  rounded-3 shadow-sm text-muted fw-semibold">
                <div>
                  <span
                    className="fs-4 fw-semibold"
                    style={{
                      color: "var(--text-color)",
                    }}
                  >
                    {user.license} Device
                  </span>
                  <br />
                  <Typography className="text-capitalize">License</Typography>
                </div>
                <FcStackOfPhotos size={40} />
              </div>
            </Col>

            <Col className="pt-3">
              <div className="d-flex justify-content-between align-items-center p-3 shadow border   border-4 border-end-0  border-top-0  border-bottom-0  rounded-3 shadow-sm text-muted fw-semibold">
                <div>
                  <span
                    className="fs-4 fw-semibold text-capitalize"
                    style={{
                      color: "var(--text-color)",
                    }}
                  >
                    {user.subscription}
                  </span>
                  <br />
                  <Typography className="text-capitalize">
                    Subscription
                  </Typography>
                </div>
                <FcCalendar size={40} className="primary-text" />
              </div>
            </Col>
            <Col className="pt-3">
              <div className="d-flex justify-content-between align-items-center p-3 shadow border border-4 border-end-0  border-top-0  border-bottom-0  rounded-3 shadow-sm text-muted fw-semiboldd">
                <div>
                  <span
                    className="fs-4 fw-semibold text-capitalize"
                    style={{
                      color: "var(--text-color)",
                    }}
                  >
                    {price} ETB
                  </span>
                  <br />
                  <Typography className="text-capitalize">
                    {user.subscription} Payment
                  </Typography>
                </div>
                <FcMoneyTransfer size={40} className="money-color" />
              </div>
            </Col>
            <Col className="pt-3">
              <div className="d-flex justify-content-between align-items-center p-3 shadow border   border-4 border-end-0  border-top-0  border-bottom-0  rounded-3 shadow-sm text-muted fw-semibold">
                <div>
                  <span
                    className="fs-4 fw-semibold text-capitalize"
                    style={{
                      color: "var(--text-color)",
                    }}
                  >
                    {monthlyDaysLeft}
                  </span>
                  <br />
                  <Typography className="text-capitalize">Days left</Typography>
                </div>
                <FcOvertime size={40} className="text-warning" />
              </div>
            </Col>
          </Row>

          <Col sm={8}>
            <div className="d-flex justify-content-between mb-2">
              <Typography className="text-muted fw-semibold fs-5 ms-1 ps-1">
                Your Details
              </Typography>
            </div>
            <div
              className="d-flex justify-content-between align-items-center px-2 shadow-sm  py-2  rounded"
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <p className=" my-auto">Full name</p>
              <p className="fw-semibold text-muted  my-auto text-capitalize">
                {user.fname} {user.mname}
              </p>
            </div>

            <div
              className="d-flex justify-content-between align-items-center px-2  py-2 mt-2 rounded shadow-sm"
              style={{
                backgroundColor: "var(--sec-bg)",
                color: "var(--text-color)",
              }}
            >
              <p className=" my-auto">Status</p>
              <p className="fw-semibold text-muted  my-auto text-capitalize">
                {user.status === 1 ? (
                  <span class="  bg-opacity-10 text-success pe-1 rounded-1">
                    Active
                  </span>
                ) : user.status === 2 ? (
                  <span class="badge bg-danger bg-opacity-10 text-danger pe-1 rounded-1">
                    Expired
                  </span>
                ) : user.status === 3 ? (
                  <span class="badge bg-danger bg-opacity-10 text-danger pe-1 rounded-1">
                    Deactivated
                  </span>
                ) : (
                  <span class="badge bg-secondary bg-opacity-10 text-secondary pe-1 rounded-1">
                    Pending
                  </span>
                )}
              </p>
            </div>

            <div className="d-flex justify-content-between align-items-center px-2 py-2 shadow-sm mt-2 rounded">
              <p className=" my-auto">License</p>
              <p className="fw-semibold text-muted  my-auto">
                {user.license} Device
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 py-2  shadow-sm mt-2 rounded">
              <p className=" my-auto">Subscription</p>
              <p className="fw-semibold text-muted  my-auto text-capitalize">
                {user.subscription}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 py-2  shadow-sm mt-2 rounded">
              <p className=" my-auto">Subscribed on</p>
              <p className="fw-semibold text-muted  my-auto">
                {DateSlice(user.date)}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 shadow-sm py-2 mt-2 rounded">
              <p className=" my-auto">Due Date</p>
              <p className="fw-semibold text-muted  my-auto">
                {user.status === 0 ? "Not Activated" : ExpireDate(user.duedate)}
              </p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 shadow-sm py-2 mt-2 rounded">
              <p className=" my-auto">Email</p>
              <p className="fw-semibold text-muted  my-auto">{user.email}</p>
            </div>
            <div className="d-flex justify-content-between align-items-center px-2 shadow-sm py-2 mt-2 rounded">
              <p className=" my-auto">Phone</p>
              <p className="fw-semibold text-muted  my-auto">{user.phone}</p>
            </div>

            {user.address ? (
              <div className="d-flex justify-content-between align-items-center px-2 shadow-sm py-2 mt-2 rounded">
                <p className=" my-auto">Address</p>
                <p className="fw-semibold text-muted  my-auto">
                  {user.address}
                </p>
              </div>
            ) : null}

            <div className="d-flex justify-content-between align-items-center px-2 shadow-sm py-2 mt-2 rounded">
              <p className=" my-auto">Paid with</p>
              <p className="fw-semibold text-muted  my-auto">
                {Payment(user.payment_method)}
              </p>
            </div>
          </Col>
          <Col sm={4}>
            <div className="rounded mt-4 pt-2 p-4 ">
              <Button
                onClick={() => Renew()}
                id="primarybtn"
                className="w-75 border-0 fw-semibold small mt-3  rounded shadow-sm text-white"
              >
                Renew License
              </Button>
              <br />
              {user.subscription === "monthly" && (
                <ButtonBase
                  onClick={() => UpgradeSub()}
                  className="w-75 bg-dark text-white p-2 px-4 rounded shadow-sm  fw-normal mt-3"
                >
                  Upgrade Subscription
                </ButtonBase>
              )}
              <ButtonBase
                onClick={() => OpenDialog(user, "add")}
                className="w-75 bg-dark text-white p-2 px-4 rounded shadow-sm  fw-normal mt-3"
              >
                Change License
              </ButtonBase>
              <br />
              <ButtonBase
                onClick={() => OpenDialog(user, "deactivate")}
                className="p-1  rounded small text-danger fw-semibold mt-3"
              >
                Deactivate Account
              </ButtonBase>
            </div>
            {renew ? (
              <div className="bg-info bg-opacity-10 rounded mt-2 pt-2 p-4 border  ">
                <div className="d-flex justify-content-between align-items-center px-2 py-2 mt-2 rounded">
                  <p className=" my-auto">License</p>
                  <p className="fw-semibold text-muted  my-auto">
                    {user.license} Device
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-2  py-2  rounded">
                  <p className=" my-auto">Subscription </p>
                  <p className="fw-semibold text-muted  my-auto text-capitalize">
                    {user.subscription}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-2  py-2  rounded">
                  <p className=" my-auto">Fee Amount </p>
                  <p className="fw-semibold text-muted  my-auto text-capitalize">
                    {price} ETB
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-2  py-2  rounded">
                  <p className=" my-auto">Pay With </p>
                  <p className=" my-auto">
                    <Dropdown className="">
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="light"
                        className="border"
                      >
                        {choseen.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="light">
                        {Channels.map((channel) => (
                          <Dropdown.Item
                            onClick={() => setPModal(channel.id)}
                            active
                          >
                            {channel.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                </div>
                <button
                  type="button"
                  id="primarybtn"
                  className="btn  mt-4 form-control"
                  onClick={() => handleRenewal()}
                >
                  {renewLoader ? (
                    <div
                      class="spinner-border spinner-border-sm text-white"
                      role="status"
                    ></div>
                  ) : (
                    <span>Renew</span>
                  )}
                </button>
              </div>
            ) : null}

            {upgrade ? (
              <div className="bg-primary bg-opacity-10 rounded mt-2 pt-2 p-4 border  ">
                <div className="d-flex justify-content-between align-items-center px-2 py-2 mt-2 rounded">
                  <p className=" my-auto">License</p>
                  <p className="fw-semibold text-muted  my-auto">
                    {user.license} Device
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-2  py-2  rounded">
                  <p className=" my-auto">Subscription </p>
                  <p className="fw-semibold text-muted  my-auto text-capitalize">
                    Annual
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-2  py-2  rounded">
                  <p className=" my-auto">Fee Amount </p>
                  <p className="fw-semibold text-muted  my-auto text-capitalize">
                    {annualPrice} ETB
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center px-2  py-2  rounded">
                  <p className=" my-auto">Pay With </p>
                  <p className=" my-auto">
                    <Dropdown className="">
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="light"
                        className="border"
                      >
                        {choseen.name}
                      </Dropdown.Toggle>

                      <Dropdown.Menu variant="light">
                        {Channels.map((channel) => (
                          <Dropdown.Item
                            onClick={() => setPModal(channel.id)}
                            active
                          >
                            {channel.name}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-4 form-control"
                  onClick={() => handleUpgrade()}
                >
                  {upgradeLoader ? (
                    <div
                      class="spinner-border spinner-border-sm text-white"
                      role="status"
                    ></div>
                  ) : (
                    <span>Upgrade</span>
                  )}
                </button>
              </div>
            ) : null}
          </Col>
        </Row>
      </Container>
      <Container
        style={{
          backgroundColor: "var(--sec-bg)",
          color: "var(--text-color)",
        }}
      >
        <Row className="d-flex justify-content-between align-items-center  p-3 rounded shadow  mt-2">
          <Col sm={2}>
            <FcCollaboration size={60} className="text-warning" />
          </Col>
          <Col sm={10}>
            <Typography className="fs-5 fw-semibold ">
              If you need help, Don't hesitate to contact us!
            </Typography>
            <Typography className="mt-2 text-muted fs-6 fw-normal ">
              contact@surfieethiopia.com
            </Typography>
            <Typography>+251992758586</Typography>
            <Typography>+251911287546</Typography>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{initialValue.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {confirm === "3" ? (
            <div className=" text-center align-items-center justify-content-center h-100  m-auto p-4  mt-3 mb-2">
              <BsCheckCircle size={66} className="text-success m-3" />
              <p>{initialValue.cofirmationtxt}</p>
            </div>
          ) : confirm === "2" ? (
            <div className="p-2 pt-0 pb-3">
              <p className="fw-semibold">{initialValue.cofirmationtxt}</p>
            </div>
          ) : (
            <Form>
              <Row>
                <Col sm={3} className="align-items-center">
                  <p>Current Plan:</p>
                </Col>
                <Col sm={6} className="align-items-center">
                  <p className="primary-text fw-semibold align-items-center">
                    {initialValue.currentPlan} Device License
                  </p>
                </Col>
              </Row>

              <Row>
                <Col sm={3}>
                  <p>{initialValue.updatedInfo}:</p>
                </Col>
                <Col sm={8} className="justify-content-start">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      title="1 License"
                      id="dropdown-basic"
                    >
                      {license} License
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="light">
                      {Licenses.map((license, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={() => setLicense(license.device)}
                        >
                          {license.device} License
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="position-relative  ms-0 rounded  px-2 ps-0 text-start">
            <p className="text-danger text-center pt-2">
              {initialValue.errormsg}
            </p>
          </div>
          <Button variant="light" onClick={handleClose}>
            Back
          </Button>
          {initialValue.operation === "add" ? (
            <Button
              id="primarybtn"
              variant="light"
              className=" border-0"
              onClick={() => AddSubscription()}
            >
              {actionload ? (
                <div
                  class="spinner-border spinner-border-sm text-white"
                  role="status"
                ></div>
              ) : (
                <span>Confirm</span>
              )}
            </Button>
          ) : initialValue.operation === "deactivate" ? (
            <Button variant="danger" onClick={() => Deactivate()}>
              {actionload ? (
                <div
                  class="spinner-border spinner-border-sm text-white"
                  role="status"
                ></div>
              ) : (
                <span>Deactivate</span>
              )}
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert
          onClose={handleSnackClose}
          severity={responseMsg.severity}
          sx={{ width: "100%" }}
        >
          {responseMsg.content}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Dashboard;
