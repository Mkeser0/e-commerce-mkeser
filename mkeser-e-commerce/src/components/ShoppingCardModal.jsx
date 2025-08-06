import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";

function ShoppingCardModal({ onClose }) {
  const cartItems = useSelector((state) => state.shoppingCart.cart);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.count * item.product.price,
    0
  );

  return (
    <div className="fixed top-0 right-0 w-[20vw] bg-white shadow-lg z-50 overflow-y-auto p-4 transition-transform">
      <button onClick={onClose} className="text-xl absolute top-2 right-4">
        X
      </button>
      <h2 className="text-lg font-bold mb-4">Sepetiniz</h2>

      {cartItems.length === 0 ? (
        <p className="text-sm text-red-400">Sepet boş</p>
      ) : (
        cartItems.map((item) => (
          <ShoppingCart
            key={item.product.id}
            imgUrl={item.product.images[0].url}
            item={item.count}
            price={item.product.price}
            productName={item.product.name}
            productId={item.product.id}
          />
        ))
      )}
      {cartItems.length > 0 && (
        <div className="text-right mt-4 font-semibold text-lg">
          Toplam: <span className="text-[#E77C40]">{totalPrice} TL</span>
        </div>
      )}
    </div>
  );
}

export default ShoppingCardModal;
