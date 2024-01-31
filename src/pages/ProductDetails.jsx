import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Card, Col, Row, Image } from "react-bootstrap";
import StarsMeter from "../components/StarMeter";
import {
  addToFavorites,
  removeFromFavorites,
} from "../store/actions/ToggleFavorite";

const ProductsDetails = () => {
  const { productID } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const favorites = useSelector((state) => state.favorites.favorites);

  const product = products.find(
    (product) => product.id === parseInt(productID)
  );

  const isFavorite = favorites.some(
    (favProduct) => favProduct.id === product.id
  );

  const handleFavoritesClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(
        addToFavorites({
          id: product.id,
          thumbnail: product.thumbnail,
          title: product.title,
          rating: product.rating,
        })
      );
    }
  };

  if (!product) {
    return (
      <>
        <h1 className="m-5 text-center text-danger">Product not found</h1>
      </>
    );
  }

  return (
    <Container fluid className="my-4 product-container p-4">
      <Row>
        <Col
          md={6}
          className="d-flex align-items-center justify-content-center"
        >
          <div className="position-relative">
            <Image
              className="product-image"
              src={
                product.thumbnail ||
                `${process.env.PUBLIC_URL}/image-notfound.jpg`
              }
              alt={product.title}
              fluid
            />
            <div
              className="favorites-icon"
              onClick={handleFavoritesClick}
              style={{
                position: "absolute",
                top: "15px",
                right: "15px",
                cursor: "pointer",
                fontSize: "2rem",
                color: isFavorite ? "#dc3545" : "#dc3545",
              }}
            >
              <i className={`fas fa-heart${isFavorite ? "" : "-broken"}`}></i>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <Card className="bg-dark text-light px-2">
            <Card.Body>
              <Card.Title className="display-5 mb-4">
                {product.title}
              </Card.Title>
              <Card.Text className="mb-3">
                <b>Description:</b> {product.description}
              </Card.Text>
              <Card.Text className="mb-3">
                <b>Price:</b> ${product.price}
              </Card.Text>
              <Card.Text className="mb-3">
                <b>Discount:</b> {product.discountPercentage}%
              </Card.Text>
              <Card.Text className="mb-3">
                <b>Rating:</b> {product.rating}
              </Card.Text>
              <Card.Text className="mb-3">
                <StarsMeter vote={product.rating} />
              </Card.Text>
              <Card.Text className="mb-3">
                <b>Stock:</b> {product.stock}
              </Card.Text>
              <Card.Text className="mb-3">
                <b>Brand:</b> {product.brand}
              </Card.Text>
              <Card.Text className="mb-3">
                <b>Category:</b> {product.category}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="m-4">
        <Col>
          <h2 className="mb-3 text-light">
            <b>Additional Images</b>
          </h2>
          <Row>
            {product.images.map((image, index) => (
              <Col className="mb-3" key={index} md={4}>
                <Image
                  className="productimage"
                  src={image || `${process.env.PUBLIC_URL}/image-notfound.jpg`}
                  alt={`Image ${index + 1}`}
                  fluid
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDetails;
