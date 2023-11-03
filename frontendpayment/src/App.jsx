import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Cart from "./component/Cart";
import Fail from "./component/fail";
import Success from "./component/test";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Success />}>
      <Route index element={<Fail />} />
      <Route path="/:id" element={<Cart />}></Route>
      <Route path="/success" element={<Success />}></Route>
      <Route path="/fail" element={<Fail />}></Route>
    </Route>
  )
);
function App() {
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/:id" element={<Cart />}></Route>
  //     <Route path="/success" element={<Success />}></Route>
  //     <Route path="/fail" element={<Fail />}></Route>
  //   </Routes>
  // </BrowserRouter>;
  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
