import React from "react";
import './paymentCard.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons"
function PaymentCard() {
  return (
    <>
    <div className="col-md-4">
    <div class="card text-white d-flex align-items-center justify-content-center pb-3  " style={{height:"25rem"}}>
        <div class="card-body  ">
          <h5 class="card-title text-center"><span style={{fontSize:"70px"}}>5$</span>/month</h5>
    <ul className="me-4">
      <li className=" list-unstyled"><span className="me-3"><FontAwesomeIcon icon={faCircleCheck} /></span>Lorem ipsum dolor sit amet.</li>
      <li className=" list-unstyled"><span className="me-3"><FontAwesomeIcon icon={faCircleCheck} /></span>Lorem ipsum dolor sit amet.</li>
      <li className=" list-unstyled"><span className="me-3"><FontAwesomeIcon icon={faCircleCheck} /></span>Lorem ipsum dolor sit amet.</li>
      <li className=" list-unstyled"><span className="me-3"><FontAwesomeIcon icon={faCircleCheck} /></span>Lorem ipsum dolor sit amet.</li>
      <li className=" list-unstyled"><span className="me-3"><FontAwesomeIcon icon={faCircleCheck} /></span>Lorem ipsum dolor sit amet.</li>
      <li className=" list-unstyled"><span className="me-3"><FontAwesomeIcon icon={faCircleCheck} /></span>Lorem ipsum dolor sit amet.</li>
    </ul>
     
        </div>
        <button className="pay-button btn">Buy</button>
      </div>
    </div>

    </>
  );
}

export default PaymentCard;
