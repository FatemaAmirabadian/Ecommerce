import { Schema, model, models } from "mongoose";

const productSchema = new Schema({
  id: {
    type: String,
    // required: true,
  },
  title: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  category: {
    type: String,
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  rating: {
    rate: {
      type: String,
      // required: true,
    },
    count: {
      type: String,
      // required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = models.Product || model("Product", productSchema);
export default Product;
