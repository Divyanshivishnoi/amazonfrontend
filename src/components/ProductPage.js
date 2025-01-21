import React from "react";
import Carousel from "./Carousel"; // Import Carousel Component
import ProductCard from "./ProductCard"; // Import ProductCard Component

const ProductPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Cards Section */}
      <div className="absolute top-0 left-0 w-full z-10">
        <ProductCard />
      </div>

      {/* Carousel Section */}
      <div className="w-full h-full">
        <Carousel />
      </div>
    </div>
  );
};

export default ProductPage;
