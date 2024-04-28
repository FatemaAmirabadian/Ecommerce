import Link from "next/link";
import React from "react";

function products() {  

  return (
    <div className="form_container">
      <Link href={"/admin/productmanagement/newProduct"}><div  className="form_title">add new product</div></Link>
      <Link href={'/admin/productmanagement/manageProducts'}><div className="form_title">manage all products</div></Link>
    </div>
  );
}

export default products;
