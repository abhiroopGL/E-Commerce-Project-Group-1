import React, {useContext} from 'react'
import Header from './Header'
import Display from './Display'
import ProductList from './ProductList'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { ProductContext } from '../contexts/productContext'

function Dashboard() {

  const {currentUserId, showSidebar } = useContext(ProductContext);
  console.log("current user is id: " ,currentUserId);
  return (
    <div className="App">
              <Header />
              {
                showSidebar && <Sidebar/>
              }
              <Display />
              <ProductList />
              <Footer />
            </div>
  )
}

export default Dashboard