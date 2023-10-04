import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';


function Navbars() {
    const counter = useSelector(state => state.counter.counter_val)
  return (
    <Navbar expand="lg" className="bg-body-tertiary m-5 p-5">
      <Container>
        {/* <NavLink className='navigations navbar-brand' style={({isActive}) => {return {fontWeight: isActive ? "bold" : "",color: isActive ? "green": contextTheme == "dark" ? "white" : "black"};}} to='/'>Product App</NavLink> */}
        <Navbar.Brand href="#home">Electronic Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
              Products
            </Link>
            <NavLink
              className="navigations nav-link"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive,
                  // ? "green"
                  // : contextTheme == "dark"
                  // ? "white"
                  // : "black",
                };
              }}
              to="/Register"
            >
              Register
            </NavLink>
            <NavLink
              className="navigations nav-link"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive,
                  // ? "green"
                  // : contextTheme == "dark"
                  // ? "white"
                  // : "black",
                };
              }}
              to="/Login"
            >
              Login
            </NavLink>
            <NavLink
              className="navigations nav-link"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive,
                  // ? "green"
                  // : contextTheme == "dark"
                  // ? "white"
                  // : "black",
                };
              }}
              to="/cart"
            >
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" > {counter}
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
