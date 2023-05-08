import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import Dropdown from "react-bootstrap/Dropdown";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
import { Typography } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const { SignOut } = React.useContext(AuthContext);

  const userinfo = sessionStorage.getItem("user");
  const user = JSON.parse(userinfo);

  const LogOut = (status) => {
    SignOut(status);
    navigate("/");
  };
  const firstLetter = user.first_name.charAt(0);
  return (
    <Container fluid className="primary-bg  sticky-top  ">
      <Row className="d-flex justify-content-between p-1 ">
        <Col sm={7} className="ms-4">
          <img src={Logo} alt="logo" width="100" height="80" />
        </Col>
        <Col sm={4}>
          <div className="float-end d-flex justify-content-between align-items-center me-3">
            <Typography
              to="/profile"
              className="me-2 text-white fw-semibold text-capitalize p-2"
            >
              {user.first_name} {user.middle_name}
            </Typography>

            <Dropdown className="text-center">
              <Dropdown.Toggle
                variant="white"
                title="Profile"
                id="dropdown-basic"
                className="border-0 primary-bg  text-white fw-medium font-link rounded-circle text-center"
              >
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  className="p-2 bg-white border-dark text-muted"
                >
                  {user.first_name ? firstLetter : "U"}
                </Avatar>
              </Dropdown.Toggle>

              <Dropdown.Menu variant="light" className="">
                <Row className="p-3 pt-0 pb-0">
                  <Typography className="fw-semibold fs-6 primary-text textdec">
                    {user.first_name} {user.middle_name}
                  </Typography>

                  <span>{user.email}</span>
                </Row>
                <hr />

                <Dropdown.Item
                  onClick={() => LogOut("Signout")}
                  className="text-muted"
                >
                  <FaArrowLeft size={16} color="#888" className="me-2" />
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
