import React from 'react';
import './Menubar.css';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaLocationDot,FaUserTie } from "react-icons/fa6";



const Menubaritem =styled.div`
    border-bottom: 3px solid #13859738;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;
const Icon =styled.h2`
    padding: 0 10px;
    font-size: 20px;
    color: #138597;
`;
function Menubar() {
  return (
    <Menubaritem className="bg-body-tertiary">
             <Navbar expand="lg" >
                <Container >
                    <Navbar.Brand href="#">Ca<span>R</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/Services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/Gallery">Gallery</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact us</Nav.Link>
                        {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                        </NavDropdown> */}
                       
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Icon> <FaLocationDot /></Icon>
                        <Icon> <FaUserTie /></Icon>
                    </Form>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
    </Menubaritem>
  )
}

export default Menubar