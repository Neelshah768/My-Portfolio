import { Navbar, Nav, Container } from "react-bootstrap";
import './Header.css';
const Header = (props) => {
  return (
    <div>
      <Navbar id="navbar" expand="lg">
        <Container>
          <Navbar.Brand><h4 id="text-clr">Neel Shah</h4></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link id="text-clr">Home</Nav.Link>
              <Nav.Link id="text-clr">About</Nav.Link>
              <Nav.Link id="text-clr">Skills</Nav.Link>
              <Nav.Link id="text-clr">Portfolio</Nav.Link>
              <Nav.Link id="text-clr">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
