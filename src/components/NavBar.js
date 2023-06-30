import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./navbar.css";

export default function NavBar() {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            fixed="top"
            style={{ backgroundColor: "#00898A" }}
            // bg="#00898A"
            data-bs-theme="dark"
        >
            {/* <Container style={{ width: "100%" }}> - No need as it centers the navbar*/}
            <Container fluid>
                <Navbar.Brand>
                    <Link to="/" className="nav-link">
                        NewsRadar
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        {/* <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/link">About </Nav.Link> */}
                        <Link className="nav-link" to="/">
                            General
                        </Link>
                        <Link className="nav-link" to="/business">
                            Business
                        </Link>
                        <Link className="nav-link" to="/entertainment">
                            Entertainment
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
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
                {/* </Container> */}
            </Container>
        </Navbar>
    );
}

// export default class NavBar extends Component {
//   render() {
//     return (
//       <Navbar bg="light" expand="lg">
//         {/* <Container style={{ width: "100%" }}> - No need as it centers the navbar*/}
//         <Navbar.Brand href="#home">NewsMonkey</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="/home">Home</Nav.Link>
//             <Nav.Link href="/link">About </Nav.Link>
//             <Link className="nav-link" to="/business">
//               Business
//             </Link>
//             <Link className="nav-link" to="/entertainment">
//               Entertainment
//             </Link>
//             <Link className="nav-link" to="/">
//               General
//             </Link>
//             <Link className="nav-link" to="/health">
//               Health
//             </Link>
//             <Link className="nav-link" to="/science">
//               Science
//             </Link>
//             <Link className="nav-link" to="/sports">
//               Sports
//             </Link>
//             <Link className="nav-link" to="/technology">
//               Technology
//             </Link>
//           </Nav>
//         </Navbar.Collapse>
//         {/* </Container> */}
//       </Navbar>
//     );
//   }
// }
