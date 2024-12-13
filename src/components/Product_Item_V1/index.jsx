"use client"; // Mark as a Client Component

import Image from "next/image";
import React from "react"; // Removed useState as it's no longer needed
import PropTypes from "prop-types"; // Import PropTypes
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Rating from "@mui/material/Rating";
import { useCart } from '@/context/CartContext'; // Import the cart context

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ProductItemV1 = ({
  imageSrc,
  altText,
  price,
  name,
  description,
  rating = 5, // Default rating
}) => {
  const { addToCart } = useCart(); // Get addToCart function from context

  const handleAddToCart = () => {
    const product = { imageSrc, altText, price, name, description, quantity: 1 }; // Set a default quantity of 1
    addToCart(product); // Add the product to the cart
  };

  return (
    <div className="product_item_v1 p-4 border rounded-lg shadow-lg bg-white flex flex-col justify-between h-full">
      <div className="relative" style={{ position: "relative", width: "100%", height: "300px" }}>
        <Checkbox
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          className="wishlist"
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: 10,
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
        <Image src={imageSrc} alt={altText} layout="fill" objectFit="cover" />
      </div>

      <div className="text-center py-2">
        <h3 className="text-lg font-bold">{name}</h3>
      </div>

      <div className="text-center py-2">
        <h4 className="text-lg font-bold">₹{price}</h4>
        <Rating name="product-rating" value={rating} readOnly />
      </div>

      <div className="text-center py-2">
        <p className="font-bold mt-2">{description}</p>
      </div>

      <div className="mt-auto text-center pb-4">
        <button 
          onClick={handleAddToCart} 
          className="add-to-cart-btn bg-green-500 text-white px-4 py-2 rounded-lg font-bold transition duration-200 hover:bg-green-600"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

// Prop types for runtime type checking
ProductItemV1.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
