import React from "react";
import './inputbox.css'
function InputBox({ type = "text", label, name}) {
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label text-white">
          {label}
        </label>
        <input
          type={type}
          class="form-control bg-transparent text-white"
          id="exampleFormControlInput1"
          name={name}
        />
      </div>
    </>
  );
}

export default InputBox;
