export default function Products({ cart, setCart }) {
  const products = [
    { id: 1, name: "Produk A", price: 100000 },
    { id: 2, name: "Produk B", price: 150000 },
    { id: 3, name: "Produk C", price: 200000 },
  ];

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="border rounded-lg p-4 shadow hover:scale-105 transition-transform"
        >
          <h3 className="text-lg font-bold">{p.name}</h3>
          <p className="text-gray-500">Rp {p.price.toLocaleString()}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Tambah ke Keranjang
          </button>
        </div>
      ))}
    </div>
  );
}
