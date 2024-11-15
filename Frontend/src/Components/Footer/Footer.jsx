import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className=" text-white pt-5 pb-4 ">
        <div className="container-fluid tet-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-6 col-12 d-flex flex-column align-content-center justify-content-center">
              <h3>In Partnership with</h3>
              <div>
                <img src="\Images\My image\pv-logo-min.png" alt="" className=" img-fluid" />

              </div>
              <div className="mt-5"><p>facesearchai@gmail.com</p></div>
              <hr />
              <div className="d-flex justify-content-center gap-4">
              <div className="text-white fs-3">
            
            <a href="mailto:abhranilkundu06@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white ">   <FontAwesomeIcon icon={faEnvelope} /></a>
          </div>
          <div className="text-white fs-3">
            <a href="https://www.linkedin.com/in/abhranil06/"  target="_blank" rel="noopener noreferrer" className="text-white "><FontAwesomeIcon icon={faLinkedin} /></a> 
          </div>
          <div className="text-white fs-3">
           <a href="https://github.com/Abhranil-01?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white "> <FontAwesomeIcon icon={faGithub} /></a>
          </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <img src="\Images\My image\guybook-p-500.png" className=" img-fluid" alt="" />
              </div>
            </div>

            <hr className="mb-4" />

            <div className="row align-items-center">
              <div className="col-md-7 col-lg-8 ">
                <p className="text-white">
                  Copyright @2024 All rights reserved by:
                  <span style={{ textDecoration: "none" }}>
                    <strong className="text-warning">Abhranil Kundu</strong>
                  </span>
                </p>
              </div>
              <div className="col-md-5 col-lg-4">
                <div className="text-center text-md-right">
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      {/* <Link  className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}>
                                                <FontAwesomeIcon icon={faLinkedin} />
                                                </Link> */}
                    </li>
                    <li className="list-inline-item">
                      {/* <Link  className="btn-floating btn-sm text-white" style={{fontSize:'23px'}}>
                                                <FontAwesomeIcon icon={faGithub} />
                                                </Link> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
