import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./Components";
import Products from "./Primary/Products";
import Main from "./Primary/Main";
import NoPage from "./Primary/NoPage";
import DetailProduct from './Primary/DetailProduct';
import DetailUser from "./Primary/DetailUser";
import { Routes, Route, Link } from "react-router-dom";
import { useMainContext } from "./Context/Context";
import Cart from "./Primary/Cart";
import Profile from "./Primary/Profile";

function App() {
  const [colorNavbar, setColorNavbar] = useState(false);
  const {cart} = useMainContext()

  const changeColor = () => {
    if (window.scrollY >= 30) {
      setColorNavbar(true);
    } else {
      setColorNavbar(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <section>
      <section
        className={`w-full overflow-hidden h-[90px]
      `}
      >
        <div
          className={`ease-in duration-300 ${
            colorNavbar ? "bg-white shadow-md" : "bg-gradient-to-r to-[#f3cbd3] via-yellow-50 from-cyan-200"
          } sm:px-[20px] px-6 fixed top-0 w-full z-[1000] flex justify-center items-center h-[96px]`}
        >
          <div className="xl:max-w-[1280px] w-full">
            <Navbar cart={cart}/>
          </div>
        </div>
      </section>      
      <Routes>
        <Route exact path="*" element={<NoPage />} />
        <Route exact path="/" element={<Main />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/product/:productId" element={<DetailProduct />} />
        <Route exact path="/user/:userId" element={<DetailUser />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
    </section>
  );
}

export default App;
