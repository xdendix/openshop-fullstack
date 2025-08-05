import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const banners = [
    "/images/banner-1.jpg",
    "/images/banner-2.jpg",
    "/images/banner-3.jpg",
  ];
  const [current, setCurrent] = useState(0);

  // 🔄 Auto ganti banner setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative"
    >
      {/* Banner */}
      <div className="relative w-full">
        <img
          src={banners[current]}
          alt="Banner"
          className="w-full h-72 md:h-96 object-cover transition-all duration-700 rounded-lg shadow-lg"
        />

        {/* Overlay teks */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/40">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Belanja Mudah & Modern
          </h1>
          <p className="mt-2 text-base md:text-lg text-gray-200">
            Temukan produk terbaik dengan harga terjangkau
          </p>
          <Link
            to="/products"
            className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg shadow-lg transition"
          >
            Mulai Belanja
          </Link>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, idx) => (
            <div
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                current === idx ? "bg-yellow-400" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
