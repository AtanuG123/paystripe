import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './component/Cart';
import Fail from './component/fail';
import Success from './component/test';
function App() {
 

  return (
    <>
      <div className='App'>
       <BrowserRouter>
       <Routes>
          <Route path="/:id" element={<Cart />}></Route>
          <Route path="/success" element={<Success/>}></Route>
          <Route path="/fail" element={<Fail/>}></Route>
     
       </Routes>
       </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
