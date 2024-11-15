import React, { useEffect } from 'react'
import PaymentCard from '../PaymentCard/PaymentCard'
import data from "../../db.json"
import './paymentplan.css'
function PaymentPlan() {


  return (
    <>
      <section className='container-fluid payment py-5 ' id="projects" style={{paddingTop:"100px"}}>
        <h1 className='text-center mb-5'>Plans</h1>
        <div className="row">
        <PaymentCard/>
        <PaymentCard/>
        <PaymentCard/>
        </div>
        
      </section>
    </>
  )
}

export default PaymentPlan
