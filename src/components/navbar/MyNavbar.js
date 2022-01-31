import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './MyNavbar.css'
function MyNavbar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
        <>
            <Nav variant="pills" className='MyNavbarContainer p-2' onSelect={handleSelect}>
                <Nav.Item>
                    <Nav.Link className='NavItem' eventKey="1" href="#/home">
                        NavLink 1 content
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" title="Item">
                        NavLink 2 content
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3">
                        NavLink 3 content
                    </Nav.Link>
                </Nav.Item>
                <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </>
    )

}

export default MyNavbar;