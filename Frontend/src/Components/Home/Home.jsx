import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./home.css";
import {faUpload} from "@fortawesome/free-solid-svg-icons"


function Home() {
  return (
    <section className="container-fluid text-white home  " id="home">
     <div className="row text-center px-5 align-items-center  h-100">
      <div className="col-12">
      <div class="content">
  <h1 class="title">FacesearchAI
    <div class="aurora">
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
      <div class="aurora__item"></div>
    </div>
  </h1>
 
</div>
      <p>Use a single photo to find all the images of yourself on the internet.</p>
      <button><span className="me-3"><FontAwesomeIcon icon={faUpload} /></span>Uplod Image</button>
      </div>

     </div>

    </section>
    
  );
}

export default Home;
