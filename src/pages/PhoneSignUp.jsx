import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Row, Col, InputGroup } from "react-bootstrap";
import "react-phone-number-input/style.css";
import { Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import pathname from "../routes";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const PhoneSignUp = () => {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const getOtp = async (e) => {
    e.preventDefault();
    setError("");
    if (number === "" || number === undefined)
      return setError("¡Por favor ingrese un número de teléfono válido!");
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {});
      const confirmation = await signInWithPhoneNumber(auth, number, recaptcha);
      setResult(confirmation);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const data = await result.confirm(otp);
      console.log(data);
      toast.success("Login with teléfono Successful");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="authContainer">
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <div className="p-4 box">
              <h2 style={{ textAlign: 'center' }}>Iniciar sesión con teléfono</h2>
              <br />
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={getOtp}>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  <PhoneInput
                    defaultCountry="US"
                    value={number}
                    onChange={setNumber}
                    placeholder="Ingresa número telefónico"
                  />
                </Form.Group>
                <div className="button-right">
                  <Link to={pathname.login}>
                    <Button variant="secondary">Cancelar</Button>
                  </Link>
                  &nbsp;
                  <Button type="submit" variant="primary">
                    Enviar OTP
                  </Button>
                </div>
                <div id="recaptcha-container" className="my-4"></div>
              </Form>
              <Form onSubmit={verifyOtp}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter OTP"
                  aria-label="OTP"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
                <div className="button-right">
                  <Button type="submit" variant="success">
                    Verify OTP
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PhoneSignUp;
