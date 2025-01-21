import React from "react";

import products from "../ProData/ProData";

const Card = ({ image, title, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-42 object-cover rounded-t-lg"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="mt-3 flex justify-between items-center">
          <button className="bg-yellow-600 text-white px-4 py-2 rounded">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

// ProductCard Component for Rendering All Cards
const ProductCard = () => {
  return (
    <div className="p-4">
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
