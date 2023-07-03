import React, { useState } from "react";
import KidsData from "../../../Data/KidsData";
import "./Trendman.scss";
import FilterPage from "../../Categories/Man/Dumb";
import Newarrivalsdata from "../../../Data/Newarrivalsdata";
const Kidscategory = ({ handleClick, searchmancat }) => {
  const filterKids= Newarrivalsdata.filter((item)=>item.genderCategory === "Kid")
  const colors = [...new Set(Newarrivalsdata.flatMap(item => item.variation.map(variant => variant.color)))];
  const [active, setActive] = useState(
    Array(KidsData.length).fill(false)
  );
  return (
    <>
      <FilterPage dataof={filterKids} filtercolor={colors} title="Kids"/>
    </>
  );
};
export default Kidscategory;
