import React from 'react'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'

export default function NawItemsLeft() {
    return (
        <Nav
            className="me-auto"
        >
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Skills">Skills</Nav.Link>
            <NavDropdown title={
                <span className="my-auto">Works</span>
            } id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/Calculator">
                    Calculator
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/Gallery">
                    Gallery
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/ToDo">
                    ToDo
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/Forum">
                    Forum
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
        </Nav>
    )
}
