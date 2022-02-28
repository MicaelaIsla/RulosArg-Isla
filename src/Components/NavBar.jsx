import * as React from 'react';
import logo from '../foto.png';
import '../App.css';
import Nosotros from './paginas/Nosotros';
import CartWidget from './CartWidget';
import { Nav, Navbar, Container } from 'react-bootstrap';



function NavBar() {
  return (
<>

  <Navbar bg="dark" variant="dark">
    <Container>
    <CartWidget/>   
    <Nav className="me-auto">
      
      <Nav.Link href="#home">Rulos ARG</Nav.Link>
      <Nav.Link href="#features">Catalogo</Nav.Link>
      <Nav.Link href="#pricing">Precio</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />

 
</>

  );
}

export default NavBar;

