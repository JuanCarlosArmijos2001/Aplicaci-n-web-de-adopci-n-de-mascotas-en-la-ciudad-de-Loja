import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Encabezado() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Adopta una mascota</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#inicio">Inicio</Nav.Link>
          <Nav.Link href="#mascotas">Mascotas</Nav.Link>
          <Nav.Link href="#contacto">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Encabezado;
