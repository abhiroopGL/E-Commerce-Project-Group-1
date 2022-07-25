import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Display/>
      <ProductList/>
      <Footer/>
    </div>
  );
}
//this is commment
export default App;
