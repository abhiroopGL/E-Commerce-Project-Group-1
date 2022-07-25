import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Header from './Components/Header';
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
