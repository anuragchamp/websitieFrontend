import React from 'react';
import './Title.css'
import logo from '../logo.png';

import { Navbar, Container } from 'react-bootstrap';

function Title() {
    return (
        <>
            <Navbar bg="white" >
                <Container fluid>
                    <Navbar.Brand className='p-2' href="#home">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{ fontSize: '1.4em' }}>Stock Smokers</span>

                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Title;