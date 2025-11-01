import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { NavBar } from './components/NavBar/NavBar'
import { Error404 } from './components/Error404'
import { Contact } from './components/Contact'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from "./context/CartContext"
import { Cart } from './components/Cart/Cart'

import './App.css'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />}/>
            <Route path="/detail/:id" element={<ItemDetailContainer />}/>
            <Route path="*" element={<Error404 />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>  
    </>
  )
}

export default App
