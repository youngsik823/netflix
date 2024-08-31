import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "../layout/AppLayout.css";

const AppLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const homepageClick = () => {
        navigate('/');
    }

    const moviesClick = () => {
        navigate('/movies');
    }

    return (
        <div>
            <Navbar expand="lg" className="navbar">
                <Container fluid>
                    <Navbar.Brand className="nav-logo">
                        <img className="logo" src="/logo.png" alt="Logo" onClick={homepageClick}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav.Link
                                className={`nav ${location.pathname === '/' ? 'active' : ''}`}
                                onClick={homepageClick}
                            >
                                Home
                            </Nav.Link>
                            <Nav.Link
                                className={`nav ${location.pathname.startsWith('/movies') ? 'active' : ''}`}
                                onClick={moviesClick}
                            >
                                Movies
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className="search-button">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </div>
        
    );
};

export default AppLayout;
