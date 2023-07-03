import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, ModalTitle } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import Reviews from "../../../Data/Reviews";
import "./Allreviews.scss";
const Allreviews = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="container allreview">
      <button onClick={() => setShow(true)} className="modal-opener">Show me all 21 reviews</button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        contentClassName="modal-width"
        aria-labelledby="review-modal"
      >
        <ModalHeader closeButton>
          <ModalTitle id="review-modal" className="fs-6">View all reviews</ModalTitle>
        </ModalHeader>
        <ModalBody className="d-flex justify-content-center flex-wrap">
          {Reviews.map((item, index) => (
            <div className=" reviewer col-6  d-flex flex-column gap-4 ">
              <div className="reviewer-details d-flex align-items-center">
                <div className="updates-by d-flex align-items-center">
                  <img src={item.img} alt="" />
                  <div className="reviewer d-flex flex-column">
                    <strong className="name">{item.replier}</strong>
                    <small className="date">
                      {item.date} <span />
                      <span>6 min read</span>
                    </small>
                  </div>
                </div>
                <div className="rating d-flex">
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                  <AiFillStar color="orange" />
                </div>
              </div>
              <p>{item.review}</p>
            </div>
          ))}
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Allreviews;
