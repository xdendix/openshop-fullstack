import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
        </Routes>
      </div>
    </Router>
  );
}

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        OpenShop
      </Link>
      <div className="space-x-4">
        {user ? (
          <>
            <span className="text-gray-700">Hi, {user}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-8 text-center"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Selamat Datang di OpenShop
      </h1>
      <p className="text-gray-600">
        Belanja mudah dengan tampilan modern dan responsif.
      </p>
    </motion.div>
  );
}

function Register({ setUser }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(name);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600">
          Register
        </button>
      </form>
    </div>
  );
}

function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(email.split("@")[0]);
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 rounded"
          required
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
