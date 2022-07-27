import './App.css';
import { ProductProvider } from './contexts/productContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
import ProductDetails from './Components/ProductDetails';
import Dashboard from './Components/Dashboard';
import { Cart } from 'react-bootstrap-icons';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path='/' element={
            <Dashboard/>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='cart/:id' element={<Cart.js/>} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}
//this is commment
export default App;
