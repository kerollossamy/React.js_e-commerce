import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Card, Col, Row, Image } from "react-bootstrap";
import StarsMeter from "../components/StarMeter";

const ProductsDetails = () => {
  const { productID } = useParams();
  const products = useSelector((state) => state.products.products);

  const product = products.find(
    (product) => product.id === parseInt(productID)
  );

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
          <Image
            className="product-image"
            src={product.thumbnail}
            alt={product.title}
            fluid
          />
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
                  src={image}
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
