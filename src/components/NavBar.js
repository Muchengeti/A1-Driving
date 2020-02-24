import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


class NavBar extends Component {
  render() {
    return (
        <div>
            <Navbar style={{backgroundColor:"slategray"}} variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src="logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                A1 Driving School
                </Navbar.Brand>
                <Nav className="justify-content-center">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/About">About</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
  }
}

export default NavBar;