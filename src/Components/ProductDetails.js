import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import Header from './Header';
import CounterInput from 'react-bootstrap-counter';


import '../App.css'
import { Strava } from 'react-bootstrap-icons';

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
            {/* <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />



            <Container className='p-4' >

                <Card style={{ height: "35rem", width: '48rem', marginLeft: "auto", marginRight: "auto" }}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>

                        <CounterInput value={2} min={1} max={50} onChange={(value) => { setCounter(value); console.log(value) }} />
                    </Card.Body>
                </Card>

            </Container>
            <Container>
                <Table size="sm" bordered={false}>

                    <tbody>

                        <tr>
                            <td><strong>Price</strong></td>
                            <td>{item.price * counter}</td>


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

            </Container> */}
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div style={{display: "flex", justifyContent: "space-around"}}>
                <div >
                    <img src={item.image} />
                </div>
                <div > 
                    <Table bordered={false}>

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
                    <CounterInput value={1} min={1} max={50} onChange={(value) => { setCounter(value); console.log(value) }}  />
                </div>
            </div>
        </>
    )
}

export default ProductDetails;