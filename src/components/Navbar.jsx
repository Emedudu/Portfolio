import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Me from "../images/me.jpg";

const Navigation=()=>{
    const [expanded, setExpanded] = useState(false);
    return(
      // style={{'backgroundImage': 'linear-gradient(to right,rgba(255,255,255,0.7),rgba(0,200,0,0.2))'}}
        <Navbar expanded={expanded} collapseOnSelect expand="lg" variant="light" sticky='top'>
          <Container>
            <Navbar.Brand href="#home"><img src={Me} alt="Me" style={{borderRadius: '50%'}} width="48" height="48"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to='/' onClick={() => setExpanded(false)}>HOME</Nav.Link>
                <Nav.Link as={Link} to='/projects' onClick={() => setExpanded(false)}>PROJECTS</Nav.Link>
                <Nav.Link as={Link} to='/contact' onClick={() => setExpanded(false)}>CONTACT</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    )

}
export default Navigation;