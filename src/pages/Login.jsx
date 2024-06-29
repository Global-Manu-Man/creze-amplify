import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/userAuthContext";
import pathname from "../routes";
import { toast } from "react-toastify";
import  '../pages/Login.module.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      toast.success("Inicio de sesión exitosa");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Acceso fallido. Por favor intente nuevamente");
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
      toast.success("Inicio de sesión exitosa.");
    } catch (error) {
      console.log(error.message);
      toast.error("Acceso fallido. Por favor intente nuevamente.");
    }
  };

  return (
    <div className="authContainer">
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <div className="p-4 box">
            <h2 style={{ textAlign: 'center' }}>Iniciar sesión</h2>
            <br />
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    placeholder="Dirección de correo electrónico"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Link to="/forget-password">
                    <p
                      style={{ fontSize: "14px" }}
                      className="mb-2 cursor-pointer text-primary"
                    >
                      ¿Olvidó su contraseña?
                    </p>
                  </Link>
                </div>
                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Iniciar Sesión
                  </Button>
                </div>
              </Form>
              <hr />
              <div>
                <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
              </div>
              <Link to={pathname.phoneSignup}>
                <div className="d-grid gap-2 mt-3">
                  <Button variant="success" type="Submit">
                    Iniciar sesión con el teléfono
                  </Button>
                </div>
              </Link>
            </div>
            <div className="p-4 box mt-3 text-center">
            ¿No tienes una cuenta? <Link to={pathname.signup}>Únete</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
