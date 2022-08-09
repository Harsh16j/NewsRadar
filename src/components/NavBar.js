import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        {/* <Container style={{ width: "100%" }}> - No need as it centers the navbar*/}
        <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/link">About </Nav.Link>
            <Link className="nav-link" to="/business">
              Business
            </Link>
            <Link className="nav-link" to="/entertainment">
              Entertainment
            </Link>
            <Link className="nav-link" to="/">
              General
            </Link>
            <Link className="nav-link" to="/health">
              Health
            </Link>
            <Link className="nav-link" to="/science">
              Science
            </Link>
            <Link className="nav-link" to="/sports">
              Sports
            </Link>
            <Link className="nav-link" to="/technology">
              Technology
            </Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}
