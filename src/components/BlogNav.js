import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

const BlogNav = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "#4B6587" }} variant="dark">
      <Container>
        <Navbar.Brand href="#home">🌐 My MicroBlog</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#create">Create Post</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNav;
