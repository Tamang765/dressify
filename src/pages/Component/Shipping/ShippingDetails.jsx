import React, { useReducer, useState } from "react";
import { Form, FormCheck, FormGroup } from "react-bootstrap";
import "./ShippingDetails.scss";
const ShippingDetails = ({ isVisible, handleCancelClick }) => {
  return (
    <>
      {isVisible && (
        <div className="shipping-details">
          <Form className="d-flex flex-column gap-3">
            <FormGroup className="d-flex gap-3">
              <div className="w-50">
                <label>First Name</label>
                <input type="text" placeholder="" />
              </div>
              <div className="w-50">
                <label>Last Name</label>
                <input type="text" placeholder="" />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3">
              <div className="w-75 d-flex flex-column">
                <label>Address</label>
                <input type="text" placeholder="" />
              </div>
              <div className="w-25">
                <label>Apt, Suite *</label>
                <input type="text" placeholder="" />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3">
              <div className="w-50 d-flex flex-column">
                <label>City</label>
                <input type="text" placeholder="" />
              </div>
              <div className="w-50">
                <label>Country</label>
                <Form.Select>
                  <option>Nepal</option>
                  <option>Nepal</option>
                  <option>US</option>
                </Form.Select>
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3">
              <div className="w-50">
                <label>State /Province</label>
                <input type="text" placeholder="" />
              </div>
              <div className="w-50">
                <label>Postal code</label>
                <input type="text" placeholder="" />
              </div>
            </FormGroup>
            <div className="radiobtns d-flex ">
              <FormGroup className="w-50">
                <label>Address Type</label>
                <div className="d-flex align-items-center gap-2">
                  <Form.Check
                    type="radio"
                    aria-label="radio 2"
                    name="radioGroup"
                    id="inline-radio-1"
                  />{" "}
                  <span> Home All Day</span>
                </div>
              </FormGroup>
              <FormGroup className="w-50">
                <label>Address Type</label>
                <div className="d-flex align-items-center gap-2">
                  <Form.Check
                    type="radio"
                    aria-label="radio 2"
                    name="radioGroup"
                    id="inline-radio-2"
                  />{" "}
                  <span>Office (Delivery 9AM - 5 PM)</span>
                </div>
              </FormGroup>
            </div>
          </Form>
          <div className="btns-group d-flex align-items-center gap-5 mt-5 p-0">
            <button className="btn-checkout">Confirm Order</button>
            <button className="btn-cancels" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
};
export default ShippingDetails;
