import React, { useState } from "react";
import "./loginregister.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Login from "../Login/Login";
import Register from "../Register/Register";
function LoginRegister() {
  const [addClass, setAddClass] = useState("");
  const [boxClose,setBoxClose] = useState("")
  const showRegister = () => {
    setAddClass("active");
  };
  const showLogin = () => {
    setAddClass("");
  };
  const closeBox=()=>{

    setBoxClose(true)
  }
  return (
    <>{
      !boxClose?(<section
        className=" container-fluid position-fixed vh-100 top-0 bg-white login-register text-white py-2 z-3"
        style={{ left: "50%" }}
      >
        <div className="row">
          <div className="col-md-6">
          <span onClick={closeBox} style={{zIndex:"999"}}><FontAwesomeIcon icon={faXmark}/></span>
          </div>
        
          {/* Login */}
          <div
            className={`login-box ${addClass}    col-md-6 p-0 position-absolute `}
      
          >
            <div className="w-100  logo d-flex justify-content-between px-3 pt-2"></div>
            <div
              className=" container  d-flex flex-column align-items-center justify-content-center gap-3 "
              style={{ height: "100vh" }}
            >
              <h1>Welcome Again</h1>
              <span>
                Don't have any account?{" "}
                <span
                  className="text-primary fw-bold fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={showRegister}
                >
                  Register
                </span>
              </span>
              <Login />
            </div>
          </div>
          {/* Login End */}
          {/* Register */}
          <div
            className={`register-box  h-100  ${addClass} col-md-6 p-0 position-absolute`}
            style={{ zIndex: "999" }}
          >
            <div
              className=" container  d-flex flex-column align-items-center justify-content-center gap-3 "
              style={{ height: "90vh" }}
            >
              <h1>Welcome</h1>
              <span>
                Already have an account?{" "}
                <span
                  className="text-primary fw-bold fs-5"
                  style={{ cursor: "pointer" }}
                  onClick={showLogin}
                >
                  Login
                </span>
              </span>
              <Register />
            </div>
          </div>
          {/* Register End */}
        </div>
      </section>):(null)
    }
      
    </>
  );
}

export default LoginRegister;
