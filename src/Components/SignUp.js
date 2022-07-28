import React, { useRef, useState } from "react";
import { Button, Form, Card, Alert, Spinner, Image } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            {
                loading && <div className="d-flex justify-content-center mt-5"><Spinner
                    style={{ marginBottom: 27 }}
                    animation="border"
                    variant="danger"
                /></div>
            }
            <div className="d-flex justify-content-center my-3">
                <Image
                    style={{ width: '6%', height: '6%' }}
                    src="https://static.thenounproject.com/png/6478-200.png"
                    alt="welcome"
                />
            </div>
            <Card className="m-auto" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="mb-4 text-center">Sign Up</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={passwordRef}
                                required />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type='password'
                                ref={confirmPassRef}
                                required />
                        </Form.Group>
                        <Button className="w-100 mt-3" type="submit" disabled={loading}>
                            SignUp
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 mb-5">
                Already have an account? <Link to='/login'>Log In</Link>
            </div>
        </>
    )
}
export default SignUp;