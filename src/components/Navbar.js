import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Surfie from "../assets/surfie.png";
import React from "react";
import { NavLink } from "react-router-dom";
import { NavItem, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";


const Navbars = () => {


  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState(localStorage.getItem("lang") === 'en' ? "🇺🇸 English" : "🇪🇹 Amharic");
  
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const changeLang=(country, title)=>{

    changeLanguage(country);
    localStorage.setItem("lang", country);
    setLang(title);
  };

  return (
    <Navbar className="navbar colored blur" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <img
            className=" ms-4 "
            src={Surfie}
            alt="Surfie"
            width="90px"
            height="43px"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse className="  m-auto align-center">
          <Nav className="me-auto my-2 my-lg-0 ">
            <NavItem>
              <NavLink className=" nav-link ps-5 "></NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/" className=" text-white nav-link ps-5 ">
                {t('Home')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/features" className="nav-link text-white ps-5">
                {t('Features')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/pricing" className="nav-link text-white ps-5">
                {t('Pricing')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" className="nav-link text-white ps-5">
                {t('About Us')}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" className="nav-link pb-3 text-white ps-5">
                {t('Contact us')}
              </NavLink>
            </NavItem>
          </Nav>
          <NavDropdown title= {t(lang)} id="nav-dropdown">
          
            <NavDropdown.Item
              eventKey="4.2"
              onClick={() => changeLang("en","🇺🇸 English")}
            >
              {t("🇺🇸 English")}
            </NavDropdown.Item>
            <NavDropdown.Item
              eventKey="4.3"
              onClick={() =>  changeLang("am","🇪🇹 Amharic")}
            >
              {t("🇪🇹 Amharic")}
            </NavDropdown.Item>
          </NavDropdown>

          {/* <NavItem>
            <NavLink to="/" className="nav-link ps-4 me-3">
              Signin
            </NavLink>
          </NavItem> */}

          <NavLink
            to="/account"
            className="mx-3  px-4 button btn btn-outline-light get"
          >
            {t("Get started")}
          </NavLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbars;
