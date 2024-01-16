import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/NewOrder" />
          <Route path="/PendingOrders" />
          <Route path="/OrdersToPay" />
        </Routes>
      </BrowserRouter>

  )
}

export default App
