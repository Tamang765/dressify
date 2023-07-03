import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { FaMoneyCheckAlt, FaWallet } from "react-icons/fa";

const Payment = ({ isVisible, handleCancelClick }) => {
  const [selectedMethod, setSelectedMethod] = useState("debitCreditCard");
  const handleMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    
  };
  return (
    <>
      {" "}
      {isVisible && (
        <div className="shipping">
          <div className="methods">
            <div className="method1">
              <div className="payment d-flex align-items-center gap-4">
                <Form.Check
                  type="radio"
                  aria-label="radio 1"
                  name="radioGroup"
                  className="fs-4"
                  id="inline-radio-1"
                  value="debitCreditCard"
                  checked={selectedMethod === "debitCreditCard"}
                  onChange={handleMethodChange}
                />
                <div className="payment-logo">
                  <FaMoneyCheckAlt className="fs-2" />
                </div>
                <span>Debit /Credit Card</span>
              </div>
              {selectedMethod === "debitCreditCard" && (
                <div className="content payment-method1 d-flex align-items-center ">
                  <div className="method w-100">
                    <div className="card-details">
                      <form className="d-flex flex-column gap-4">
                        <div className="d-flex flex-column">
                          <label>Card number</label>
                          <input type="text" />
                        </div>
                        <div className="d-flex flex-column">
                          <label>Name of Card</label>
                          <input type="email" />
                        </div>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex  flex-column w-75">
                            <label>Expiration date (MM/YY)</label>
                            <input type="date" placeholder="MM/YY" />
                          </div>
                          <div className="d-flex  flex-column w-25">
                            <label>CVC</label>
                            <input type="text" placeholder="CVC" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="method2 mt-3">
              <div className="internet-banking">
                <div className="payment d-flex align-items-center gap-4">
                  <Form.Check
                    type="radio"
                    aria-label="radio 2"
                    name="radioGroup"
                    className="fs-4"
                    id="inline-radio-2"
                    value="bankdetails"
                    checked={selectedMethod === "bankdetails"}
                    onChange={handleMethodChange}
                  />
                  <div className="payment-logo">
                    <FaMoneyCheckAlt className="fs-2" />
                  </div>
                  <span>Internet Banking</span>
                </div>
                {selectedMethod === "bankdetails" && (
                  <div className=" content bank-details mt-4 d-flex flex-column gap-1">
                    <small className="text-muted">
                      Your order will be delivered to you after you transfer to:{" "}
                    </small>

                    <strong className="fs-5">Casdalsdl</strong>
                    <div className="details">
                      <div>
                        <label className="text-muted">
                          Bank name: <span>Adasd Bank</span>
                        </label>
                      </div>
                      <div>
                        <label className="text-muted">
                          Account Number: <span>123123 123124 1231</span>
                        </label>
                      </div>
                      <div>
                        <label className="text-muted">
                          Sort Code: <span>111</span>
                        </label>
                      </div>
                      <div>
                        <label className="text-muted">
                          IBAN: <span>IBAN</span>
                        </label>
                      </div>
                      <div>
                        <label className="text-muted">
                          BIC /Swift: <span>BIC/SWIFT</span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="method3 mt-3">
              <div className="apple-wallet">
                <div className="payment d-flex align-items-center gap-4">
                  <Form.Check
                    type="radio"
                    aria-label="radio 3"
                    name="radioGroup"
                    className="fs-4"
                    value="walletdetails"
                    id="inline-radio-3"
                    checked={selectedMethod === "walletdetails"}
                    onChange={handleMethodChange}
                  />
                  <div className="payment-logo">
                    <FaWallet className="fs-2" />
                  </div>
                  <span>Google / Apple Wallet</span>
                </div>

                {selectedMethod === "walletdetails" && (
                  <div className="content wallet-details mt-4">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Itaque dolore quod quas fugit perspiciatis architecto,
                      temporibus quos ducimus libero explicabo?
                    </p>
                  </div>
                )}
              </div>
            </div>
            <div className="btns-group d-flex align-items-center gap-5 mt-4">
              <button className="btn-checkout">Confirm Order</button>
              <button className="btn-cancels" onClick={handleCancelClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Payment;
