"use client";
import React from "react";
import FormInput from "../elements/FormInput";

function ProductForm({ productForm, setProductForm }) {
  const { id, title, price, description, category, image, rating } =
    productForm;
  const { rate, count } = rating;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "rating.rate" || name === "rating.count") {
      const [ratingKey, subKey] = name.split(".");
      setProductForm({
        ...productForm,
        [ratingKey]: {
          ...productForm[ratingKey],
          [subKey]: value,
        },
      });
    } else {
      setProductForm({ ...productForm, [name]: value });
    }
  };

  return (
    <div className="form_container">
      <form>
        <FormInput
          name="id"
          label="Id"
          type="number"
          value={id}
          onChange={changeHandler}
        />
        <FormInput
          name="title"
          label="Title"
          type="text"
          value={title}
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
          name="description"
          label="Description"
          type="text"
          value={description}
          onChange={changeHandler}
        />
        <FormInput
          name="category"
          label="Category"
          type="text"
          value={category}
          onChange={changeHandler}
        />
        <FormInput
          name="image"
          label="Image"
          type="text"
          value={image}
          onChange={changeHandler}
        />
        <FormInput
          name="rating.rate"
          label="Rating"
          type="number"
          value={rate}
          onChange={changeHandler}
        />

        <FormInput
          name="rating.count"
          label="Rating Count"
          type="number"
          value={count}
          onChange={changeHandler}
        />
      </form>
    </div>
  );
}

export default ProductForm;
