import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import { ProductProvider } from './contexts/productContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ForgotPassword from './Components/ForgotPassword';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Routes>
          <Route path='/' element={
            <div className="App">
              <Header />
              <Display />
              <ProductList />
              <Footer />
            </div>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </ProductProvider>
    </Router>
  );
}
//this is commment
export default App;
