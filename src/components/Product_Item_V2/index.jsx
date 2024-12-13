import React from "react";

import { useCart } from "@/context/CartContext"; // Keep this import only

const ProductItemV2 = ({ imageSrc, altText, price, itemName, description }) => {
  const { addItemToCart } = useCart(); // Access the addItemToCart function

  return (
    <div className="product-item border p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <img src={imageSrc} alt={altText} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="text-lg font-semibold">{itemName}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="font-bold">₹{price}</p>
      <button
        onClick={() => addItemToCart({ imageSrc, altText, price, soupName: itemName })}
        className="mt-2 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItemV2;
