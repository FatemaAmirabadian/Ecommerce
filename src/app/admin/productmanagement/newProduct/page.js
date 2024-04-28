"use client";
import React, { useState } from "react";
import ProductForm from "../../../components/templates/ProductForm";
import { useRouter } from "next/navigation";

function page() {
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

  const cancelHandler = () => {
    router.push("/");
  };

  const saveHandler = async () => {
    console.log(productForm);
    const res = await fetch("http://localhost:3000/api/product", {
      method: "POST",
      body: JSON.stringify(productForm),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (!data.error) {
      setProductForm({
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
      router.push("/admin/productmanagement/manageProducts");
    }
  };

  return (
    <div className="admin">
      <div className="form_title">add new product</div>
      <ProductForm productForm={productForm} setProductForm={setProductForm} />
      <div className="newproduct_buttons">
        <button
          className="productform_button cancel_button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button
          className="productform_button save_button"
          onClick={saveHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default page;
