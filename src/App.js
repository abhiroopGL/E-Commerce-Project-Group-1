import './App.css';
import Display from './Components/Display';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Display/>
      <ProductList/>
    </div>
  );
}

export default App;
