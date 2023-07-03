import React, { useEffect, useState } from "react";
import Women from "../StartExploring/Women/Women";
import { FaAngleDoubleDown, FaDivide, FaFilter } from "react-icons/fa";
import { Button } from "bootstrap";
import "./Trending.scss";
import { Link } from "react-router-dom";
import { Dropdown, Form, InputGroup, Spinner } from "react-bootstrap";
import { TbNotes } from "react-icons/tb";
import { AiOutlineBgColors } from "react-icons/ai";
import { IoIosResize } from "react-icons/io";
import { RxCookie } from "react-icons/rx";
import RangeSlider from "react-range-slider-input/dist/components/RangeSlider";
import TrendMan from "./ManTrend/TrendMan";

const Trending = () => {
  const [toggleState, setToggleState] = useState(1);
  const [showMenu, setShowmenu] = useState(false);
  function clickTodrop() {
    setShowmenu(!showMenu);
  }
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(!open);
  };
  return (
    <div className="trending container-fluid mt-5 pt-5 d-flex flex-column align-items-center">
      <div className="container">
        <h2>What's trending Now</h2>
        <small>Discover the most trending products in Ciseco.</small>
      </div>
      <div className="container d-flex justify-content-between tabs align-items-center">
        <div className="trend-tabs d-flex py-5">
          <div
            className={toggleState === 1 ? "btn tabs active-tabs" : "btn tabs"}
            onClick={() => toggleTab(1)}
          >
            All Items
          </div>
          <div
            className={toggleState === 2 ? " btn tabs active-tabs" : "btn tabs"}
            onClick={() => toggleTab(2)}
          >
            Women
          </div>
          <div
            className={toggleState === 3 ? "btn tabs active-tabs" : "btn tabs"}
            onClick={() => toggleTab(3)}
          >
            Mens
          </div>
          <div
            className={toggleState === 4 ? "btn tabs active-tabs" : "btn tabs"}
            onClick={() => toggleTab(4)}
          >
            Kids
          </div>
          <div
            className={toggleState === 5 ? "btn tabs active-tabs" : "btn tabs"}
            onClick={() => toggleTab(5)}
          >
            Jewels
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <ul className="menu">
            <Dropdown>
              <Dropdown.Toggle>
                <IoIosResize /> Sort Order
              </Dropdown.Toggle>
              <Dropdown.Menu className="">
                <ul className="p-2 d-flex flex-column align-items-center">
                  <li className="d-flex gap-1">
                    <input type="checkbox" class="form-check-input" /> All
                    Categories
                  </li>
                  <li className="d-flex gap-1">
                    <input type="checkbox" class="form-check-input" /> All
                    Categories
                  </li>
                  <li className="d-flex gap-1">
                    <input type="checkbox" class="form-check-input" /> All
                    Categories
                  </li>
                  <li className="d-flex gap-1">
                    <input type="checkbox" class="form-check-input" /> All
                    Categories
                  </li>
                </ul>
              </Dropdown.Menu>
            </Dropdown>
          </ul>
        </div>
      </div>

      <div className="content-area container-fluid d-flex">
        <ul className="menu d-flex flex-column text-decoration-none gap-3">
          <div className="categories">
            <span className="d-flex pb-3 align-items-center gap-2">
              <TbNotes /> Categories
            </span>

            <div className="">
              <ul>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="Colors">
            <span className="d-flex pb-3 align-items-center gap-2">
              <AiOutlineBgColors />
              Colors
            </span>
            <div>
              <ul>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div>
            <span className="d-flex pb-3 align-items-center gap-2">
              <IoIosResize /> Size
            </span>
            <div className="filter">
              <ul>
                <li className="d-flex gap-1 ">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
                <li className="d-flex gap-1">
                  <input type="checkbox" class="form-check-input" /> All
                  Categories
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="price-range">
            <h2>Price Range</h2>

            <RangeSlider />
            <br />
            <div className="prices d-flex justify-content-between">
              <div className="price min-price d-flex flex-column">
                <label htmlFor="">Min Price</label>
                <div className="d-flex justify-content-between align-items-center">
                  196 <span>$</span>
                </div>
              </div>
              <div className="price max-price">
                <label htmlFor="">Max Price</label>
                <div className="d-flex justify-content-between align-items-center">
                  196 <span>$</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="on-sale d-flex justify-content-between">
              <div className="d-flex flex-column">
                <h3>On sale!</h3>
                <small>Products currently on sale</small>
              </div>
              <div class="form-check form-switch">
                <input
                  type="checkbox"
                  id="custom-switch"
                  class="form-check-input"
                />
              </div>
            </div>
            <hr />
          </div>
        </ul>
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <div className="active-section">
            <TrendMan />
          </div>
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        ></div>
      </div>

    </div>
  );
};
export default Trending;
