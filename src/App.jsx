import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "min-h-screen bg-gray-900 text-white" : "min-h-screen bg-gray-50 text-black"}>
        <Navbar user={user} setUser={setUser} cart={cart} darkMode={darkMode} setDarkMode={setDarkMode} />
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register setUser={setUser} />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          </Routes>
        </PageTransition>
      </div>
    </Router>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function Navbar({ user, setUser, cart, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className={(darkMode ? "bg-gray-800" : "bg-white") + " shadow p-4 flex justify-between items-center transition-colors duration-300"}>
      <Link to="/" className="flex items-center space-x-2">
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="logo" className="w-8 h-8" />
        <span className="text-2xl font-bold text-blue-500">E-Shop</span>
      </Link>
      <div className="space-x-4 flex items-center">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="relative hover:underline">
          Cart ({cart.length})
        </Link>
        {user ? (
          <>
            <span>Hi, {user}</span>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Login</Link>
            <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">Register</Link>
          </>
        )}
        <button onClick={() => setDarkMode(!darkMode)} className="px-3 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500">
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

function Home() {
  const banners = [
    "https://images.unsplash.com/photo-1607083205410-24f01b3b2c7b",
    "https://images.unsplash.com/photo-1515165562835-c3b8e1b4c7b8",
    "https://images.unsplash.com/photo-1585386959984-a4155224a1ad"
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + banners.length) % banners.length);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="relative">
        <img
          src={banners[current]}
          alt="Ecommerce Banner"
          className="w-full h-64 object-cover opacity-80 transition-all duration-500"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl font-bold drop-shadow-lg">Belanja Mudah & Modern</h1>
          <p className="mt-2 text-lg drop-shadow-sm">Temukan produk terbaik dengan harga terjangkau</p>
          <Link to="/products" className="mt-4 px-6 py-2 bg-yellow-400 text-black rounded-lg font-bold hover:bg-yellow-500">
            Mulai Belanja
          </Link>
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full">‹</button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-1 rounded-full">›</button>
      </div>

      <div className="p-8 text-center">
        <img src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" alt="ecommerce" className="mx-auto w-24 h-24 mb-4" />
        <h2 className="text-3xl font-bold mb-2">Selamat Datang di E-Shop</h2>
        <p>Nikmati pengalaman belanja online yang cepat, aman, dan menyenangkan.</p>
      </div>
    </motion.div>
  );
}

// Products, Cart, Register, Login sama seperti sebelumnya (tidak diubah)

export default App;
