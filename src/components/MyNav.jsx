import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = (props) => (
  <Navbar style={{ background: "#282c34" }} expand="lg">
    <Container fluid>
      <Navbar.Brand className="fs-5" href="#home" style={{ color: "#fff" }}>
        &#128218; Andrea's bookstore{" "}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ms-auto">
          <Nav.Link style={{ color: "#61DBFB" }} href="#home">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "#fff" }} href="#link">
            About
          </Nav.Link>
          <Nav.Link style={{ color: "#fff" }} href="#link">
            Browse
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
