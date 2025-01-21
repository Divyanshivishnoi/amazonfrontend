import React from "react";
import cartItems from "../cartProduct/cartProduct";
const CartPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Cart Items Section */}
        <div className="col-span-2 bg-white p-4 rounded shadow">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-start border-b pb-4 mb-4">
              {/* Checkbox */}
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 mr-4"
              />
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Size:</strong> {item.size}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Color:</strong> {item.color}
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <button className="px-3 py-1 bg-gray-200 rounded text-gray-600">
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button className="px-3 py-1 bg-gray-200 rounded text-gray-600">
                    +
                  </button>
                </div>
                <div className="flex items-center gap-4 mt-3 text-sm text-blue-600">
                  <button>Delete</button>
                  <button>Save for later</button>
                  <button>See more like this</button>
                </div>
              </div>
              <div className="text-right">
                <span className="text-red-600 font-bold bg-red-100 px-2 py-1 rounded">
                  {item.discount}% off
                </span>
                <p className="text-lg font-bold mt-2">₹{item.price}</p>
                <p className="text-sm text-gray-500 line-through">
                  M.R.P: ₹{item.mrp}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between text-lg font-semibold">
            <p>Subtotal (1 item):</p>
            <p>₹{cartItems.reduce((total, item) => total + item.price, 0)}</p>
          </div>
        </div>
        {/* Order Summary Section */}
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-4">
            <p className="text-green-600 font-semibold">
              Your order is eligible for FREE Delivery.
            </p>
            <p className="text-gray-600 text-sm">
              Choose FREE Delivery option at checkout.
            </p>
          </div>

          <div className="text-lg font-semibold flex justify-between mb-4">
            <p>Subtotal (1 item):</p>
            <p>₹{cartItems.reduce((total, item) => total + item.price, 0)}</p>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="gift"
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <label htmlFor="gift" className="ml-2 text-gray-600">
              This order contains a gift
            </label>
          </div>

          <button className="w-full bg-yellow-400 text-white font-bold py-2 rounded hover:bg-yellow-500">
            Proceed to Buy
          </button>

          <div className="mt-4">
            <p className="text-sm text-gray-600">EMI Available</p>
            <select className="mt-2 w-full border rounded px-2 py-1 text-gray-600">
              <option>Select EMI Option</option>
              <option>3 months</option>
              <option>6 months</option>
              <option>12 months</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
