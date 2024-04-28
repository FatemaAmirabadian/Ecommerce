import React from "react";
import UserCard from "../../../components/modules/UserCard";

async function page() {
  const res = await fetch("https://crm-pi-ten.vercel.app/api/user", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await res.json();
  const users = await data.data;

  return (
    <div>
      <div className="text-center my-10 text-3xl">all users</div>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <UserCard user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
