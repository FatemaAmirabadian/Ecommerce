import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },

  url1: {
    type: String,
    required: true,
  },

  url2: {
    type: String,
    // required: true,
  },

  url3: {
    type: String,
    // required: true,
  },

  url4: {
    type: String,
    // required: true,
  },

  category: {
    type: String,
    // required: true,
    enum: {
      values: [
        "Electronic",
        "Camera",
        "Laptop",
        "Accessories",
        "Headphone",
        "Food",
        "Book",
        "Cloth",
        "Shoe",
        "Beauty/Health",
        "Sports",
        "Home",
      ],
    },
  },
  stock: {
    type: Number,
    // required: true,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: { type: Date, default: () => Date.now() },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
