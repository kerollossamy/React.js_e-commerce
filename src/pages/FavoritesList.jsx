import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavorites } from "../store/actions/ToggleFavorite";

const FavoritesList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  return (
    <Container fluid>
      <h1 className="text-center text-light my-3">
        <b>Favorite Products</b>
      </h1>
      {favorites.length === 0 ? (
        <div className="text-center my-2">
          <h4 className="my-3 text-danger">
            Oh no, Your Favorites List is Empty.
          </h4>
          <Link to="/products" className="btn btn-outline-info btn-lg my-2">
            <b>Browse Products</b>
          </Link>
        </div>
      ) : (
        <Row>
          {favorites.map((product) => (
            <Col key={product.id} sm={6} md={4} lg={3} xl={3}>
              <Card className="mb-4 product-card">
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card.Img
                    variant="top"
                    src={
                      product.thumbnail ||
                      `${process.env.PUBLIC_URL}/image-notfound.jpg`
                    }
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
                <div className="favorites-icon">
                  <i
                    className={`fas fa-heart${favorites.some(
                      (favproduct) => favproduct.id === product.id
                    )
                      ? " text-danger"
                      : "-broken text-danger"
                      }`}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      fontSize: "2rem",
                    }}
                    onClick={() =>
                      favorites.some(
                        (favproduct) => favproduct.id === product.id
                      )
                      && dispatch(removeFromFavorites(product.id))
                    }
                  ></i>
                </div>
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price} </Card.Text>
                  <Card.Text>
                    {product.rating} <i className="fas fa-star"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default FavoritesList;
