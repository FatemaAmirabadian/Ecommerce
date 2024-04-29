import React from "react";
import ProductCard from "@/app/components/modules/ProductCard";

async function page() {
  const res = await fetch("https://crm-pi-ten.vercel.app/api/product", {
    method: "GET",
    cache: "no-store",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  const products = await data.data;
  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default page;
