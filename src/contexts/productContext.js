import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();
    

export const ProductProvider = (props) => {

    const [productList, setProductList] = useState([]);
    const [users, setUsers] = useState([]);
<<<<<<< HEAD
    const [currentUser, setCurrentUser ] = useState(null)
=======
    const [currentUserId, setCurrentUserId] = useState(null);
>>>>>>> c4f2c161d177a3b63d50cd56633a97de4b3a1595
    const [showSidebar,setShowSidebar] = useState(false);


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
<<<<<<< HEAD
        currentUser,
        setCurrentUser,
=======
        currentUserId,
        setCurrentUserId
>>>>>>> c4f2c161d177a3b63d50cd56633a97de4b3a1595
    }

    return (
        <ProductContext.Provider value={values}>
            {props.children}
        </ProductContext.Provider>
    )
}