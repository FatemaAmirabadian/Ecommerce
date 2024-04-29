'use client'
import React, { useState } from "react";

function ProductCard({ product }) {
  const [showDetails, setShowDetails] = useState(false);

  const productId = product._id;

  const deleteHandler = async function () {
    try {
      const res = await fetch(
        `https://crm-pi-ten.vercel.app/api/product/delete/${productId}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        }
      );

      // Assuming successful deletion, you can handle UI updates or notifications here
      console.log("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error.message);
    }
  };

  const detailsHandler = () => {
    setShowDetails(!showDetails); // Toggle the state of showDetails
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b-2">
        <div className="text-xl mb-2">ID: {product.id}</div>
        <div className="text-xl mb-2">Title: {product.title}</div>
        <div className="text-xl mb-2">Price: {product.price}</div>
        {showDetails && (
          <>
            <div className="text-xl mb-2">Category: {product.category}</div>
            <div className="text-xl mb-2">Image: {product.image}</div>
            <div className="text-xl mb-2">Rate: {product.rating.rate}</div>
            <div className="text-xl mb-2">Count: {product.rating.count}</div>
          </>
        )}
        <div className="flex justify-between mt-4">
          <button
            onClick={detailsHandler}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
          >
            {showDetails ? "Hide Details" : "Details"}
          </button>
          <button
            onClick={deleteHandler}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded focus:outline-none"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
