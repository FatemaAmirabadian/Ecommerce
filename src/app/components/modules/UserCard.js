import React from "react";

function UserCard({ user }) {
  console.log({ user });
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-5 mx-auto md:p-6 lg:p-8">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <div className="text-lg">{user.email}</div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <div className="text-lg max-w-sm overflow-hidden">{user.password}</div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="firstName">
          First Name
        </label>
        <div className="text-lg">{user.firstName}</div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2" htmlFor="lastName">
          Last Name
        </label>
        <div className="text-lg">{user.lastName}</div>
      </div>
    </div>
  );
}

export default UserCard;
