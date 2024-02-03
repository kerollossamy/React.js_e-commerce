import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites, removeFromFavorites } from "../store/actions/ToggleFavorite";

const CartList = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalPrice = cartItems.reduce((sum, product) => sum + product.price, 0);
    const totalWithTaxes = totalPrice + (totalPrice * 0.1);

    return (
        <Container fluid>
            <h1 className="text-center text-light my-3">
                <b>Shopping Cart</b>
            </h1>
            {cartItems.length === 0 ? (
                <div className="text-center my-2">
                    <h4 className="my-4 text-danger">
                        Your cart is Empty.
                    </h4>
                    <Link to="/products" className="btn btn-outline-info btn-lg my-3">
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
            {cartItems.length > 0 && (
                <div className="text-right mb-5 mt-2">
                    <p className="text-light">
                        <b>Total Price:</b> ${totalPrice.toFixed(2)}
                    </p>
                    <p className="text-light">
                        <b>Taxes:</b> 10%
                    </p>
                    <hr className="text-light" />
                    <h4 className="text-light">
                        <b>Total with Taxes:</b> ${(totalWithTaxes).toFixed(2)}
                    </h4>
                </div>
            )}
        </Container>
    );
};

export default CartList;
