import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import logo from '../../img/logoNav.jpeg'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
            <Container fluid>
                <Navbar.Brand 
                    href="/">
                        <img 
                            className="logo-style"
                            src={logo} 
                            alt="Imagen Logo Ruluda" 
                        />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 container"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" className="nav-item">Home</Nav.Link>
                        <Nav.Link href="/" className="nav-item">Productos</Nav.Link>                        
                       
                    </Nav>
                    <Form className="d-flex">
                       
                      
                        <CartWidget />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;