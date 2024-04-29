"use client";
import React from "react";

function UserCard({ user }) {
  console.log({user});
  return (
    <div className="product_card flex">
        <div>{user.email}</div>
        <div>{user.password}</div>
        <div>{user.firstName}</div>
        <div>{user.lastName}</div>
      </div>
  );
}

export default UserCard;
