import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BulbLogo from "../assets/logo-bulb.png";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom/dist";

export default function navbar() {
  return (
    <Navbar
      className="align-items-stretch"
      bg="dark"
      variant="dark"
      expand="md"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <Container>
            <img
              src={BulbLogo}
              alt="Fotnia logo"
              className="d-inline-block align-top p-0"
              style={{ borderRadius: "30px", height: "30px", width: "auto" }}
            />
          </Container>
          Fotnia
        </Navbar.Brand>
        <Navbar.Text>Welcome to the Ideas Bazar</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              menuVariant="dark"
              title="Categories"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
                <NavLink
                  to={"/categories/electronics"}
                  className="text-reset text-decoration-none"
                >
                  Electronics
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/categories/jewelry"}
                  className="text-reset text-decoration-none"
                >
                  Jewelry
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/categories/clothing"}
                  className="text-reset text-decoration-none"
                >
                  Clothing
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to={"/catalog"}
              className="text-decoration-none"
            >
              Catalog
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
