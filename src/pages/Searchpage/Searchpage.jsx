import React, { useState } from "react";
import {

  BsArrowRight,
  BsChevronDown,
  BsChevronUp,
  BsSearch,
} from "react-icons/bs";
import { HiFilter } from "react-icons/hi";
import "./Searchpage.scss";
import Navigator from "../Component/Navigator/Navigator";
import PriceRange from "../Component/PriceRange/PriceRange";
import TrendMan from "../Trending/ManTrend/TrendMan";
import Newarrivalsdata from "../../Data/Newarrivalsdata";
import KidsData from "../../Data/KidsData";
import SportData from "../../Data/SportData";
import Womendata from "../../Data/Womendata";
import Mendata from "../../Data/Mendata";
import FilterPage from "../Categories/Man/Dumb";
import { useParams } from "react-router-dom";
import CustomPage from "../Component/Common/CustomPage";
const Searchpage = () => {
  const allData = [...Newarrivalsdata];
  const product_head= useParams()
  const colors = [...new Set(allData.flatMap(item => item.variation ? item.variation.map(variant => variant.color) : []))];
  const [searchmancat, setManCat] = new useState(allData);
  const filterSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Convert search value to lowercase
    const updateSearch = allData.filter((item) => {
      return item.product_head.toLowerCase().indexOf(value) !== -1;
    });
    setManCat(updateSearch);
  };
  return (
    <div className="searchpage">
      <div className=" background-filler container-fluid ">
        <br />
        <br />
      </div>
      {/* <center>
        <div className="input-holder position-relative d-flex align-items-center ">
          <input type="search" placeholder="Type your keywords" onChange={filterSearch} />
          <BsSearch className="search-icon fs-3" />
          <button className="border-0 position-absolute right-0">
            <BsArrowRight className="fs-3  " color="white" />
          </button>
        </div>
      </center> */}
      {/* <div className="container navigator">
        <Navigator
          item1="All Item"
          item2="Women"
          item3="Man"
          item4="Jewels"
          item5="Kids"
          filtericon={<HiFilter />}
          filterName="Filter"
          filterUp={<BsChevronUp />}
          filterDown={<BsChevronDown />}
          toggle1={<TrendMan searchmancat={ searchmancat} />}
        />
      </div> */}
      <div className="mt-4 pt-1">
        <FilterPage dataof={searchmancat} title="Men" filtercolor={colors} />
      </div>
   
    </div>
  );
};

export default Searchpage;
