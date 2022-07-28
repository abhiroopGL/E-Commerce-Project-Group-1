import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();


export const ProductProvider = (props) => {

    const [productList, setProductList] = useState([]);
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null)
    const [userDetails, setUserDetails] = useState({})
    const [currentUserId, setCurrentUserId] = useState(null);
    const [showSidebar, setShowSidebar] = useState(false);
    const [cartProducts, setCartProducts] = useState([]);
    const [checkOut, setCheckOut] = useState(false);
    const [username, setUsername] = useState(null);
    const filledArray = Array(20).fill(1);
    const [counter, setCounter] = useState(filledArray);


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
        showSidebar,
        setShowSidebar,
        currentUserId,
        setCurrentUserId,
        setUserDetails,
        cartProducts,
        setCartProducts,
        setCurrentUser,
        currentUser,
        userDetails,
        checkOut,
        setCheckOut,
        username,
        setUsername,
        counter,
        setCounter
    }

    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}