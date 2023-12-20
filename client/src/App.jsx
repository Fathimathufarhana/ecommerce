import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./Product.jsx"
import Register from "./Register.jsx"
import Login from "./Login.jsx"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<Product/>}/>
    </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
