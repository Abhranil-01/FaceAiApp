import React from "react";
import './textarea.css'
function Textarea({ label ,name}) {
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label text-white">
          {label}
        </label>
        <textarea
          class="form-control bg-transparent text-white"
          id="exampleFormControlTextarea1"
          rows="3"
          style={{
            height:"150px",
            resize:"none",
          }}
          name={name}
        ></textarea>
      </div>
    </>
  );
}

export default Textarea;
