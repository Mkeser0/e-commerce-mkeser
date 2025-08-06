import React from "react";
import { useSelector } from "react-redux";
import ShoppingCart from "./ShoppingCart";

function ShoppingCardModal({ onClose }) {
  const cartItems = useSelector((state) => state.shoppingCart.cart);

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
          />
        ))
      )}
    </div>
  );
}

export default ShoppingCardModal;
