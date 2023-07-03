import React, { useState } from "react";

import Newarrivalsdata from "../../../Data/Newarrivalsdata";
import "./Trendman.scss";
import Filter from "../../Component/Filter/Filter";
import Category from "../../Categories/Man/Category";
import FilterPage from "../../Categories/Man/Dumb";
import Mendata from "../../../Data/Mendata"
const TrendMan = ({ handleClick, searchmancat }) => {
  const filteredMen= Newarrivalsdata.filter((item)=>item.genderCategory ==="Male")
  const colors = [...new Set(Newarrivalsdata.flatMap(item => item.variation.map(variant => variant.color)))];
  const [active, setActive] = useState( 
    Array(Newarrivalsdata.length).fill(false)
  );
  const changer = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };
  return (
    <>
      <FilterPage dataof={filteredMen} title="Men" filtercolor={colors} />
    </>
  );
};
export default TrendMan;
