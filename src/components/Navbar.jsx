import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ user, setUser, cart, darkMode, setDarkMode }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav
      className={
        (darkMode ? "bg-gray-800" : "bg-white") +
        " shadow p-4 flex justify-between items-center"
      }
    >
      <Link to="/" className="flex items-center space-x-2">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
          alt="logo"
          className="w-8 h-8"
        />
        <span className="text-2xl font-bold text-blue-500">OpenShop</span>
      </Link>
      <div className="space-x-4 flex items-center">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
        {user ? (
          <>
            <span>Hi, {user}</span>
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
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-2 bg-yellow-400 rounded-lg hover:bg-yellow-500"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
