import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/userAuthContext";

const Profile = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="authContainer">
      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <div className="p-4 box mt-3 text-center">
              Hello Welcome <br />
              {user && user.email}
              {user.phoneNumber && user.phoneNumber}
            </div>
            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
