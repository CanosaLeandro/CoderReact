import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BulbLogo from '../assets/logo-bulb.png'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Container>
            <img
              src={BulbLogo}
              alt="Fotnia logo"
              width="auto"
              height="30"
              className="d-inline-block align-top"
              style={{borderRadius: "30px"}}
            />
          </Container>
          Fotnia</Navbar.Brand>
          <Navbar.Text>Welcome to the Ideas Bazar</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="#home">
                Category 1
              </NavDropdown.Item>
              <NavDropdown.Item href="#home">
                Category 2
              </NavDropdown.Item>
              <NavDropdown.Item href="#home">
                Category 3
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#home">
                All items
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}