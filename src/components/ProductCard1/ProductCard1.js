import React from "react";
import products from "../ProductData/ProductData";

const Card = ({ image, title, description, price, discount }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-t-lg"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <p className="text-md text-gray-800 font-bold mt-2">
          Price: ${price}{" "}
          <span className="text-sm text-green-600">({discount}% off)</span>
        </p>
        <div className="mt-3 flex justify-between items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// ProductCard Component for Rendering All Cards
const ProductCard1 = () => {
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
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCard1;
