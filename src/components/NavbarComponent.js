import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <>
      <Navbar expand="lg" className="sticky-top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" style={{ fontFamily: "Manrope" }}>
              <Link
                to="/"
                className="navbar-brand"
                style={{ fontFamily: "Righteous" }}
              >
                rtn
              </Link>
              <Link className="nav-link" to="/about">
                about
              </Link>
              <Link className="nav-link" to="/projects">
                projects
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
