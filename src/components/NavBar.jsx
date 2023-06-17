import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BulbLogo from "../assets/logo-bulb.png";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom/dist";

export default function navbar() {
  console.log(process.env.ETSY_API_KEY);
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container fluid>
        <Navbar.Brand href="/">
          <Container>
            <img
              src={BulbLogo}
              alt="Fotnia logo"
              width="auto"
              height="30"
              className="d-inline-block align-top"
              style={{ borderRadius: "30px" }}
            />
          </Container>
          Fotnia
        </Navbar.Brand>
        <Navbar.Text>Welcome to the Ideas Bazar</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink
                to={"/catalog"}
                className="text-reset text-decoration-none"
              >
                Catalog
              </NavLink>
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  to={"/catalog"}
                  className="text-reset text-decoration-none"
                >
                  Electronics
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to={"/catalog"}
                  className="text-reset text-decoration-none"
                >
                  Jewelry
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>All items</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
