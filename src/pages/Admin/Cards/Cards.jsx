import React from "react";

const Cards = ({ items}) => {
  return (
    <div className="cards">
      <div
        className="card d-flex  flex-row justify-content-between align-items-center px-3"
        style={{ width:  "32rem", paddingBlock: "19px",border:"1px solid #efeaea" }}
        key={items.id}
      >
        <div className="d-flex flex-column">
          <span className="text-muted">{items.DataName}</span>
          <strong>{items.Data}</strong>
        </div>
        <div className="d-flex">
          <img src={items.img.default} alt="" style={{ width: "2.2rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
