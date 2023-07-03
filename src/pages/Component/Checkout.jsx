import React, { useReducer, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { GiCheckMark } from "react-icons/gi";
import { GrCheckmark } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import CheckoutData from "../../Data/CheckoutData";
import { FaMoneyCheckAlt, FaRegWindowRestore } from "react-icons/fa";
import "./Checkout.scss";
import { Collapse, Form } from "react-bootstrap";
import { FaWallet } from "react-icons/fa";
import ContactInfo from "./Contact/ContactInfo";
import PaymentMethod from "./PaymentMethod/PaymentMethod";
import ShippingDetails from "./Shipping/ShippingDetails";

const Checkout = () => {
  const [open, setOpen] = useState(-1);

  const opener = (index) => {
    setOpen(open === index ? -1 : index);
  setIsVisible(true)
  };
 
    const [isVisible, setIsVisible] = useState(true);
  
    const handleCancelClick = () => {
      setIsVisible(false);
    };
  
  return (
    <div className="checkout col-7">
      <div className="contact-info">
        {CheckoutData.map((item, index) => (
          <div
            className="person-info mt-3 d-flex align-items-center justify-content-between flex-column"
            key={index}
          >
            <div className="w-100 d-flex justify-content-between">
              <div className="info d-flex flex-column">
                <div className="d-flex align-items-center gap-4">
                  {item.icon}
                  <div className="d-flex flex-column ">
                    <small className="d-flex gap-2">
                      {item.heading}{" "}
                      <span>
                        <GrCheckmark />
                      </span>
                    </small>
                    <span className="name fs-7">
                      {item.address
                        ? item.address
                        : item.payment
                        ? item.payment
                        : item.name
                        ? item.name
                        : " "}
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="border-0 p-2 bg-white"
                onClick={() => opener(index)}
                aria-expanded={open === index} 
                id={index}
              >
                Change
              </button>
            </div>
            {open === index && (
              <div className="active">
                <hr />
                {index === 0 && <ContactInfo isVisible={isVisible} handleCancelClick={ handleCancelClick} />}
                {index === 1 && <ShippingDetails isVisible={isVisible} handleCancelClick={ handleCancelClick} />}
                {index === 2 && <PaymentMethod isVisible={isVisible} handleCancelClick={ handleCancelClick} />}
              </div>
            )}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Checkout;
