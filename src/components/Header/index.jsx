"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MdOutlinePhone } from "react-icons/md";
import { FaUser } from "react-icons/fa"; // User icon for login
import { BiShoppingBag } from "react-icons/bi"; // Cart icon
import CartPopup from "./CartPopup";
import { useCart } from "@/context/CartContext";
import LoginPopup from "@/components/LoginPopup"; // Adjust the path based on the actual location

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const { cartItems, getCartCount } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false); // State for Login Popup

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const openCartPopup = () => setIsCartPopupOpen(true);
  const closeCartPopup = () => setIsCartPopupOpen(false);
  const openLoginPopup = () => setIsLoginPopupOpen(true); // Open login popup
  const closeLoginPopup = () => setIsLoginPopupOpen(false); // Close login popup

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 h-17 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } flex items-center justify-between px-6 md:px-12`}
      style={{ fontFamily: "var(--site-navigation-font-family)" }}
    >
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <Image
            src="/logo.png"
            width={120}
            height={120}
            alt="logo"
            priority
            className="object-contain"
          />
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
        <div className="w-6 h-6 flex flex-col justify-between items-center space-y-1">
          <div className="w-6 h-1 bg-gray-800"></div>
          <div className="w-6 h-1 bg-gray-800"></div>
          <div className="w-6 h-1 bg-gray-800"></div>
        </div>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex md:space-x-8">
        <ul className="flex space-x-8">
          {["Home", "About", "Menu", "Blog", "Contact"].map((item, index) => (
            <li key={index}>
              <Link
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={`hover:text-blue-500 transition ${
                  isScrolled ? "text-black" : "text-white"
                } text-lg`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 w-full bg-[#4CAF50] p-4 flex flex-col space-y-4 max-h-[60vh] overflow-y-auto">
          <ul className="flex flex-col space-y-4">
            {["Home", "About", "Menu", "Blog", "Contact"].map((item, index) => (
              <li key={index}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white text-lg hover:text-blue-500 transition"
                  onClick={toggleMobileMenu} // Close menu after click
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Right-Side Icons */}
      <div className="flex items-center space-x-6">
        {/* Phone Number */}
        <span
          className={`ml-6 flex items-center text-sm md:text-base transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          <MdOutlinePhone className="mr-2" />
          +91-9887776666
        </span>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <div
            className={`relative w-12 h-12 flex items-center justify-center rounded-md shadow-lg ${
              isScrolled ? "bg-[#4caf50]" : "bg-white"
            }`}
            onClick={openCartPopup} // Open cart popup
          >
            <BiShoppingBag className="text-2xl text-gray-700 hover:text-blue-600 transition" />
            <span className="absolute top-[-5px] right-[-10px] flex items-center justify-center w-4 h-4 bg-blue-300 text-white rounded-full">
              {getCartCount()}
            </span>
          </div>

          {/* Login Icon */}
          <div
            className={`relative w-12 h-12 flex items-center justify-center rounded-md shadow-lg ${
              isScrolled ? "bg-[#4caf50]" : "bg-white"
            }`}
            onClick={openLoginPopup} // Open login popup
          >
            <FaUser className="text-2xl text-gray-700 hover:text-blue-600 transition" />
          </div>
        </div>
      </div>

      {/* Cart Popup */}
      {isCartPopupOpen && (
        <div className="absolute top-16 right-6 cart-popup z-50">
          <CartPopup cartItems={cartItems} closeCartPopup={closeCartPopup} />
        </div>
      )}

      {/* Login Popup */}
      {isLoginPopupOpen && <LoginPopup closePopup={closeLoginPopup} />}
    </header>
  );
};

export default Header;
