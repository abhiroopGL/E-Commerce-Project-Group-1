import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();

export const ProductProvider = (props) => {

    const [productList, setProductList] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const products = async () => {
            
            await axios.get('https://fakestoreapi.com/products')
                .then((res) => {
                    setProductList(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }

        const searchUsers = async () => {
            await axios.get('https://fakestoreapi.com/users')
                .then((res) => {
                    console.log(res.data);
                    setUsers(res.data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
        }
        products();
        searchUsers();


    }, [])
    const values = {
        productList,
        users,
    }

    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}