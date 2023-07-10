import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import newsLogo from "../news_logo_2.png";

export default function NavBar({
    query,
    setQuery,
    categories,
    countries,
    countryCodes,
    selectedCountryIndex,
    setSelectedCountryIndex,
}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            // sticky="top"
            fixed="top"
            style={{ backgroundColor: "#00898A" }}
            // bg="#00898A"
            data-bs-theme="dark"
            // expanded prop specifies if the navbar will be in expanded state or not
            // onToggle function will called everytime the the navbar will be either expanded or collapsed
            expanded={expanded}
            onToggle={() => {
                setExpanded((expanded) => {
                    return !expanded;
                });
            }}
        >
            {/* <Container style={{ width: "100%" }}> - No need as it centers the navbar*/}
            <Container fluid>
                <Navbar.Brand className="app-title">
                    <img
                        src={newsLogo}
                        alt=""
                        style={{
                            height: "40px",
                            width: "40px",
                            marginRight: "5px",
                        }}
                    />
                    {/* <Link to="/" className="nav-link"> */}
                    NewsRadar
                    {/* </Link> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "200px" }}
                        navbarScroll
                    >
                        {/* <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/link">About </Nav.Link> */}
                        {/*Old way: In place of the above tag from bootstrap, nav-link is used as the classname to inherit all the CSS properties from bootstrap */}
                        {/* New way: https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together */}
                        {categories.map((category) => {
                            return (
                                <Nav.Link
                                    as={Link}
                                    key={category}
                                    to={
                                        category === "general"
                                            ? "/"
                                            : `/${category}`
                                    }
                                    onClick={() => {
                                        if (expanded) {
                                            setExpanded(false);
                                        }
                                    }}
                                >
                                    {category.charAt(0).toUpperCase() +
                                        category.slice(1)}
                                </Nav.Link>
                            );
                        })}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                        />
                        <Dropdown align="end" className="dropdown-btn">
                            <Dropdown.Toggle
                                id="dropdown-button-dark-example1"
                                variant="secondary"
                                style={{
                                    backgroundColor: "#00898A",
                                    color: "white",
                                    borderColor: "black",
                                }}
                            >
                                {countries[selectedCountryIndex]}
                            </Dropdown.Toggle>

                            <Dropdown.Menu
                                style={{
                                    marginTop: "8px", // 8px is the exact gap between selectCountry box and navbar bottom edge
                                    height: "300px",
                                    overflowY: "auto",
                                }}
                            >
                                {countries.map((country, index) => {
                                    if (index === selectedCountryIndex) {
                                        return <span key={country}></span>;
                                    }
                                    return (
                                        <Dropdown.Item
                                            key={country}
                                            className="countriesList"
                                            onClick={() => {
                                                setSelectedCountryIndex(index);
                                            }}
                                        >
                                            {country}
                                        </Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>
                        </Dropdown>
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
