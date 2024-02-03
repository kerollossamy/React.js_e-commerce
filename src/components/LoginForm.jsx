import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!validatePassword(newPassword)) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  const onSubmitFunc = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find((user) => user.email === email && user.password === password);

    if (foundUser) {
      const currentUsers = JSON.parse(localStorage.getItem("currentUser")) || [];
      currentUsers.push(foundUser.name);
      localStorage.setItem("currentUser", JSON.stringify(currentUsers));

      navigate("/products");

    } else {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 3000);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={8} lg={6} xl={5}>
          {alertVisible && (
            <div className="alert-container">
              <Alert
                variant="danger" className="custom-alert-signin"
              >
                Invalid Information. If you don't have an account, please sign up first.
              </Alert>
            </div>
          )}
          <Form onSubmit={onSubmitFunc}>
            <Form.Group>
              <Form.Label className="text-light mt-3">Email:</Form.Label>
              <Form.Control
                type="text"
                value={email}
                onChange={handleEmailChange}
                isInvalid={!!emailError}
              />
              <Form.Control.Feedback type="invalid">
                {emailError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-light mt-3">Password:</Form.Label>
              <Form.Control
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!passwordError}
              />
              <Button
                className={
                  showPassword ? "btn btn-success mt-2" : "btn btn-danger mt-2"
                }
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
                {showPassword ? " Hide Password" : " Show Password"}
              </Button>
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="my-3"
              variant="primary"
              type="submit"
              disabled={!!emailError || !!passwordError || email === "" || password === ""}
            >
              Login
            </Button>
            <div className="text-light">
              Don't have an account? <Link style={{ textDecoration: "none" }} to="/signup"><b>Sign Up</b></Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
