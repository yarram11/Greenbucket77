"use client"; // This component requires useState (client-side component)

import { useState, useEffect } from "react";

const MenuPage = () => {
  const categories = [
    { name: "Starters", image: "starters.jpg" },
    { name: "Bucket for 1 Person", image: "1 person.jpg" },
    { name: "Bucket for 2 Person", image: "2 person.jpg" },
    { name: "Bucket for 3 Person", image: "3 person.jpg" },
    { name: "Bucket for 4 Person", image: "4 person.jpg" },
  ];

  // States for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling on the page
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component is unmounted
    };
  }, [isModalOpen]);

  // Open the modal with the clicked image
  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="bg-gray-300 min-h-screen py-14">
      <div className="menu-container">
        {/* Header Section */}
        <section className="header text-center mb-10">
          <h1 className="text-4xl font-semibold text-green-600 mb-4">Our Menu</h1>
          <p className="text-lg text-gray-700">Explore our different menu options below!</p>
        </section>

        {/* Category Boxes Section */}
        <section className="filterProducts">
          <ul className="flex flex-wrap justify-center gap-8">
            {categories.map((category) => (
              <li key={category.name} className="text-center">
                <div
                  className="box-classic p-6 border-2 border-gray-500 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => openModal(category.image)} // Open modal when image is clicked
                >
                  {/* Category name */}
                  <p className="font-bold text-green-600 mb-4">{category.name}</p>
                  {/* Category image */}
                  <div className="w-64 h-64 mx-auto mb-4">
                    <img
                      src={`/${category.image}`} // Correct path to images in public folder
                      alt={category.name}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div
            className="relative"
            onClick={closeModal} // Close the modal if clicked outside the image
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          >
            {/* Display enlarged image */}
            <img
              src={`/${selectedImage}`} // Image path dynamically set based on selection
              alt="Enlarged"
              className="max-w-[90vw] max-h-[90vh] object-contain" // Ensure the image fits inside the modal
            />
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
