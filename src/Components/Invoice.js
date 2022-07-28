import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/productContext";

function Invoice() {
  const { userDetails, cartProducts } = useContext(ProductContext);
  const date = new Date();
  let count = 0;
  const navigate = useNavigate();
  return (
    <div
      className="w-50 h-75 m-auto p-3 mt-5 mb-5"
      style={{ border: "2px solid grey" }}
    >
      <h3>MyShop</h3>
      <div>
        <p>
          15/61, Appleview Town
          <br />
          Whitefield, Bengaluru
          <br /> Karnataka, 560086
        </p>
      </div>
      <br />
      <h5>Bill To:</h5>
      <p>
        Mr. {userDetails.name}
        <br />
        {userDetails.mobile}
        <br />
        {userDetails.address1},<br />
        {userDetails.city}, {userDetails.state}, {userDetails.pincode}
      </p>
      <div>
        <p>
          <h5>Invoice Date:</h5> {date.toDateString()}
        </p>
      </div>
      <Table>
        <thead>
          <th colspan="3">Description</th>
          <th>Price</th>
        </thead>

        <tbody>
          {cartProducts.map((item, index) => {
            count += item.price;
            return (
              <tr key={index}>
                <td colspan="3">{item.title}</td>
                <td>₹ {item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <p>Total amount: ₹ {count}</p>
      <hr />
      <p>Thank you for shopping with us.</p>
      <Button
        onClick={() => {
          navigate("/thanks-for-shopping");
        }}
        variant="success"
      >
        Click here to proceed for Payment
      </Button>
    </div>
  );
}
export default Invoice;
