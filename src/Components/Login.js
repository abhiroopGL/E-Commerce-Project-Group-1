import React, { useRef, useState } from "react";
import { Button, Form, Card, Alert, Spinner, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  // const confirmPassRef = useRef();
  // const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  // const navigate = useNavigate();
  // async function handleSubmit(e) {
  //     e.preventDefault();
  //     // if (passwordRef.current.value !== confirmPassRef.current.value) {
  //     //     return setError('Password do not match!');
  //     // }

  //     try {
  //         setError('');
  //         setLoading(true);
  //         await login(emailRef.current.value, passwordRef.current.value);
  //         navigate('/');
  //     } catch {
  //         setError('Failed to sign in.');
  //     }
  //     setLoading(false);
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [passEye, setPassEye] = useState(false);
  
  const togglePassword = () => {
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
          {error && <Alert variant="danger">{error}</Alert>}
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
                    className="btn btn-outline-primary"
                    onClick={togglePassword}>
                    {passEye? <BsFillEyeFill /> : < BsFillEyeSlashFill />}
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
export default Login;
