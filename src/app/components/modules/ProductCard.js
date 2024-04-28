"use client";
import React from "react";

function ProductCard({ product }) {
  const productId = product._id;
  const deleteHandler = async function () {
    const res = await fetch(
      `https://crm-pi-ten.vercel.app/api/product/delete/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (res.status === 200) {
      window.location.reload();
    }
  };

  return (
    <div className="product_card">
      <div className="text-xl">id:<span className="ml-2">{product.id}</span></div>
      <div className="text-xl">title:<span className="ml-2">{product.title}</span></div>
      <div className="text-xl">price:<span className="ml-2">{product.price}</span></div>
      <div className="text-xl">category:<span className="ml-2">{product.category}</span></div>
      <div className="text-xl">image:<span className="ml-2">{product.image}</span></div>
      <div className="text-xl">rate:<span className="ml-2">{product.rating.rate}</span></div>
      <div className="text-xl">count:<span className="ml-2">{product.rating.count}</span></div>
      <div className="flex m-auto">
        <button onClick={deleteHandler} className="cancel_button py-1 px-3 mt-2">
          remove
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
