import './App.css';
import Display from './Display';
import Nav from './Nav';
import ProductList from './ProductList';
import ProductContext from './contexts/productContext';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Display/>
      <ProductContext/>
      <ProductList/>
    </div>
  );
}

export default App;
