import React, { useRef } from "react";
import "./featurecard.css"; // Add your CSS here

const FeatureCard = ({img,title,description}) => {
  return (
    <>
      <div className="col-md-4 col-12 ">
        <div class="feature-card card text-white mt-5 ">
          <img src={img} class="card-img-top rounded-4  " alt="..." style={{height:"18rem"}} />
          <div class="card-body">
            <h2 class="card-title text-center">{title}</h2>
            <p class="card-text">
         {description}
            </p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
