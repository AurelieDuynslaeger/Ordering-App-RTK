import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'
import ShowOrders from './pages/ShowOrders.js'
import NewOrder from './pages/NewOrder.js'
import OrdersPayment from './pages/OrdersPayment.js'


const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/NewOrder/:id" element= {<NewOrder/>}/>
          <Route path="/PendingOrders" element={<ShowOrders/>}/>
          <Route path="/OrdersToPay" element={<OrdersPayment/>}/>
        </Routes>
      </BrowserRouter>

  )
}

export default App
