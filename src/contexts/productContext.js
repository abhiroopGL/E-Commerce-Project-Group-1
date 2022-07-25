import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'

function ProductContext() {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const products = () => {
            axios.get('https://fakestoreapi.com/products')
                .then((res) => {
                    setProductList(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        products();
    },[])

    return (
        <div id="Card-container">
            {
                productList.map((item) => (
                    <Card key={item.id} style={{ width: '40vh',diplay:'flex',flexDirection:'column', alignItems:'center',marginTop:'3vh'}}>
                        <Card.Img variant="top" src={item.image} style={{height:'35vh',width:'28vh'}} />
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Button variant="primary" style={{display:'flex', flexDirection:'column', justifyContent:'flex-end'}}>Add to Cart</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default ProductContext;