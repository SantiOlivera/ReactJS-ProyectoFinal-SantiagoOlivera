import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ItemListContainer } from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import { Error404 } from './components/Error404'
import { Contact } from './components/Contact'
import { ItemDetailContainer } from './components/ItemDetailContainer'

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />}/>
          <Route path="*" element={<Error404 />}/>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
