import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="max-w-lg mx-auto mt-4">
      <Link href="/admin/usermanagement/manageUsers">
        <span className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md">
          Manage All Users
        </span>
      </Link>
    </div>
  );
}

export default Page;
