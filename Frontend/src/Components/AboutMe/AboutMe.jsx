import React, { useEffect } from "react";
import "./about.css";
import LazyLoad from "react-lazyload";

function AboutMe() {
  return (
    <>
      <section
        className=" container-fluid   text-white about-container py-5   "
        id="about"
      >
          <h1 className=" text-center fw-bold  ">
          About FacesearchAI
        </h1>
        <div className="row d-flex justify-content-center align-items-center pt-4 ">
          <div className="col-md-5 col-12">
            <p className="fs-4">
              It's an AI tool that can find any face across the web using an
              image or video. It provides the corresponding website link, name
              of the person, create a customized poem, and more. It can even
              find contact details (email and phone number) just by entering the
              person's name.
            </p>
          </div>
          <div className="col-md-5 col-12 ">
            <img className=" img-fluid"  src="\Images\My image\faceiamge-removebg-preview.png" alt="faceiamge" />
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
