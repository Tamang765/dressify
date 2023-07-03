import React from "react";
import { BsArrowRight } from "react-icons/bs";
import boy from "../../media/offers/boy.jpg";
import "./Offers.scss";
const Offers = () => {
  return (
    <div className="container-fluid offers">
      <div className="container" style={{backgroundColor:"#F8FAFC",borderRadius:"20px",paddingTop:"1rem"}}>
        <div className="d-flex offer-details flex-wrap">
          <div className="description col-md-6 col-sm-12 " >
            <h2 className="fw-bolder">
              Don't miss out on <br /> special offers
            </h2>
            <small>
              Register to receive news about the latest, savings combos,
              discount codes...
            </small>
            <ul className="p-0 my-4">
              <li>
                <span>01</span><small>Saving Combos</small> 
              </li>
              <li>
                <span>02</span><small>Saving Combos</small>
              </li>
              <li>
                <span>03</span> <small>Saving Combos</small>
              </li>
            </ul>
            <div className="position-relative w-50">
              <button type="submit" className="position-absolute">
                <BsArrowRight color="white"/>
              </button>
              <input type="text" placeholder="enter your email"/>
            </div>
          </div>
          <div className="img-container  col-sm-12 d-flex justify-content-center">
          <img src={boy} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Offers;
