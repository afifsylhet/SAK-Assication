
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar className='mb-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <Navbar.Brand href="#home">SAK-Assicotion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link href="#features">Mission</Nav.Link>
                            <Nav.Link href="#pricing">Members</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                My Details
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                SAK Details
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigation;