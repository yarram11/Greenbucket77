"use client";

import { useState } from "react";
import BannerSlider from "../components/BannerSlider";
import { ProductItemV1 } from "../components/Product_Item_V1";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter, FaShareAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Import necessary modules
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination'; // Import pagination styles
import { v4 as uuidv4 } from 'uuid';



const productData = {
  Starters: [
    {
      id: uuidv4(),
      imageSrc: "/chicken65.png",
      altText: "Chicken 65",
      name: "Chicken 65",
      price: 230,
      description: "Crispy, spiced, and delicious chicken fried to perfection.",
    },
    {
      id: uuidv4(),
      imageSrc: "/chillyChicken.png",
      altText: "Chilly Chicken",
      name: "Chilly Chicken",
      price: 230,
      description: "Tender chicken pieces tossed in a spicy and tangy sauce.",
    },
    {
      id: uuidv4(),
      imageSrc: "/chickenMajestic.png",
      altText: "Chicken Majestic",
      name: "Chicken Majestic",
      price: 280,
      description: "Delicious chicken chunks cooked in a rich blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/chicken555.jpg",
      altText: "Chicken 555",
      name: "Chicken 555",
      price: 280,
      description: "Fried chicken tossed in a special 555 spicy sauce.",
    },
    {
      id: uuidv4(),
      imageSrc: "/chickenKajulPakoda.jpg",
      altText: "Chicken Kajul Pakoda",
      name: "Chicken Kajul Pakoda",
      price: 280,
      description: "Marinated chicken fried with a crispy and spicy batter.",
    },
    {
      id: uuidv4(),
      imageSrc: "/chickenLolopop.jpg",
      altText: "Chicken Lollipop",
      name: "Chicken Lollipop",
      price: 280,
      description: "Delicious chicken lollipop cooked in tangy spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/apolloFish.jpg",
      altText: "Apollo Fish",
      name: "Apollo Fish",
      price: 280,
      description: "Deep-fried fish with tangy spices, a true delicacy.",
    },
  ],
  "Biryani for 1 person": [
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Dum Biryani (2 pieces)",
      name: "Chicken Dum Biryani (2 pieces)",
      price: 210,
      description: "Delicious chicken dum biryani served with two pieces of tender chicken.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken 65 Biryani",
      name: "Chicken 65 Biryani",
      price: 280,
      description: "Spicy chicken 65 pieces served with aromatic biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Fry Biryani",
      name: "Chicken Fry Biryani",
      price: 220,
      description: "Flavorful chicken fry combined with basmati rice biryani.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Green Bucket Spl. Chicken Biryani",
      name: "Green Bucket Spl. Chicken Biryani",
      price: 280,
      description: "Special chicken biryani with unique spices and flavors.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mutton Dum Biryani",
      name: "Mutton Dum Biryani",
      price: 300,
      description: "Slow-cooked mutton biryani with a rich and aromatic taste.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Prawns Biryani",
      name: "Prawns Biryani",
      price: 300,
      description: "Juicy prawns cooked in a flavorful biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Fish Biryani",
      name: "Fish Biryani",
      price: 250,
      description: "Delicate fish fillet cooked with aromatic basmati rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Egg Biryani",
      name: "Egg Biryani",
      price: 180,
      description: "Biryani rice served with boiled eggs and spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Veg Biryani",
      name: "Veg Biryani",
      price: 170,
      description: "Vegetarian biryani with fresh vegetables and spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Paneer Biryani",
      name: "Paneer Biryani",
      price: 180,
      description: "Flavorful paneer chunks cooked with biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mushroom Biryani",
      name: "Mushroom Biryani",
      price: 200,
      description: "Tasty mushroom biryani with a blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Natukodi Biryani",
      name: "Natukodi Biryani",
      price: 280,
      description: "Traditional Natukodi biryani with a spicy kick.",
    },
  ],
  "Biryani for 2 person": [
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Dum Biryani (4 pieces)",
      name: "Chicken Dum Biryani (4 pieces)",
      price: 400,
      description: "Delicious Chicken Dum Biryani with 4 pieces of tender chicken.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken 65 Biryani",
      name: "Chicken 65 Biryani",
      price: 500,
      description: "Spicy Chicken 65 Biryani with flavorful spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Fry Biryani",
      name: "Chicken Fry Biryani",
      price: 420,
      description: "Crispy Chicken Fry served with aromatic biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Green Bucket Special Chicken Biryani",
      name: "Green Bucket Special Chicken Biryani",
      price: 530,
      description: "Our special chicken biryani with a unique blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mutton Dum Biryani",
      name: "Mutton Dum Biryani",
      price: 550,
      description: "Rich and savory mutton biryani cooked to perfection.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Prawns Biryani",
      name: "Prawns Biryani",
      price: 550,
      description: "Succulent prawns cooked with flavorful biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Fish Biryani",
      name: "Fish Biryani",
      price: 400,
      description: "Tender fish cooked with spices and biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Egg Biryani",
      name: "Egg Biryani",
      price: 320,
      description: "Egg biryani with a perfect blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Veg Biryani",
      name: "Veg Biryani",
      price: 310,
      description: "Aromatic veg biryani with fresh vegetables.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Paneer Biryani",
      name: "Paneer Biryani",
      price: 340,
      description: "Soft paneer pieces cooked with biryani rice and spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mushroom Biryani",
      name: "Mushroom Biryani",
      price: 360,
      description: "Mushroom biryani with rich, earthy flavors.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "NATUKODI Biryani",
      name: "NATUKODI Biryani",
      price: 530,
      description: "Special NATUKODI biryani with unique spices.",
    },
  ],
  "Biryani for 3 person": [
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Dum Biryani ",
      name: "Chicken Dum Biryani ",
      price: 560,
      description: "Delicious Chicken Dum Biryani with 6 pieces of tender chicken.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken 65 Biryani",
      name: "Chicken 65 Biryani",
      price: 750,
      description: "Spicy Chicken 65 Biryani with flavorful spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Fry Biryani",
      name: "Chicken Fry Biryani",
      price: 600,
      description: "Crispy Chicken Fry served with aromatic biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Green Bucket Special Chicken Biryani",
      name: "Green Bucket Special Chicken Biryani",
      price: 650,
      description: "Our special chicken biryani with a unique blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mutton Dum Biryani",
      name: "Mutton Dum Biryani",
      price: 800,
      description: "Rich and savory mutton biryani cooked to perfection.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Prawns Biryani",
      name: "Prawns Biryani",
      price: 800,
      description: "Succulent prawns cooked with flavorful biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Fish Biryani",
      name: "Fish Biryani",
      price: 600,
      description: "Tender fish cooked with spices and biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Egg Biryani",
      name: "Egg Biryani",
      price: 470,
      description: "Egg biryani with a perfect blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Veg Biryani",
      name: "Veg Biryani",
      price: 460,
      description: "Aromatic veg biryani with fresh vegetables.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Paneer Biryani",
      name: "Paneer Biryani",
      price: 500,
      description: "Soft paneer pieces cooked with biryani rice and spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mushroom Biryani",
      name: "Mushroom Biryani",
      price: 540,
      description: "Mushroom biryani with rich, earthy flavors.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "NATUKODI Biryani",
      name: "NATUKODI Biryani",
      price: 780,
      description: "Special NATUKODI biryani with unique spices.",
    },
  ],
  "Biryani for 4 person": [
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Dum Biryani ",
      name: "Chicken Dum Biryani ",
      price: 750,
      description: "Delicious Chicken Dum Biryani with 4 pieces of tender chicken.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken 65 Biryani",
      name: "Chicken 65 Biryani",
      price: 980,
      description: "Spicy Chicken 65 Biryani with flavorful spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Chicken Fry Biryani",
      name: "Chicken Fry Biryani",
      price: 790,
      description: "Crispy Chicken Fry served with aromatic biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Green Bucket Special Chicken Biryani",
      name: "Green Bucket Special Chicken Biryani",
      price: 780,
      description: "Our special chicken biryani with a unique blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mutton Dum Biryani",
      name: "Mutton Dum Biryani",
      price: 1050,
      description: "Rich and savory mutton biryani cooked to perfection.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Prawns Biryani",
      name: "Prawns Biryani",
      price: 1050,
      description: "Succulent prawns cooked with flavorful biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Fish Biryani",
      name: "Fish Biryani",
      price: 800,
      description: "Tender fish cooked with spices and biryani rice.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Egg Biryani",
      name: "Egg Biryani",
      price: 680,
      description: "Egg biryani with a perfect blend of spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Veg Biryani",
      name: "Veg Biryani",
      price: 680,
      description: "Aromatic veg biryani with fresh vegetables.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Paneer Biryani",
      name: "Paneer Biryani",
      price: 650,
      description: "Soft paneer pieces cooked with biryani rice and spices.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "Mushroom Biryani",
      name: "Mushroom Biryani",
      price: 710,
      description: "Mushroom biryani with rich, earthy flavors.",
    },
    {
      id: uuidv4(),
      imageSrc: "/biryani7.jpg",
      altText: "NATUKODI Biryani",
      name: "NATUKODI Biryani",
      price: 1050,
      description: "Special NATUKODI biryani with unique spices.",
    },
  ],
};


export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Starters");
  const [showIcons, setShowIcons] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <BannerSlider />


      (
    <section className="todays-special-section py-10">
      <div className="max-w-6xl mx-auto">
        <div
          className="bg-cover bg-center rounded-lg p-10 relative"
          style={{
            backgroundImage: "url('/bg1.png')", // Transparent background image
            backgroundSize: "cover",
          }}
        >
          <div className="relative z-10 text-white text-center mb-8 p-4">
            <h2 className="text-4xl font-bold text-white shadow-md">Today's Special</h2>
          </div>


          <Swiper
  spaceBetween={10} // Space between slides
  slidesPerView={3} // Show 3 items at once
  loop={true} // Enable infinite loop
  pagination={{ clickable: true }} // Pagination dots
  navigation // Enable navigation arrows
  autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
  modules={[Autoplay, Pagination]} // Use the modules you imported
  className="today-special-swiper"
          >
            {/* Render products from "Starters" */}
            {productData["Starters"].slice(0, 1).map((product, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                  <div className="absolute inset-0 bg-gray-200 rounded-xl transform -skew-y-6"></div>
                  <div className="relative z-10 p-4 flex flex-col flex-grow justify-between">
                    <div className="flex-grow flex items-center justify-center mb-4">
                      <Image
                        src={product.imageSrc}
                        alt={product.altText}
                        width={250}
                        height={250}
                        className="rounded-lg object-cover h-60 w-60 hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <h4 className="text-xl text-orange-500 font-bold">₹{product.price}.00</h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* Render Chicken Biryani from "Biryani for 2 person" */}
            {productData["Biryani for 2 person"]
              .filter((product) => product.name.includes("Chicken"))
              .slice(0, 1)
              .map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gray-200 rounded-xl transform -skew-y-6"></div>
                    <div className="relative z-10 p-4 flex flex-col flex-grow justify-between">
                      <div className="flex-grow flex items-center justify-center mb-4">
                        <Image
                          src={product.imageSrc}
                          alt={product.altText}
                          width={250}
                          height={250}
                          className="rounded-lg object-cover h-60 w-60 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <h4 className="text-xl text-orange-500 font-bold">₹{product.price}.00</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            {/* Render Prawns Biryani */}
            {productData["Biryani for 2 person"]
              .filter((product) => product.name.includes("Prawns"))
              .slice(0, 1)
              .map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gray-200 rounded-xl transform -skew-y-6"></div>
                    <div className="relative z-10 p-4 flex flex-col flex-grow justify-between">
                      <div className="flex-grow flex items-center justify-center mb-4">
                        <Image
                          src={product.imageSrc}
                          alt={product.altText}
                          width={250}
                          height={250}
                          className="rounded-lg object-cover h-60 w-60 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <h4 className="text-xl text-orange-500 font-bold">₹{product.price}.00</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            {/* Render Fish Biryani */}
            {productData["Biryani for 2 person"]
              .filter((product) => product.name.includes("Fish"))
              .slice(0, 1)
              .map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gray-200 rounded-xl transform -skew-y-6"></div>
                    <div className="relative z-10 p-4 flex flex-col flex-grow justify-between">
                      <div className="flex-grow flex items-center justify-center mb-4">
                        <Image
                          src={product.imageSrc}
                          alt={product.altText}
                          width={250}
                          height={250}
                          className="rounded-lg object-cover h-60 w-60 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <h4 className="text-xl text-orange-500 font-bold">₹{product.price}.00</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

            {/* Render Natukodi Biryani */}
            {productData["Biryani for 2 person"]
              .filter((product) => product.name.includes("Natukodi"))
              .slice(0, 1)
              .map((product, index) => (
                <SwiperSlide key={index}>
                  <div className="relative bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
                    <div className="absolute inset-0 bg-gray-200 rounded-xl transform -skew-y-6"></div>
                    <div className="relative z-10 p-4 flex flex-col flex-grow justify-between">
                      <div className="flex-grow flex items-center justify-center mb-4">
                        <Image
                          src={product.imageSrc}
                          alt={product.altText}
                          width={250}
                          height={250}
                          className="rounded-lg object-cover h-60 w-60 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold">{product.name}</h3>
                        <h4 className="text-xl text-orange-500 font-bold">₹{product.price}.00</h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  
     {/* Filter Products Section */}
     <section className="filterProducts py-10 relative">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-10 relative">
            {/* Starters icon remains as is */}
            <li
              className="text-center cursor-pointer relative z-10"
              onClick={() => setSelectedCategory("Starters")}
            >
              <Image
                src="/icon2.png" // Keep the original starters icon
                alt="Starters Icon"
                width={70}
                height={70}
                className="m-auto overhangIcon"
              />
              <p className="text-lg font-semibold">Starters</p>
            </li>
            {/* Biryani filters with biryani icon */}
            {["Biryani for 1 person", "Biryani for 2 person", "Biryani for 3 person", "Biryani for 4 person"].map((category) => (
              <li
                key={category}
                className="text-center cursor-pointer relative z-10"
                onClick={() => setSelectedCategory(category)}
              >
                <Image
                  src="/icon3.png" // Biryani icon for all Biryani filters
                  alt={`${category} Icon`}
                  width={70}
                  height={70}
                  className="m-auto overhangIcon"
                />
                <p className="text-lg font-semibold">{category}</p>
              </li>
            ))}
          </ul>
          <div className="productsList py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
              {productData[selectedCategory] && productData[selectedCategory].map((product, index) => (
                <ProductItemV1
                  key={index}
                  imageSrc={product.imageSrc}
                  altText={product.altText}
                  price={product.price}
                  name={product.name}
                  description={product.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Customer Reviews Section */}
      <section className="customer-reviews py-16">
        <div className="container text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-800 font-serif tracking-wide italic">
            Customer's Comment
          </h2>
          <div className="reviews-grid grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                review: "Absolutely delicious! The best Biryani I've ever had!",
                name: "John Doe",
                imageSrc: "/customer1.jpg",
              },
              {
                review: "Great service and the food is always fresh!",
                name: "Jane Smith",
                imageSrc: "/customer2.jpg",
              },
              {
                review: "I love their soups! Perfect for a cozy night in.",
                name: "Sarah Lee",
                imageSrc: "/customer3.jpg",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="review-card p-6 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center bg-white hover:bg-gray-50"
              >
                <div className="relative w-full h-48 overflow-hidden rounded-lg">
                  <img
                    src={review.imageSrc}
                    alt={`${review.name}'s review`}
                    className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-300"
                  />
                </div>
                <p className="text-lg italic text-gray-700 mb-2">"{review.review}"</p>
                <p className="font-bold text-gray-800">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="chef-section">
        <h2 className="text-5xl font-bold mb-8 text-gray-800 font-serif tracking-wide italic text-center">
          Meet Our Master Chefs
        </h2>
        <div className="chefs-grid">
          
          {/* Chef 1 */}
          <div className="chef-card">
            <img src="/chef1.jpeg" alt="Chef John Doe" className="chef-image" />
            <div className="chef-info">
              <h3 className="chef-name">John Doe</h3>
              <p className="chef-title">Junior Chef</p>
              <div className="social-icons">
                <div
                  className="share-container"
                  onMouseEnter={() => setShowIcons(true)}
                  onMouseLeave={() => setShowIcons(false)}
                >
                  <div className="share-box">
                    <FaShareAlt className="share-icon" aria-hidden="true" />
                  </div>
                  {showIcons && (
                    <div className="social-media-icons">
                      <a href="#" aria-label="Facebook">
                        <FaFacebook className="social-icon" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <FaInstagram className="social-icon" />
                      </a>
                      <a href="#" aria-label="Twitter">
                        <FaTwitter className="social-icon" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Chef 2 */}
          <div className="chef-card">
            <img src="/chef2.jpeg" alt="Chef Jane Smith" className="chef-image" />
            <div className="chef-info">
              <h3 className="chef-name">Jane Smith</h3>
              <p className="chef-title">Senior Chef</p>
              <div className="social-icons">
                <div
                  className="share-container"
                  onMouseEnter={() => setShowIcons(true)}
                  onMouseLeave={() => setShowIcons(false)}
                >
                  <div className="share-box">
                    <FaShareAlt className="share-icon" aria-hidden="true" />
                  </div>
                  {showIcons && (
                    <div className="social-media-icons">
                      <a href="#" aria-label="Facebook">
                        <FaFacebook className="social-icon" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <FaInstagram className="social-icon" />
                      </a>
                      <a href="#" aria-label="Twitter">
                        <FaTwitter className="social-icon" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Chef 3 */}
          <div className="chef-card">
            <img src="/chef3.jpg" alt="Chef Alex Brown" className="chef-image" />
            <div className="chef-info">
              <h3 className="chef-name">Alex Brown</h3>
              <p className="chef-title">Senior Chef</p>
              <div className="social-icons">
                <div
                  className="share-container"
                  onMouseEnter={() => setShowIcons(true)}
                  onMouseLeave={() => setShowIcons(false)}
                >
                  <div className="share-box">
                    <FaShareAlt className="share-icon" aria-hidden="true" />
                  </div>
                  {showIcons && (
                    <div className="social-media-icons">
                      <a href="#" aria-label="Facebook">
                        <FaFacebook className="social-icon" />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <FaInstagram className="social-icon" />
                      </a>
                      <a href="#" aria-label="Twitter">
                        <FaTwitter className="social-icon" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reserve-table">
        <section className="reservation-section">
          <div className="container">
            <h2 className="text-center">Reserve Your Table</h2>
            <form className="reservation-form">
              <input type="text" placeholder="Your name" required />
              <input type="tel" placeholder="Phone number" required />
              <input type="email" placeholder="Email ID" required />
              <input type="number" placeholder="No. of persons" required />
              <input type="date" placeholder="Date" required />
              <input type="time" placeholder="Time" required />
              <button type="submit">Book a Table</button>
            </form>
          </div>
        </section>
      </section>
    </>
  );
}
