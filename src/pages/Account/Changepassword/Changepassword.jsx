import React from 'react'
import { Form } from 'react-bootstrap'
import "./Changepassword.scss"
const Changepassword = () => {
  return (
      <div className='container-fluid update-password'>
          <h2>Update your password</h2>
          <div className='container my-5 d-flex flex-column gap-4'>
              <div>          
              <label htmlFor="">Current password</label>
              <Form.Control  type="password"/>
              </div>
              <div>          
              <label htmlFor="">New password</label>
              <Form.Control  type="password"/>
              </div>
              <div>          
              <label htmlFor="">Confirm password</label>
              <Form.Control  type="password"/>
              </div>
              <button>Update  password</button>
          </div>
    </div>
  )
}

export default Changepassword