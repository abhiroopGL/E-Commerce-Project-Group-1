import React, { useRef, useState,useContext } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { ProductContext } from "../contexts/productContext";

function UserDeliveryDetails() {
const {setUserDetails} = useContext(ProductContext);
  const nameRef = useRef('');
  const mobileNumRef = useRef('');
  const address1Ref = useRef('');
  const address2Ref = useRef('');
  const LandmarkRef = useRef('');
  const cityRef = useRef('');
  const stateRef = useRef('');
  const pincodeRef = useRef('');
  const checkboxRef = useRef('off');
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserDetails({
        name: nameRef.current.value,
        mobile: mobileNumRef.current.value,
        address1: address1Ref.current.value,
        address2: address2Ref.current.value,
        landmark: LandmarkRef.current.value,
        city: cityRef.current.value,
        sate: stateRef.current.value,
        pincode: pincodeRef.current.value,
        cbox: checkboxRef.current.value,
    })
  };
  const validateMobileNumber = (e) => {
    console.log(e.target.value);
    if (typeof e.target.value !== "undefined") {
      var pattern = new RegExp(/^[0-9\b{10}]+$/);
      if (!pattern.test(e.target.value)) {
        setError(true);
      } else if (e.target.value.length != 10) {
        setError(true);
      } else {
        setError(false);
      }
    }
  };
  return (
    <div id="userDetailForm">
      <Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", margin: "30px" }}>
          Please Enter Your Delivery Details
        </h2>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Your Name <span style={{color: "red"}}> *</span></Form.Label>
            <Form.Control ref={nameRef} required type="text" placeholder="Enter Your Full Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Mobile No.<span style={{color: "red"}}> *</span></Form.Label>
            <Form.Control required ref={mobileNumRef}
              onChange={validateMobileNumber}
              type="number"
              placeholder="Enter your Mobile Number"
            />
            {error && <span style={{color: "red", margin: "5px"}}> Please enter a valid mobile number</span>}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address<span style={{color: "red"}}> *</span></Form.Label>
          <Form.Control ref={address1Ref} required placeholder="House no., Street No." />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control ref={address2Ref}placeholder="Apartment, studio, or floor" />
        </Form.Group>
        <Form.Group className="mb-3" as={Col} controlId="formGridLmark">
          <Form.Label>Landmark (Optional)</Form.Label>
          <Form.Control ref={LandmarkRef} type="text" placeholder="Enter Your Landmark" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City<span style={{color: "red"}}> *</span></Form.Label>
            <Form.Control ref={cityRef} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State<span style={{color: "red"}}> *</span></Form.Label>
            <Form.Control ref={stateRef} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Pincode<span style={{color: "red"}}> *</span></Form.Label>
            <Form.Control ref={pincodeRef} required/>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check ref={checkboxRef} type="checkbox" label="Mark as default address" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default React.memo(UserDeliveryDetails);
