import React, { useEffect } from "react";
import { useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import Womendata from "../../Data/Womendata";
import Cards from "../Component/Card";
import Filter from "../Component/Filter/Filter";
import Category from "./Man/Category";
import { useDispatch } from "react-redux";
import { add } from "../../app/CartSlice";
import { Favorite, addFab } from "../../app/AddIdSlice";
import Newarrivalsdata from "../../Data/Newarrivalsdata";
import CustomPage from "../Component/Common/CustomPage";

const WomenCategory = () => {
  const [active, setActive] = useState(
    Array(Newarrivalsdata.length).fill(false)
  );
  const filteredWomen = Newarrivalsdata.filter(
    (item) => item.genderCategory === "Female"
  );
  const allCategory = [...new Set(filteredWomen?.map((item) => item.category))];

  //flatmap is used to map each item in the data array to an array of colors extraced from it's variation array
  const colors = [
    ...new Set(
      filteredWomen.flatMap((item) =>
        item.variation.map((variant) => variant.color)
      )
    ),
  ];

  // const filterColor = [...new Set(allColor.map(item=>item.color))]
  // console.log(filterColor);
  const [data, setData] = useState("");
  const [sizeFilter, setSizeFilter] = useState("");
  const [size, setSize] = useState("");
  const [categories, setCategories] = useState([]);
  const [sort, setSort] = useState("");
  const [color, setColor] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const changer = (item) => {
    const newActive = [...active];
    newActive[item.id] = !newActive[item.id];
    setActive(newActive);
    dispatch(addFab(item));
  };
  const [values, setSearchValues] = useState({ min: 0, max: 500 });

  const [rangevalues, setRangeValues] = useState({ min: 0, max: 500 });
  const filterAll = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    if (selectedSize === "") {
      setFilteredData(filteredWomen); // Show all items
    }
  };

  const filterBySize = (e) => {
    setSize(e.target.value);
    const data = filteredWomen.filter((item) =>
      item.size.includes(e.target.value)
    );
    setFilteredData(data);
  };
  const filterByCategory = (e) => {
    const data = filteredWomen.filter(
      (item) => item.category == e.target.value
    );
    setSize(e.target.value);
    setFilteredData(data);
  };
  const filterByColor = (e) => {
    const selectedColor = e.target.value.toLowerCase();
    const data = filteredWomen.filter((item) => {
      const colors = item.variation.map((variant) =>
        variant.color.toLowerCase()
      );
      return colors.includes(selectedColor);
    });
    setSize(selectedColor);
    setFilteredData(data);
  };

  const filterByPrice = (e, values) => {
    setRangeValues(values);
    setSearchValues(values);
    const data = filteredWomen.filter(
      (item) => item.price <= e.max && item.price >= e.min
    );
    // const data = Womendata.filter((i) => i.price >= values.min && i.price <= values.max)
    setFilteredData(data);
  };
  //sorting the data
  const handleSort = (sortBy) => {
    let sortedProduct = [...filteredWomen];
    switch (sortBy) {
      case "Newest":
        sortedProduct.sort((a, b) => b.new - a.new);
        break;
      case "Price Low-High":
        sortedProduct.sort((a, b) => a.price - b.price);
        break;
      case "Price High-low":
        sortedProduct.sort((a, b) => b.price - a.price);
        break;
    }
    setFilteredData(sortedProduct);
  };
  // add in cart
  const handleAddCart = (item) => {
    dispatch(add(item));
  };
  useEffect(() => {
    setFilteredData(filteredWomen);
  }, []);
  return (
    <>
      <div className="container  align-items-center d-flex flex-column justify-content-center">
        <Category title="Women" />
        <hr className="w-100" />
        <div className="trend-man justify-content-between d-flex w-100 pt-5" style={{gap:"3rem"}}>
          <div style={{ width: "15%" }}>
            <Filter
              rangevalues={rangevalues}
              handleSort={handleSort}
              cat={allCategory}
              handleFilter={filterBySize}
              handleCategory={filterByCategory}
              handleColor={filterByColor}
              filtercolor={colors}
              filterByPrice={filterByPrice}
              // handlePrice={filterByPrice}
              showAll={filterAll}
              size={size}
              sizeFilter={sizeFilter}
              categories={categories}
              sorts={sort}
              values={values}
              setSearchValues={setSearchValues}
            />
          </div>
            <br />
            <br />
          <div className="w-100"
          >
            <CustomPage data={filteredData} />
          </div>
        </div>
        {/* <div className=" btn show-me d-flex align-items-center gap-3 my-5">
      <Spinner animation="border" role="status"></Spinner>
      <span>Show Me More</span>
    </div> */}
      </div>
      <br />
      <br />
      <hr />
    </>
  );
};
export default WomenCategory;
