"use client";
import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { useCart } from "@/context/CartContext"; // Ensure this path is correct

const CheckoutPopup = ({ closeCheckoutPopup }) => {
  const { cartItems } = useCart(); // Use the context

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    paymentMethod: "creditCard", // Default payment method
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });

  // Function to calculate the total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your order processing logic
    alert("Order placed!"); // Placeholder action for order placement
    closeCheckoutPopup(); // Close the popup after placing the order
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full h-full overflow-y-auto">
        <button
          onClick={closeCheckoutPopup}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600"
        >
          <BiX className="text-2xl" />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center">
          Billing & Shipping Address
        </h2>

        {/* Form for billing and shipping address */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Street Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="City"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Postal Code"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-center">
            Payment Method
          </h2>
          <div className="mb-4">
            <label className="block text-sm font-medium">Select Payment Method</label>
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
          </div>
          {formData.paymentMethod === "creditCard" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Expiry Date</label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={formData.cardExpiry}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">CVC</label>
                <input
                  type="text"
                  name="cardCvc"
                  value={formData.cardCvc}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="CVC"
                />
              </div>
            </div>
          )}

          <h2 className="text-2xl font-semibold mt-6 mb-4 text-center">
            Your Order
          </h2>

          {/* Order Summary with Images */}
          <div className="overflow-y-auto h-40">
            {cartItems.length === 0 ? (
              <p className="text-center">Your cart is empty!</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4 border-b py-2"
                >
                  {/* Image Display */}
                  <img
                    src={item.imageSrc}
                    alt={item.altText}
                    className="w-12 h-12 object-cover rounded mr-4"
                  />
                  <span className="flex-1">{item.soupName}</span>
                  <span>
                    ₹{item.price} x {item.quantity}
                  </span>
                </div>
              ))
            )}
          </div>

          <div className="flex justify-between mt-4 font-bold">
            <span>Order Total:</span>
            <span>₹{calculateTotal()}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-500 transition"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPopup;
