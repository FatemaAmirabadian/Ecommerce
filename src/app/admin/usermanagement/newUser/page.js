"use client";
import React from "react";
import Form from "../../../components/authentication/Form";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function page() {
  const router = useRouter();

  const handleSignUp = async (formData) => {
    const { email, password, confirmPassword } = formData;

    try {
      const res = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: JSON.stringify({ email, password}),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.status === 400 && data.error === "user already exists") {
        toast.error("User with this email already exists.");
        return;
      }

      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }

      if (res.status === 201) {
        toast.success("Sign up successful!");
        router.push("/");
      } else {
        toast.error("Sign up failed. Please try again.");
      }
    } catch (error) {
      toast.error("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign up</h1>
        <Form onSubmit={handleSignUp} />
      </div>
      <ToastContainer />
    </div>
  );
}

export default page;
