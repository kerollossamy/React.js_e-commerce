import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions/ToggleCart";

function MyNavbar() {
  const dispatch = useDispatch();
  const favoritesCount = useSelector(
    (state) => state.favorites.favoritesCount || 0
  );

  const cartCount = useSelector(
    (state) => state.cart.cartCount || 0
  );

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(clearCart());
    localStorage.setItem("currentUser", JSON.stringify([]));
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="navbar" fixed="top">
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
            {favoritesCount > 0 && (
              <span className="custom-badge my-2">{`${favoritesCount}`}</span>
            )}
            <Nav.Link className="text-light" as={Link} to="/cart">
              Cart
            </Nav.Link>
            {cartCount > 0 && (
              <span className="custom-badge my-2">{`${cartCount}`}</span>
            )}
          </Nav>
          <Nav className="ml-auto">
            {currentUser.length > 0 ? (
              <>
                <Nav.Link className="text-light" as={Link} to="/">
                  Welcome, {currentUser[0]}
                </Nav.Link>
                <Nav.Link className="text-light" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="text-light" as={Link} to="/login">
                  Log in
                </Nav.Link>
                <Nav.Link className="text-light" as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
