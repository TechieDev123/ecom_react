import { Route, Routes } from "react-router-dom";
import Nav from "./nav/Nav";
import Footer from "./nav/Footer";
import Orders from "./routing/Orders";
import Customers from "./routing/Customers";
import Hompage from "./Hompage";
import Cart from "./Cart";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/orders'} element={<Orders />} />
        <Route path={"/customers"} element={<Customers />} />
        <Route path={"/"} element={<Hompage />} />
      </Routes>
      <Footer/>
    </div>    
  );
}

export default App;
