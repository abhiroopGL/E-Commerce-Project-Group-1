import React, { useRef, useState, useContext } from "react";
import { Button, Form, Card, Alert, Spinner, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/productContext";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

const Login = () => {
  const { users, setCurrentUserId, setCurrentUser, setUsername } = useContext(ProductContext);
  const userEmailArr = users.map((user) => user.email);
  const userPassArr = users.map((user) => user.password);
  const usernameArr = users.map((user) => user.username);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentEmail = emailRef.current.value;
    const currentPass = passwordRef.current.value;
    let indexOfEmail = 0;
    let checkUserEmailFromList = false;
    userEmailArr.filter((item, index) => {

      if (item === currentEmail) {
        indexOfEmail = index;
        return checkUserEmailFromList = true;
      }
    })
    console.log("output filter user", checkUserEmailFromList + ' index is ' + indexOfEmail);
    if (checkUserEmailFromList) {
      setError1(false);
      const checkUserPassFromList = userPassArr[indexOfEmail] === currentPass;
      if (checkUserPassFromList) {
        setError2(false);
        setCurrentUser(currentEmail);
        setCurrentUserId((userEmailArr.indexOf(currentEmail)) + 1);
        setUsername(usernameArr[indexOfEmail]);
        navigate("/");
      } else {
        setError2(true);
      }
    } else {
      setError1(true);
    }
  };
  const [passEye, setPassEye] = useState(false);

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text");
      setPassEye(false);
      return;
    }
    setPasswordType("password");
    setPassEye(true);
  };


  return (
    <>
      {loading && (
        <div className="d-flex justify-content-center mt-5">
          <Spinner
            style={{ marginBottom: 27 }}
            animation="border"
            variant="danger"
          />
        </div>
      )}
      <div className="d-flex justify-content-center my-3">
        <Image
          style={{ width: "20%", height: "20%" }}
          src="https://www.certifiedfinancialguardian.com/images/blog-wp-login.png"
          alt="welcome"
        />
      </div>
      <Card className="m-auto" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <h2 className="mb-4 text-center">Log In</h2>
          {error1 && <Alert variant="danger">Invalid User Email</Alert>}
          {error2 && <Alert variant="danger">Invalid User Passsword</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control type={passwordType} ref={passwordRef} required />
                <div className="input-group-btn">
                  <button
                    className="btn btn-primary"
                    onClick={togglePassword}
                  >
                    {passEye ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
                  </button>
                </div>
              </div>
            </Form.Group>
            <Button className="w-100 mt-3" type="submit" disabled={loading}>
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password ?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
};
export default React.memo(Login);
