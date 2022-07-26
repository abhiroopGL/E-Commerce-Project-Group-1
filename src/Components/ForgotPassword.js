import React, { useRef, useState } from "react";
import { Button, Form, Card, Alert, Spinner, Image, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
    const emailRef = useRef();
    // const passwordRef = useRef();
    // const confirmPassRef = useRef();
    // const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    // async function handleSubmit(e) {
    //     e.preventDefault();
    //     // if (passwordRef.current.value !== confirmPassRef.current.value) {
    //     //     return setError('Password do not match!');
    //     // }

    //     try {
    //         setError('');
    //         setMessage('');
    //         setLoading(true);
    //         //   await login(emailRef.current.value, passwordRef.current.value);
    //         await resetPassword(emailRef.current.value)
    //         setMessage('Check your inbox for further instructions.');
    //     } catch {
    //         setError('Failed to reset password.');
    //     }
    //     setLoading(false);
    // }

    const confirmResetHandler = () => {
        setShowModal(!showModal);
    }

    return (
        <>
            {
                loading && <div className="d-flex justify-content-center mt-5"><Spinner
                    style={{ marginBottom: 27 }}
                    animation="border"
                    variant="danger"
                /></div>
            }
            <Modal show={showModal} onHide={() => confirmResetHandler()}>
                <Modal.Header closeButton>Please Confirm to Log Out.</Modal.Header>
                <Modal.Footer>
                    <Button onClick={() => confirmResetHandler()}>Cancel</Button>
                    <Button>Confirm</Button>
                </Modal.Footer>
            </Modal>
            <div className="d-flex justify-content-center my-3">
                <Image
                    style={{ width: '20%', height: '20%' }}
                    src="https://i.ytimg.com/vi/nzdxb4b4tSY/maxresdefault.jpg"
                    alt="forgot Password"
                />
            </div>
            <Card className="m-auto" style={{ maxWidth: '400px' }}>
                <Card.Body>
                    <h2 className="mb-4 text-center">Password Reset</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form>
                        <Form.Group id='email'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type='email'
                                ref={emailRef}
                                required />
                        </Form.Group>
                        <Button className="w-100 mt-3" disabled={loading} onClick={confirmResetHandler}>
                            Reset Password
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to='/login'>Login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    )
}
export default ForgotPassword;