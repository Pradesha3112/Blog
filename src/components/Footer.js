import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer style={{ background: "#4B6587", color: "white", padding: "15px 0", marginTop: "20px" }}>
      <Container className="text-center">
        <p>© 2025 My MicroBlog | Built with React & Bootstrap</p>
      </Container>
    </footer>
  );
};

export default Footer;
