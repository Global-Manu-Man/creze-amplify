import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import pathname from "../routes";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      toast.success("Registro exitoso");
      navigate("/");
    } catch (err) {
      setError(err.message);
      toast.error("Error al registrarse, inténtelo de nuevo");
    }
  };

  return (
    <div className="authContainer">
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <div className="p-4 box">
              <h2 style={{ textAlign: 'center' }}>Regístrate</h2>
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button variant="primary" type="Submit">
                    Únete
                  </Button>
                </div>
              </Form>
            </div>
            <div className="p-4 box mt-3 text-center">
            ¿Ya tienes una cuenta? <Link to={pathname.login}>Únete</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Signup;
