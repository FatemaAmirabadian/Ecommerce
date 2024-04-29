import React from "react";
import Link from "next/link";

function Products() {  

  return (
    <div className="max-w-lg mx-auto mt-4">
      <Link href="/admin/productmanagement/newProduct">
        <span className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md mb-4">
          Add New Product
        </span>
      </Link>
      <Link href="/admin/productmanagement/manageProducts">
        <span className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md">
          Manage All Products
        </span>
      </Link>
    </div>
  );
}

export default Products;
