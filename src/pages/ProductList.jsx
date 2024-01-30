import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getProducts } from "../store/actions/getProducts";
import { searchProducts } from "../store/actions/searchProducts";
import { getProductsByCategory } from "../store/actions/getProductByCategory";
import { getCategories } from "../store/actions/getCategories";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const categories = useSelector((state) => state.categories.categories);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, [dispatch]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    dispatch(searchProducts(searchQuery));
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category) {
      dispatch(getProductsByCategory(category));
    } else {
      dispatch(getProducts());
    }
  };

  return (
    <Container>
      <h1 className="mt-3 mb-3 text-center text-light">
        <b>Products List</b>
      </h1>
      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="formSearch">
              <Form.Control
                className="custom-input-dark my-2"
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formCategory">
              <Form.Select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="custom-select-dark my-2"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={6} md={4} lg={3} xl={3}>
            <Link
              to={`/products/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card className="mb-4 product-card">
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>Price: ${product.price} </Card.Text>
                  <Card.Text>
                    {product.rating} <i className="fas fa-star"></i>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
