"use client";
import React, { useState } from "react";
import ProductForm from "@/components/templates/ProductForm";
import { useRouter } from "next/navigation";

function page() {
  const router = useRouter();
  
  const [productForm, setProductForm] = useState({
    name: "",
    price: "",
    description: "",
    url1: "",
    url2: "",
    url3: "",
    url4: "",
    category: "",
    stock: "",
  });

  const cancelHandler = () => {
    setProductForm({
      name: "",
      price: "",
      description: "",
      url1: "",
      url2: "",
      url3: "",
      url4: "",
      category: "",
      stock: "",
    });
    router.push("/");
  };

  const saveHandler = async () => {
    const res = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(productForm),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    // if (data.error) {
    //   toast.error(data.error);
    // } else {
    //   toast.success(data.message);
    //   router.refresh();
    // }
    console.log(data);
    if (!data.error) {
      setProductForm({
        name: "",
        price: "",
        description: "",
        url1: "",
        url2: "",
        url3: "",
        url4: "",
        category: "",
        stock: "",
      });
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
