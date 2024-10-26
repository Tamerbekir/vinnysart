
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../index.css'



export default function NaBar() {


  const [comingSoon, setComingSoon] = useState('')

  const searchBtn = () => {
    setComingSoon('Search not working yet! Coming soon!')
  }

  return (
    <Navbar expand="lg" className="navBar">
      <Container fluid>
        <Navbar.Brand href="#">Vinny's Art</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Work" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/allart">All Art</NavDropdown.Item>
              <NavDropdown.Item href="/graveyardgang">
                Grave Yard Gang
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/anime">
                Anime
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {!comingSoon && (
            <>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button onClick={searchBtn} variant="outline-success">Search</Button>
              </Form>
            </>
          )}
          <p onClick={() => setComingSoon(false)}>{comingSoon}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

