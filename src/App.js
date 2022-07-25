import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Header from './Components/Header';
import Header from './Components/Header'
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import ProductContext from './contexts/productContext';

function App() {
  return (
    <div className="App">
      <Header/>
      <Display/>
      <ProductContext/>
      <ProductList/>
      <Footer />
    </div>
  );
}
//this is commment
export default App;
