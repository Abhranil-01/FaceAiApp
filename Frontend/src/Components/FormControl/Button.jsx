import React from 'react'

function Button({type="submit",text}) {
  return (
   <div className='d-flex justify-content-center '>
     <button type={type} class="btn btn-primary w-50 align-self-center fw-bold fs-5" >{text}</button>
   </div>
  
  )
}

export default Button
