import React from "react";
import { Form } from "react-bootstrap";
import choose from "../../../media/News/news-author.jpg";
import addimg from "../../../media/addimg.svg";
import { BiImageAdd } from "react-icons/bi";
import "./Accountform.scss"
const AccountForm = () => {
  return (
    <><div className="adminaccount-form container">
          <h2>Account Information</h2>
          <div className="account-info my-5">
              <div className="form-img d-flex gap-3">
                  <div className="admin-img position-relative">
                      <img src={choose} alt="" />
                      <div className="overlapper position-absolute top-7 d-flex flex-column">
                          <BiImageAdd color="white" className="fs-3" />
                          <small className=" text-light">Change image</small>
                          <input type="file" />
                      </div>
                  </div>
                  <div className="form d-flex flex-column gap-3 w-75">
                      <div>
                          <label htmlFor="">Full Name</label>
                          <Form.Control type="text" placeholder="name" />
                      </div>
                      <div>
                          <label htmlFor="">Email</label>
                          <Form.Control type="email" placeholder="asd@gmail.com" />
                      </div>
                      <div>
                          <label>Date of birth</label>
                          <Form.Control type="date" />
                      </div>
                      <div>
                          <label htmlFor="">Address</label>
                          <Form.Control type="text" placeholder="Kathmandu,Nepal" />
                      </div>
                      <div>
                          <Form.Group>
                              <label>Gender</label>
                              <Form.Select>
                                  <option>Male</option>
                                  <option>Female</option>
                                  <option>others</option>
                              </Form.Select>
                          </Form.Group>
                      </div>
                      <div>
                          <label htmlFor="">Phone Number</label>
                          <Form.Control type="number" placeholder="2134134" />
                      </div>
                      <div className="d-flex flex-column">
                          <label htmlFor="">About You</label>
                          <Form.Control as="textarea" />
                      </div>
                      <button className="text-light">Update account</button>
                  </div>
              </div>
          </div>
      </div></>
  );
};

export default AccountForm;
