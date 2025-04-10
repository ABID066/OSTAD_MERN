import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            <>
                {['sm'].map((expand) => (
                   <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                          <Container fluid>
                              <Navbar.Brand href="/">Food CRUD</Navbar.Brand>
                              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                              <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                                  <Offcanvas.Header closeButton>
                                      <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                          Food CRUD
                                      </Offcanvas.Title>
                                  </Offcanvas.Header>
                                  <Offcanvas.Body>
                                      <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <NavLink href="/">Home</NavLink>
                                        <Link className="nav-link" to="/createPage">Create Product</Link>
                                      </Nav>
                                  </Offcanvas.Body>
                              </Navbar.Offcanvas>
                          </Container>
                   </Navbar>
                ))}
            </>
        </div>
    );
};

export default NavBar;