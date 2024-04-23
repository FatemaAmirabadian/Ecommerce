"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import EditForm from "@/components/templates/EditForm";

function page(context) {
  const router = useRouter();
  const id = context.params.productId;
 
  const [editForm, setEditForm] = useState({
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
  
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`http://localhost:3000/api/product/${id}`);
      const data = await res.json();
      const product = data.data;
      setEditForm(product); // Set editForm to the fetched product data
    }
    fetchProduct();
  }, []);
  
  
console.log(editForm); 

  const cancelHandler = () => {
    router.push("/");
  };

  const saveHandler = async () => {
    const res = await fetch(`http://localhost:3000/api/product/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify(editForm),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (!data.error) {
      router.push('/admin/productmanagement/manageProducts')
      router.refresh();
    }
  };

  return (
    <div className="form_container">
      <div className="form_title">edit product</div>
      <EditForm editForm={editForm} setEditForm={setEditForm} />
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
