import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from 'react-bootstrap/NavItem'
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import insta from './Images/instagram.png'
import github from './Images/github.png'
import linkedin from './Images/linkedin.png'
import email from './Images/email.png'
import MailToaster from './MailToaster'

export default function NavItemsRight() {

    const [show, setShow] = useState(false);
    
    function ClipboardMail(e) {
        const my_email = 'talpalavalo1@gmail.com'
        e.preventDefault();
        navigator.clipboard.writeText(my_email);
        setShow(true);
    }

    return (
        <Nav pullRight>
            <MailToaster show={show} setShow={setShow} />
            <Container>
                <Row className="justify-content-between">
                    <Col>
                        <NavItem>
                            <Link to="https://www.instagram.com/abel_horvath_szarka/" target="_blank">
                                <img className="NavImg" src={insta} alt="Instagram" />
                            </Link>
                        </NavItem>
                    </Col>
                    <Col>
                        <NavItem>
                            <Link to="https://github.com/abelhorvath04" target="_blank">
                                <img className="NavImg" src={github} alt="GitHub" />
                            </Link>
                        </NavItem>
                    </Col>
                    <Col>
                        <NavItem>
                            <Link to="https://www.linkedin.com/in/%C3%A1bel-horv%C3%A1th-szarka-894515258/" target="_blank">
                                <img className="NavImg" src={linkedin} alt="LinkedIn" />
                            </Link>
                        </NavItem>
                    </Col>
                    <Col>
                        <NavItem>
                            <Link to="/" onClick={ClipboardMail}>
                                <img className="NavImg" src={email} alt="Email" />
                            </Link>
                        </NavItem>
                    </Col>
                    <Col>
                        <Button variant="outline-dark">
                            <i className="bi bi-moon-fill"></i>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Nav>
    )
}