import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  Container,
  NavDropdown,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  LinkedIn,
  GitHub,
} from "@material-ui/icons";
import { Link, NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import "./Header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;

  return (
    <Navbar
      expand="lg" 
      sticky="top" 
      className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Container>
          <Nav className="header_left">
            <Nav.Link
              as={NavLink}
              to="/resume"
              className={
                pathName === "/resume" ? "header_link_active" : "header_link"
              }
            >
              Resume
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={
                pathName === "/portfolio" ? "header_link_active" : "header_link"
              }
            >
              Portfolio
            </Nav.Link>
          </Nav>

          <div className="header_right">
            {Object.keys(resumeData.socials).map((key) => (
              <a href={resumeData.socials[key].link} target="_blank">
                {resumeData.socials[key].icon}
              </a>
            ))}
            {/* <CustomButton text={'Hire Me'} icon={<Telegram />} /> */}
          </div>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
