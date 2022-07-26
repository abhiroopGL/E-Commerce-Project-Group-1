import './App.css';
import { ProductProvider } from './contexts/productContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';
<<<<<<< HEAD
import ProductDetails from './Components/ProductDetails';
=======
import Dashboard from './Components/Dashboard';
>>>>>>> 005bb3b066ade55bc8737479738cae68e1b3538e

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
        </Routes>
      </ProductProvider>
    </Router>
  );
}
//this is commment
export default App;
