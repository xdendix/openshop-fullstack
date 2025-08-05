export default function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
      {cart.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        cart.map((item, i) => (
          <div key={i} className="flex justify-between border-b py-2">
            <span>{item.name}</span>
            <span>Rp {item.price.toLocaleString()}</span>
            <button
              onClick={() => removeFromCart(i)}
              className="text-red-500 hover:underline"
            >
              Hapus
            </button>
          </div>
        ))
      )}
    </div>
  );
}
