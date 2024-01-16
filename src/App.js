import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.js'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/>}/>
          <Route path="/NewOrder" />
          <Route path="/PendingOrders" />
          <Route path="/OrdersToPay" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
