'use client'
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import CancelButton from "../elements/CancelButton";
function NewProduct() {
    
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
        <CancelButton/>
      </div>
    </div>
  )
}

export default NewProduct
