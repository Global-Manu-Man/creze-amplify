import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useUserAuth } from "../context/userAuthContext";
import { Link } from "react-router-dom";
import pathname from "../routes";

const ForgetPassword = () => {
  const { resetPassword } = useUserAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sendInfo, setSendInfo] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Por favor introduzca su correo electrónico.");
      return;
    }
    resetPassword(email)
      .then(() => {
        console.log("Correo electrónico de restablecimiento de contraseña enviado.");
        setSendInfo("Correo electrónico de restablecimiento de contraseña enviado.");
        setEmail("");
      })
      .catch((error) => {
        console.error("Error al enviar el correo electrónico para restablecer la contraseña:", error);
        setError("Error al enviar el correo electrónico para restablecer la contraseña, inténtalo de nuevo.s");
        setEmail("");
      });
  };

  return (
    <div className="authContainer">
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <div className="p-4 box">
              <h2 className="mb-3 text-center">Restablecer la contraseña</h2>
              <br />
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleResetPassword}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Introduce tu correo electrónico."
                  />
                </Form.Group>
                <div className="d-grid gap-2 mb-3">
                  <Button variant="primary" type="Submit">
                    Enviar correo electrónico
                  </Button>
                </div>
              </Form>
              {sendInfo && <Alert variant="success">{sendInfo}</Alert>}
            </div>
            <div className="p-4 box mt-3 text-center">
            Volver a la página de inicio de sesión <Link to={pathname.login}>Acceso</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ForgetPassword;
