import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
function ThanksForShopping() {
    const navigate = useNavigate();
    const handleClick = () =>{
        navigate("/");
    }
  return (
    <div id='thanksLayout'>

<Alert variant="success" style={{padding: "50px", width: "80%"}}>
      <Alert.Heading><h1>Thanks for Shopping with us.</h1></Alert.Heading>
      <p>
        Hope you like our products.
      </p>
      <hr />
      <p className="mb-0">
        Don't forget to give review to our products. Your feeback is our top priority.
      </p>
    </Alert>
    <Button onClick={handleClick}>Continue Shopping</Button>
    </div> 
  );
}

export default ThanksForShopping;