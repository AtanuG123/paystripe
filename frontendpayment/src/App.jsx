
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
          <Route path="/payvalue/:id" element={<Cart />}/>
          <Route path="/success" element={<Success/>}/>
          <Route path="/fail" element={<Fail/>}/>
       </Routes>
       </BrowserRouter>
      </div>
      
    </>
  );
}

export default App
