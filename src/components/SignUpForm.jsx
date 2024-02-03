import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const [alertVisible, setAlertVisible] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkUsername = (username) => {
    return !/\s/.test(username);
  };

  const checkPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const checkConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 3000);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!newEmail.trim()) {
      setEmailError("This field is required");
    } else if (!checkEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    if (!newName.trim()) {
      setNameError("This field is required");
    } else {
      setNameError("");
    }
  };

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);

    if (!newUsername.trim()) {
      setUsernameError("This field is required");
    } else if (!checkUsername(newUsername)) {
      setUsernameError("Username should not contain spaces");
    } else {
      setUsernameError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (!newPassword.trim()) {
      setPasswordError("This field is required");
    } else if (!checkPassword(newPassword)) {
      setPasswordError(
        "Password should be (more than 8 characters, contain one lowercase, one uppercase, one digit, and one special character)"
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (!newConfirmPassword.trim()) {
      setConfirmPasswordError("This field is required");
    } else if (!checkConfirmPassword(newConfirmPassword)) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !username || !password || !confirmPassword) {
      showAlert();
      return;
    }

    const newUser = { email, name, username, password };
    setUsers([...users, newUser]);
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    const currentUsers = JSON.parse(localStorage.getItem("currentUser")) || [];
    currentUsers.push(name);
    localStorage.setItem("currentUser", JSON.stringify(currentUsers));

    setEmail("");
    setName("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    navigate("/products");
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={8} lg={6} xl={5}>
          {alertVisible && (
            <div className="alert-container">
              <Alert
                className="custom-alert-signup"
                variant="danger"
              >
                <i class="fa-solid fa-circle-exclamation"></i> You must fill all the fields.
              </Alert>
            </div>
          )}
          <Form onSubmit={handleSubmit}>
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
              <Form.Label className="text-light mt-3">Name:</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
                isInvalid={!!nameError}
              />
              <Form.Control.Feedback type="invalid">
                {nameError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-light mt-3">Username:</Form.Label>
              <Form.Control
                type="text"
                value={username}
                onChange={handleUsernameChange}
                isInvalid={!!usernameError}
              />
              <Form.Control.Feedback type="invalid">
                {usernameError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-light mt-3">Password:</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={handlePasswordChange}
                isInvalid={!!passwordError}
              />
              <Form.Control.Feedback type="invalid">
                {passwordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-light mt-3">
                Confirm Password:
              </Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                isInvalid={!!confirmPasswordError}
              />
              <Form.Control.Feedback type="invalid">
                {confirmPasswordError}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              className="my-3"
              variant="primary"
              type="submit"
              disabled={
                !!emailError ||
                !!nameError ||
                !!usernameError ||
                !!passwordError ||
                !!confirmPasswordError
              }
            >
              Sign Up
            </Button>
            <div className="text-light">
              Already have an account?{" "}
              <Link style={{ textDecoration: "none" }} to="/login">
                <b>Log in</b>
              </Link>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
