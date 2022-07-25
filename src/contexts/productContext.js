import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const ProductContext = createContext();

export const ProductProvider = (props) => {

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
    }, [])

    return (
        <ProductContext.Provider value={productList}>
            {props.children}
        </ProductContext.Provider>
    )
}