"use client";import React, { useState } from "react";
import ProductForm from "./ProductForm";
import CancelButton from "../elements/CancelButton";
import { useRouter } from "next/navigation";

function NewProduct() {
  const router = useRouter();
  const [productForm, setProductForm] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
  });

  const saveHandler = async () => {
    try {
      await fetch("https://crm-pi-ten.vercel.app/api/product", {
        method: "POST",
        body: JSON.stringify(productForm),
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      router.push("/admin/productmanagement/manageProducts");
    } catch (error) {
      console.error("Error saving product:", error.message);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 px-2">
      <div className="text-center text-2xl font-bold mb-4">Add New Product</div>
      <ProductForm productForm={productForm} setProductForm={setProductForm} />
      <div className="flex justify-between mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none"
          onClick={saveHandler}
        >
          Save
        </button>
        <CancelButton />
      </div>
    </div>
  );
}

export default NewProduct;
