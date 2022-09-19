import React from 'react';
import Logo from '../logo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navegador() {
  return (
    <Navbar  className=" fs-4  position-static" bg="light" expand="lg">
      <Container fluid >
      

        <Navbar.Brand href="#"><img src={Logo} className="d-inline-block align-top" alt="logo"/></Navbar.Brand>
        
        <Navbar.Toggle  aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll" >
            <Nav
            className="me-auto my-2 my-lg-0 text-light"
            style={{ maxHeight: '100px'}}
            navbarScroll
          
          >
            <Nav.Link className="text-success" href="#acercade">Filosofia</Nav.Link>
            <NavDropdown title="Salud y Belleza" id="navbarScrollingDropdown " ClassName="dropdown-link-color">
              <NavDropdown.Item href="#action3">Belleza Natural</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Herbolario
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Socio
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Ropa y calzado" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Moda Ecofrendly</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Bazar Revowitch
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Galeria
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Socios
            </Nav.Link>
            <Nav.Link className="text-success" href="#action2">Espacios</Nav.Link>
          </Nav>
          
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Como hacer que..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;
