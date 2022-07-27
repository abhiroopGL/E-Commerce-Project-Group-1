import React, { useContext } from 'react'
import Table from 'react-bootstrap/Table';
import {ProductContext} from '../contexts/productContext'

function Invoice() {
    const { userDetails, cartProducts } = useContext(ProductContext);
    return (
        <div className='w-50 h-75 m-auto'>
            <h3>MyShop</h3>
            <div>
                <p>1561 Appleview Town<br/>Bakers Street<br/>Chicago</p>
            </div>
            <br/>
            <h5>Bill To:</h5>
            <p>{userDetails.name}</p>
            <p>{userDetails.mobile}</p>
            <p>{userDetails.address1}</p>
            <p>{userDetails.city}, {userDetails.state}, {userDetails.pincode}</p>
            <div>
                <h5>Invoice Date:</h5>
                <p>{Date}</p>
            </div>
            <Table>
                <thead>
                    <th colspan='3'>Description</th>
                    <th>Unit Price</th>
                    <th>Amount</th>
                </thead>

                <tbody>
                    {
                        cartProducts.map((item)=>console.warn(item.id))
                    }
                </tbody>
            </Table>
            <caption>Total</caption>
            <p>Thank you for your business.</p>

            <footer>
                <h5>Payment Options</h5>
                <p>Bank Account: 7102318318419, Bank of Chicago<br/>Paypal email address: payment@myshop.com</p>
            </footer>
        </div>
    )
}

export default Invoice