"use client";
import React from "react";

function FormInput({ name, label, type, value, onChange }) {
  return (
      <div className="form-input">
        <label className="form_input_label" htmlFor={name}>{label}</label>
        <input
        className="reusable_input"
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
  );
}

export default FormInput;
