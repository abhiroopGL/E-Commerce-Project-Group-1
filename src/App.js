import "./App.css";
import { ProductProvider } from "./contexts/productContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import ProductDetails from "./Components/ProductDetails";
import Dashboard from "./Components/Dashboard";
import UserDeliveryDetails from "./Components/UserDeliveryDetails";
import { Cart } from "react-bootstrap-icons";
import PrivateRoute from "./Components/PrivateRoute";
import ThanksForShopping from "./Components/ThanksForShopping";
function App() {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/user-delivery-details" element={<UserDeliveryDetails />} />
          <Route path="cart/:id" element={<PrivateRoute> <Cart /></PrivateRoute> }/>
          <Route path="/thanks-for-shopping" element={<ThanksForShopping />} />

        </Routes>
      </ProductProvider>
    </Router>
  );
}
//this is commment
export default App;
