
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminLayout from './components/AdminLayouts'
import Dashboard from './pages/Admin/Dashboard'
import Add from './pages/Admin/Add'
import TableMedicine from './pages/Admin/Table'
import ClientLayout from './components/ClientLayouts'
import Home from './pages/Client/Home'
import Details from './pages/Client/Details'
import Favorite from './pages/Client/Favorite'
import Basket from './pages/Client/Basket'
import Contact from './pages/Client/Contacts'
import NotFound from './pages/Client/NotFound'
import Shop from './pages/Client/Shop'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='shop/details/:id' element={<Details />} />
          <Route path='favorite' element={<Favorite />} />
          <Route path='basket' element={<Basket />} />
          <Route path='contact' element={<Contact />} />
          <Route path='shop' element={<Shop />} />
          <Route index element={<Home />} />
        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='add' element={<Add />} />
          <Route path='table' element={<TableMedicine />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
