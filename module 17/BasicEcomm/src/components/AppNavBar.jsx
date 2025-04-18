import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import Helper from "../utiliy/Helper.js";
import {Link, NavLink} from "react-router-dom";
import img from "../assets/image/img.webp";

const AppNavBar = () => {
    
    const logout = () => {
      sessionStorage.clear();
      window.location.href="/";
    }
    
    return (
        <Navbar expand="lg" className="bg-body-tertiary bg-white shadow">
            <Container fluid>
                <Navbar.Brand href="#" >
                    <img src={img} className="nav-logo" alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/"><b>Home</b></NavLink>
                        {
                            Helper.isLogin() &&
                            <NavLink className="nav-link" to="/cart-list">Cart List</NavLink>
                        }

                    </Nav>
                    {
                        Helper.isLogin()? (
                            <button onClick={logout} className="btn btn-danger">Logout</button>
                        ): (<Link className="btn btn-danger" to="/login">Login</Link>)

                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavBar;