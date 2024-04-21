"use client";
import React from "react";
import FormInput from "../elements/FormInput";

function ProductForm({ productForm, setProductForm }) {
  const { name, price, url1, url2, url3, url4, category, stock } =
    productForm;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductForm({ ...productForm, [name]: value });
  };
  
  return (
    <div className="form_container">
      <form>
        <FormInput
          name="name"
          label="Name"
          type="text"
          value={name}
          onChange={changeHandler}
        />
        <FormInput
          name="price"
          label="Price"
          type="number"
          value={price}
          onChange={changeHandler}
        />
        <FormInput
          name="url1"
          label="First Image Url"
          type="text"
          value={url1}
          onChange={changeHandler}
        />
        <FormInput
          name="url2"
          label="Second Image Url"
          type="text"
          value={url2}
          onChange={changeHandler}
        />
        <FormInput
          name="url3"
          label="Third Image Url"
          type="text"
          value={url3}
          onChange={changeHandler}
        />
        <FormInput
          name="url4"
          label="Fourth Image Url"
          type="text"
          value={url4}
          onChange={changeHandler}
        />
        <div className="select_container">
          <p className="select_label">Choose a category:</p>
          <select
            className="select_input"
            name="category"
            id="category"
            onChange={changeHandler}
            value={category}
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
          value={stock}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default ProductForm;
