import {
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import InputBox from "../InputBox/InputBox";
import Textarea from "../TextArea/Textarea";
import emailjs from "@emailjs/browser";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contactUs.css'
function ContactMe() {
 
  const formRef = useRef();

  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result);
          toast.success("Message Sent Successfully ");
          formRef.current.reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error("Message Not Sent ");
          formRef.current.reset()
        }
      );
  };

  return (
    <>
      <section
        className="container-fluid contact py-5 "
        id="contact"

      >
        <h1 className="text-white text-center mb-3">
          Contact <span className="text-warning">Me</span>
        </h1>

        <div className="row justify-content-center flex-md-row flex-column-reverse gap-2">
          <div className="col-md-5">
            <form ref={formRef} onSubmit={sendEmail}>
              <InputBox
                type="text"
                label="Enter Your Name"
                name="user_name"
              />
              <InputBox
                type="email"
                label="Enter Your Email"
                name="user_email"
              />
              <Textarea
                label="Enter Message"
                name="message"
              />
              <button className="btn btn-light fw-bold mt-3 w-100" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-3">
            <h2 className="text-warning">Get In Touch</h2>
            <p className="text-white fw-bolder">
              If You Have Any Query Or Want To Know More About Me Feel Free &
              Ask.
            </p>
            <div className="d-flex gap-4">
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
        </div>
      </section>
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Slide}
/>
    </>
  );
}

export default ContactMe;
