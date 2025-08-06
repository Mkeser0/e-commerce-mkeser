import React from "react";

function ShoppingCart({ imgUrl, item, price, productName }) {
  return (
    <div className="bg-white shadow-md rounded-lg mb-4">
      <div className="flex gap-4 items-center p-4 border-b">
        <img
          src={imgUrl}
          alt={productName}
          className="w-16 h-16 object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{productName}</p>
          <p className="text-sm text-gray-400">Adet: {item}</p>
          <p className="text-sm text-red-400">{price} TL</p>
        </div>
      </div>
    </div>
  );
}
export default ShoppingCart;
