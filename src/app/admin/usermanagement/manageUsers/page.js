"use client";
import React, { useEffect, useState } from "react";
import UserCard from "../../../components/modules/UserCard";

function Page() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://crm-pi-ten.vercel.app/api/user", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          cache: "no-store",
        });
        const data = await res.json();
        setUsers(data.data);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-4">
      <div className="text-center my-10 text-3xl font-bold">All Users</div>
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

export default Page;
