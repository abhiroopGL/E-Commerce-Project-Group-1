import React, { useContext } from "react";
import { Navigate } from 'react-router-dom'
import { ProductContext } from "../contexts/productContext";

function PrivateRoute({ children }) {
    const { currentUser } = useContext(ProductContext);
    if (!currentUser) {
        return <Navigate to='/login' />
    }
    return children;
}
export default PrivateRoute;