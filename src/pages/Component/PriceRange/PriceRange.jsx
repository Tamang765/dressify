import React from "react";
import { useState } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

const PriceRange = ({
  min,
  max,
  setSearchValues,
  rangevalues,
  filterByPrice,
}) => {
  const [sliderValue, setSliderValue] = useState(rangevalues);

  const handleSliderChange = (value) => {
    setSliderValue(value);
    filterByPrice(value);
  };

  return (
    <div className="pt-3">
      <div className="w-75">

      <InputRange
        draggableTrack
        minValue={0}
        maxValue={500}
        value={sliderValue}
        onChange={handleSliderChange}
        formatLabel={() => ""}
      />
      </div>
      <div className="d-flex justify-content-between  mt-2 mb-5">
        <div className="d-flex flex-column w-75">
          <small>Min Price</small>
          <br />
          <div className="price-value w-75">
            <div className="d-flex justify-content-between">
              <small>Rs. {sliderValue?.min}</small>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column w-75">
          <small>Max Price</small>
          <br />
          <div className="price-value w-75">
            <div className="d-flex justify-content-between ">
              <small>Rs. {sliderValue?.max}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
