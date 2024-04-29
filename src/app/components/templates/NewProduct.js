"use client";
import React, { useState } from "react";
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
    await fetch("https://crm-pi-ten.vercel.app/api/product", {
      method: "POST",
      body: JSON.stringify(productForm),
      headers: { "Content-Type": "application/json" },
    cache: "no-store",
    });
      router.push("/admin/productmanagement/manageProducts");
  };

  return (
    <div>
      <div className="form_title">add new product</div>
      <ProductForm productForm={productForm} setProductForm={setProductForm} />
      <div className="newproduct_buttons">
        <button
          className="productform_button save_button"
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
