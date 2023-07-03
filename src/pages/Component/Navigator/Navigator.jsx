import React, { useState } from "react";
import { Container, Dropdown } from "react-bootstrap";
import "./Navigator.scss";
import Filter from "../Filter/Filter";
const Navigator = ({
  heading,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  toggle1,
  toggle2,
  toggle3,
  item1_icon,
  item6_icon,
  item2_icon,
  item3_icon,
  item4_icon,
  item5_icon,
  toggle4,
  toggle5,
  toggle6,
  filtericon,
  filterName,
  filterDown,
  filterUp,
}) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [icon, setIcon] = useState(false);
  const handleIcon = () => setIcon(!icon);
  const [show, setShow] = useState(false);
  const Shower = () => {
    return setShow(!show);
  };
  return (
    <div>
      <Container fluid className="navigator  d-flex">
        <div className="startexplore text-center w-100">
          <h2>{heading}</h2>
          <br />
          <div className="explore justify-content-between d-flex mt-9 w-100 align-items-center">
            <div className="select-explore d-flex align-items-center justify-content-center w-100">
              <div
                className="bloc-tabs"
                style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
              >
                <div
                  className={
                    toggleState === 1
                      ? "btn tabs active-tabs  gap-3 "
                      : "btn tabs d-flex gap-3"
                  }
                  onClick={() => toggleTab(1)}
                >
                  <small>
                    {item1_icon} {item1}
                  </small>
                </div>
                <div
                  className={
                    toggleState === 2
                      ? "btn tabs active-tabs gap-3"
                      : " btn tabs gap-3"
                  }
                  onClick={() => toggleTab(2)}
                >
                  <small>
                    {item2_icon} {item2}
                  </small>
                </div>
                <div
                  className={
                    toggleState === 3
                      ? "btn tabs active-tabs gap-3"
                      : "btn tabs gap-3"
                  }
                  onClick={() => toggleTab(3)}
                >
                  <small>
                    {item3_icon} {item3}
                  </small>
                </div>
                <div
                  className={
                    toggleState === 4
                      ? "btn tabs active-tabs gap-3"
                      : "btn tabs gap-3"
                  }
                  onClick={() => toggleTab(4)}
                >
                  <small>
                    {item4_icon} {item4}
                  </small>
                </div>
                <div
                  className={
                    toggleState === 5
                      ? "btn tabs active-tabs gap-3"
                      : "btn tabs gap-3"
                  }
                  onClick={() => toggleTab(5)}
                >
                  <small>
                    {item5_icon} {item5}
                  </small>
                </div>
                <div
                  className={
                    toggleState === 6
                      ? "btn tabs active-tabs gap-3"
                      : "btn tabs gap-3"
                  }
                  onClick={() => toggleTab(6)}
                >
                  <small>
                    {item6_icon} {item6}
                  </small>
                </div>
              </div>
            </div>
            {/* <div
              className="btn btn-filter d-flex align-items-center gap-1"
              onClick={Shower}
            >
              {filtericon}
              {filterName}
              <div className="filterup-down">{filterUp}</div>
            </div> */}
          </div>
          <div
            className={show ? "active-category mt-3" : "deactive-category mt-3"}
          >
            <br />
            <hr />
            <Filter />
          </div>
        </div>
      </Container>
      <div className="content-area mt-2">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="home-section d-flex justify-content-center">
            {toggle1}
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          {toggle2}
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          {toggle3}
        </div>
        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        >
          {toggle4}
        </div>
        <div
          className={toggleState === 5 ? "content active-content" : "content"}
        >
          {toggle5}
        </div>
        <div
          className={toggleState === 6 ? "content active-content" : "content"}
        >
          {toggle6}
        </div>
      </div>
    </div>
  );
};

export default Navigator;
