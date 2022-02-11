import React from 'react'
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import './Links.css'

const Links = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle  />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link  id='button-link'>XYZ</Nav.Link>
                        <Nav.Link  id='button-link'>XYZ</Nav.Link>
                        <Nav.Link  id='button-link'>XYZ</Nav.Link>
                        <Nav.Link  id='button-link'>XYZ</Nav.Link>
                        <Nav.Link  id='button-link'>XYZ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Links;