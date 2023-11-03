import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
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
