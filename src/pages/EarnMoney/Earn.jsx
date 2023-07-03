import React from "react";
import crulia from "../../media/Crulia/crulia.jpg";
import "./Earn.scss";
import logo from "../../media/New folder/logo.svg";
const Earn = () => {
  return (
    <div className="earnmoney container d-flex">
      <div className="earn-description">
        <span>
          <img src={logo} alt="" />
        </span>
        <br />
        <br />
        <h2 className="d-flex">Earn Free Money With Ciseco</h2>
        <br />
        <p>with Ciseco you will get freeship & savings combo...</p>
        <div className="combo-button">
          {" "}
          <button className="text-white border-0"><small>Discover more</small></button>
        </div>
      </div>
      <div>
        <img src={crulia} alt="" />
      </div>
    </div>
  );
};

export default Earn;
