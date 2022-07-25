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
      <Footer />
    </div>
  );
}
//this is commment
export default App;
