import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import { ProductProvider } from './contexts/productContext';

function App() {
  return (
    <ProductProvider>
      <div className="App">
        <Header />
        <Display />
        <ProductList />
        <Footer />
      </div>
    </ProductProvider>
  );
}
//this is commment
export default App;
