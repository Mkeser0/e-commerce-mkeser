import React from "react";
import { useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/actions/shoppingCardAction";

function ShoppingCart({ imgUrl, item, price, productName, productId }) {
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseQuantity(productId));
  const handleDecrease = () => dispatch(decreaseQuantity(productId));
  const handleRemove = () => dispatch(removeFromCart(productId));

  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      <div className="flex gap-4 items-center p-4 border-b">
        <img
          src={imgUrl}
          alt={productName}
          className="w-16 h-16 object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm">{productName}</p>
          <p className="text-sm text-gray-400">{price} TL</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleDecrease}
              className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              -
            </button>
            <span className="text-sm">{item}</span>
            <button
              onClick={handleIncrease}
              className="px-4 py-1 bg-gray-200 rounded hover:bg-gray-300"
            >
              +
            </button>
            <button
              onClick={handleRemove}
              className="ml-4 text-xs text-red-500 hover:underline"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
