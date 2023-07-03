import React from 'react'
import { BsBellFill, BsFillPersonFill, BsSearch } from "react-icons/bs";
import { FcInfo } from "react-icons/fc";
import accountholder from "../../../../media/News/news-author.jpg";
const Searchbar = () => {
  return (
    <div className="dashboard-section d-flex justify-content-between mt-1  align-items-center">
    <div
      className="position-relative d-flex align-items-center"
      style={{ paddingRight: "2.38rem" }}
    >
      <input
        type="text"
        placeholder="Search"
        style={{
          width: "33rem",
          border: "1px solid lightgrey",
          height: "5vh",
          paddingInline: "1rem",
          outline: "none",
          borderStartStartRadius: "10px",
          borderBottomLeftRadius: "10px",
        }}
      />
      <BsSearch
        className="position-absolute fs-1 px-2"
        style={{
          width: "2vw",
          right: 0,
          background: "#EEEEEE",
          height: "96%",
          borderRadius:"1px"
        }}
      />
    </div>
    <div className="account-section d-flex align-items-center gap-4 px-5">
      <FcInfo className="fs-3" />
      <BsBellFill className="fs-3" />
      <div className="d-flex align-items-center gap-4">
        <div className="d-flex flex-column">
          <strong>Noone</strong>
          <small>Admin profile</small>
        </div>
        <div>
          <img
            src={accountholder}
            alt=""
            style={{ borderRadius: "50%", width: "3.1rem" }}
          />
        </div>
      </div>
    </div>
      </div>
  )
}

export default Searchbar