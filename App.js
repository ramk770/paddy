import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Product from "./component/Product";
import Sign from "./component/Sign";
import Order from "./component/Order";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Order" element={<Order />}/>
      <Route path="/Contact" element={<Contact />}/>
      <Route path="/Product" element={<Product />}/>
      <Route path="/Sign" element={<Sign />}/>
    </Routes>
    </BrowserRouter>

   
  );
}

export default App;
