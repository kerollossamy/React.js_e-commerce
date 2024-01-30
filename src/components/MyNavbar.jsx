import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function MyNavbar() {
  // const favoritesCount = useSelector((state) => state.favorites.favoritesCount || 0);

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Brand className="text-light font-weight-bold" as={Link} to="/">
          <i className="fas fa-shopping-cart"></i> <b>e-commerce</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" as={Link} to="/products">
              Products
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/favorites">
              Favorites
            </Nav.Link>
            {/* {favoritesCount > 0 && (
              <span className='custom-badge my-2 mx-1' >{`${favoritesCount}`}</span>
            )} */}
            <Nav.Link className="text-light" as={Link} to="/cart">
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="text-light" as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link className="text-light" as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
