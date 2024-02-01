import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../store/actions/ToggleFavorite";

const CartList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);

    return (
        <Container fluid>
            <h1 className="text-center text-light my-3">
                <b>Shopping Cart</b>
            </h1>
            {cartItems.length === 0 ? (
                <div className="text-center my-2">
                    <h4 className="my-3 text-danger">
                        Your cart is Empty.
                    </h4>
                    <Link to="/products" className="btn btn-outline-info btn-lg my-2">
                        <b>Browse Products</b>
                    </Link>
                </div>
            ) : (
                <Row>
                    {cartItems.map((product) => (
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
                                <div className="cartItems-icon">
                                    <i
                                        className={`fas fa-heart${cartItems.some(
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
                                            cartItems.some(
                                                (favproduct) => favproduct.id === product.id
                                            )
                                                ? dispatch(removeFromFavorites(product.id))
                                                : dispatch(
                                                    addToFavorites({
                                                        id: product.id,
                                                        thumbnail: product.thumbnail,
                                                        title: product.title,
                                                        rating: product.rating,
                                                        price: product.price
                                                    })
                                                )
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

export default CartList;