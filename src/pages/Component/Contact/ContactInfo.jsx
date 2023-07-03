import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ContactInfo = ({ handleCancelClick,isVisible}) => {

  return (
    <>
      {isVisible && (
        <div className='contact-info'  aria-controls="contact-info">
          <div className="contact-form">
            <div className="contact-information d-flex justify-content-between align-items-center">
              <h2>Contact Information</h2>
              <span>
                Do not have an account? <Link to="/login">Log in</Link>
              </span>
            </div>
          </div>
          <form className="d-flex flex-column gap-4">
            <div className="d-flex flex-column">
              <label>Your phone number</label>
              <input type="text" />
            </div>
            <div className="d-flex flex-column">
              <label>Email Address</label>
              <input type="email" />
            </div>
          </form> 
          <div className="btns-group d-flex align-items-center gap-5 mt-5 p-0" >     
            <button className="btn-checkout">Save and next to Shipping</button>
            <button className="btn-cancels" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}
export default ContactInfo;
