import React, { useState } from "react";
import { Form } from "react-bootstrap";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import TrendMan from "../../Trending/ManTrend/TrendMan";
import "./ManCategory.scss";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "./Category.scss"

const Category = ({title}) => {

  return (
    <div className="container-fluid category px-0">
      <div className="container man-category px-0">
        <div className="man-collection">
          <div className="collection-header w-50 py-4">
            <h2 className="fw-bold">{title} collection</h2>
            <small className="text-muted">
              We not only help you design exceptional products, but also make it
              easy for you to share your designs with more like-minded people.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
