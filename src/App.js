import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageTransition from "./components/PageTransition";

// ✅ Import semua halaman
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";

export default function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div
        className={
          darkMode
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-gray-50 text-black min-h-screen"
        }
      >
        <Navbar
          user={user}
          setUser={setUser}
          cart={cart}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={<Products cart={cart} setCart={setCart} />}
            />
            <Route
              path="/cart"
              element={<Cart cart={cart} setCart={setCart} />}
            />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
          </Routes>
        </PageTransition>
      </div>
    </Router>
  );
}
