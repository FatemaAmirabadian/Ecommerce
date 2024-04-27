"use client";
import React from "react";
import Link from "next/link";

function ProductCard({ product }) {
  const productId = product._id;
  const deleteHandler = async function () {
    const res = await fetch(
      `http://localhost:3000/api/product/delete/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (res.status === 200) {
      window.location.reload();
    }
  };

  return (
    <div className="product_card flex">
      <div className="product_card_info">
        <div>{product.name}</div>
        <div>{product.price}$</div>
        <div>{product.category}</div>
        <div>{product.stock}</div>
        {/* <div>{product.createdAt}</div> */}
        {/* <div>{product.updatedAt}</div> */}
      </div>
      <div className="flex m-auto">
        <Link
          href={`http://localhost:3000/admin/productmanagement/manageProducts/edit/${productId}`}
        >
          <button className="save_button p-1 m-1">edit</button>
        </Link>
        <button onClick={deleteHandler} className="cancel_button p-1 m-1">
          remove
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
