"use client";
import React, { useState } from "react";
import FormInput from "@/components/elements/FormInput";

function EditForm({ product }) {
  const [productForm, setProductForm] = useState(product);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };

  const saveHandler = async function () {
    await fetch(`/api/product/edit/${productForm._id}`, {
      method: "PATCH",
      body: JSON.stringify(productForm),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div>
      <form>
        <FormInput
          name="name"
          label="Name"
          type="text"
          value={productForm.name}
          onChange={changeHandler}
        />
        <FormInput
          name="price"
          label="Price"
          type="number"
          value={productForm.price}
          onChange={changeHandler}
        />
        <FormInput
          name="url1"
          label="First Image Url"
          type="text"
          value={productForm.url1}
          onChange={changeHandler}
        />
        <FormInput
          name="url2"
          label="Second Image Url"
          type="text"
          value={productForm.url2}
          onChange={changeHandler}
        />
        <FormInput
          name="url3"
          label="Third Image Url"
          type="text"
          value={productForm.url3}
          onChange={changeHandler}
        />
        <FormInput
          name="url4"
          label="Fourth Image Url"
          type="text"
          value={productForm.url4}
          onChange={changeHandler}
        />
        <div className="select_container">
          <p className="select_label">Choose a category:</p>
          <select
            className="select_input"
            name="category"
            id="category"
            onChange={changeHandler}
            value={productForm.category}
          >
            <option value="Electronic">Electronic</option>
            <option value="Camera">Camera</option>
            <option value="Laptop">Laptop</option>
            <option value="Accessories">Accessories</option>
            <option value="Headphone">Headphone</option>
            <option value="Food">Food</option>
            <option value="Book">Book</option>
            <option value="Cloth">Cloth</option>
            <option value="Shoe">Shoe</option>
            <option value="Beauty/Health">Beauty/Health</option>
            <option value="Sports">Sports</option>
            <option value="Home">Home</option>
          </select>
        </div>
        <FormInput
          name="stock"
          label="Stock"
          type="number"
          value={productForm.stock}
          onChange={changeHandler}
        />
        <div>
          <button onClick={saveHandler} className="save_button w-full p-1 m-1">
            save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
