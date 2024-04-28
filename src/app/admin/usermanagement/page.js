import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="form_container">
      <Link href={"/admin/usermanagement/manageUsers"}>
        <div className="form_title">manage all users</div>
      </Link>
    </div>
  );
}

export default page;
