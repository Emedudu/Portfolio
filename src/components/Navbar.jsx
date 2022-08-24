import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Me } from "../images";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => setMenuOpen(false);
  return (
    <Navbar bg="light" expand={"sm"} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={Me}
            alt="Me"
            style={{ borderRadius: "50%" }}
            width="64"
            height="64"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-sm`}
          onClick={toggleMenu}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-sm`}
          aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
          placement="end"
          restoreFocus={false}
          show={menuOpen}
          onHide={handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
              Emedev
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" onClick={toggleMenu}>
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to="/skills" onClick={toggleMenu}>
                SKILLS
              </Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={toggleMenu}>
                PROJECTS
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={toggleMenu}>
                CONTACT
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
export default Navigation;
