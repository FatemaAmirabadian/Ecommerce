import React from "react";
import ProductCard from "../modules/ProductCard";
import connectDB from "@/utils/connectDB";
import Product from "@/models/Product";

async function ManageProducts() {
  await connectDB();
  const res = await Product.find();
  const data = JSON.stringify(res);
  const products=JSON.parse(data)
  return (
    <>
      <div className="text-center my-10 text-3xl">all products</div>
      <div>
        {products.map((product) => (
          <div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
}

export default ManageProducts;
