import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default class NavBar extends Component {
  render() {
    return (
      
        <Navbar bg="light" expand="lg">
            
      {/* <Container style={{ width: "100%" }}> - No need as it centers the navbar*/}
        <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link> 
            <Nav.Link href="#link">business</Nav.Link> 
            <Nav.Link href="#link">entertainment</Nav.Link> 
            <Nav.Link href="#link">general</Nav.Link> 
            <Nav.Link href="#link">health</Nav.Link> 
            <Nav.Link href="#link">science</Nav.Link> 
            <Nav.Link href="#link">sports</Nav.Link> 
            <Nav.Link href="#link">technology</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
      
    )
  }
}
