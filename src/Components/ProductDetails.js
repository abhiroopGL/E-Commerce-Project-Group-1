import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import CounterInput from 'react-bootstrap-counter';
import Table from 'react-bootstrap/Table';

import '../App.css'

function ProductDetails() {
    const { id } = useParams();
    const [item, setItem] = useState();
    const [counter, setCounter] = useState(1);
    console.log(id, "id")
    useEffect(() => {
        const fetchItem = async () => {
            const item = await fetch(
                `https://fakestoreapi.com/products/${id}`
            );
            const data = await item.json();
            console.log(data);
            setItem(data);
        };
        fetchItem();
    }, []);


    return (
        item && <>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div style={{ display: "flex", justifyContent: "space-around" }} className='mx-5 mt-5'>
                <div>
                    <img
                        style={{ maxWidth: '400px', maxHeight: '400px' }}
                        src={item.image} />
                </div>
                <div style={{ maxWidth: '700px' }}>
                    <Table>

                        <tbody>

                            <tr>
                                <td><strong>Price</strong></td>
                                <td>&#8377;{item.price * counter}</td>


                            </tr>
                            <tr>
                                <td><strong>Category</strong></td>
                                <td>{item.category}</td>


                            </tr>
                            <tr>
                                <td><strong>Description</strong></td>
                                <td>{item.description}</td>
                            </tr>


                        </tbody>
                    </Table>
                    <div>
<<<<<<< HEAD
                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{item.rating.rate} ★	</span></p>
                        <div className='w-25'>
                            <CounterInput value={1} min={1} max={50} onChange={(value) => { setCounter(value); console.log(value) }} />
                        </div>
=======
                    <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{item.rating.rate} ★	</span></p>
                    <div className='w-25'>
                    <strong> Quantity:</strong> <CounterInput value={1} min={1} max={50} onChange={(value) => {setCounter(value)}} />
                    </div>
>>>>>>> 7d885aa735a7079e5c79623c7fd228ff5028b66d
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails;