import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useState } from "react";
import { Form } from "react-bootstrap";
import "./Filter.scss";
import Searchpage from "../../Searchpage/Searchpage";
import PriceRange from "../PriceRange/PriceRange";
import { useEffect } from "react";
import Womendata from "../../../Data/Womendata";

export const Size = ["XXL","XL", "L", "M", "S", "XS"];
export const Sort = ["Newest", "Price", "Price High-low", "Price Low-High"];

// export const Categories = {
//   Size: [
//     {
//       id: "1",
//       name: "Sizes",
//       subCategories: ["XL", "L", "M", "S", "XsS"],
//     },
//   ],
//   category: [
//     {
//       id: "1",
//       name: "Categories",
//       subCategories: [
//         "Backpacks",
//         "Travel Bags",
//         "laptops Bag",
//         "Leather Bags",
//       ],
//     },
//   ],
//   category1: [
//     {
//       id: "1",
//       name: "Colors",
//       subCategories: ["white", "black", "red"],
//     },
//   ],

//   sort: [
//     {
//       id: "1",
//       name: "Sort Order",
//       subCategories: [
//         "Most Popular",
//         "Best Rating",
//         "Newest",
//         "Price low-High",
//         "Price High",
//       ],
//     },
//   ],
// };
const Filter = ({
  handleFilter,
  filtercolor,
  handleCategory,
  handleColor,
  handleSort,
  cat,
  sizeFilter,
  handlePrice,
  showAll,
  categories,
  sorts,
  size,
  values,
  setSearchValues,
  filterByPrice,
  rangevalues,
}) => {
  // const categoriesToRender = Object.keys(Categories).filter(
  //   (key) => key !== "sort"
  // );

  const setValues = values;
  const [selectedSubhead, setSelectedSubhead] = useState("");
  const show = "";
  const handleClick = (subhead) => {
    setSelectedSubhead(subhead);
  };

  return (
    <div>
      <div className="mt-1 filter">
        <div>
          <label className="d-flex align-items-center gap-3">
            <input
              type="radio"
              value=""
              checked={size === ""}
              onChange={(e) => showAll(e)}
            />
            Show All
          </label>
          <br />
        </div>

        {/* {categoriesToRender.map((category) => (
          <>
            <strong>{Categories[category][0].name}</strong>
            <br />
            <div className="mt-4">
              {Categories[category][0].subCategories.map((subhead, index) => (
                <ul className="p-0">
                  <li className="list-unstyled d-flex gap-3">
                    <input
                              type="checkbox"
                              name={subhead}
                      value={subhead}
                      checked={categories === subhead}
                      onChange={()=>handleFilter(subhead)}
                    />
                    {subhead}
                  </li>
                </ul>
              ))}
            </div>
            <hr />
          </>
        ))} */}
        <div className="pt-3">
        <hr className="w-75"/>
          <strong>Categories</strong>
          <br />
          <ul className="p-0">
          {cat?.map((cat) => (
            <>
                <li className="list-unstyled pt-3 d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    name={cat}
                    value={cat}
                    checked={size === cat}
                    onChange={(e) => handleCategory(e)}
                  />
               <small>{cat}</small>   
                </li>
            </>
          ))}
          </ul>
        </div>
        <div className="pt-3">
        <hr className="w-75"/>
          <strong>Sizes</strong>
          <ul className="p-0 m-0">
          {Size.map((sizes, index) => (
            <>
                <li className="list-unstyled pt-3 d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    name={sizes}
                    value={sizes}
                    checked={sizes === size}
                    onChange={(e) => handleFilter(e)}
                  />
            <small>{sizes}</small>      
                </li>
            </>
          ))}
          </ul>
        </div>
        <div className="pt-3">
          <hr className="w-75"/>
          <strong>Color</strong>
          <ul className="p-0">
          {filtercolor?.map((color) => (
            <>
                <li className="list-unstyled pt-3 d-flex align-items-center gap-3">
                  <input
                    type="checkbox"
                    name={color}
                    value={color}
                    checked={size == color}
                    onChange={(e) => handleColor(e)}
                />
                <small>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </small>
                </li>
            </>
          ))}
          </ul>
        </div>
        <div className="pt-3">
        <hr className="w-75"/>
          <strong>Price Range</strong>
          <PriceRange
            rangevalues={rangevalues}
            setSearchValues={setSearchValues}
            filterByPrice={filterByPrice}
          />
        </div>
        <div className="">
          {/* <hr /> */}
          {/* <div class="form-check form-switch d-flex justify-content-between p-0 my-4">
            <div className="on-sale d-flex flex-column">
              <strong>On Sale !</strong>
              <small className="text-muted">Products currently on sale</small>
            </div>
            <input
              class="form-check-input"
              type="radio"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div> */}
          <strong>Sorting</strong>
          <div className="sorting my-5">
            {/* {Categories.sort.map((sort) => (
              <div key={sort.id}>
                <strong>{selectedSubhead || sort.name}</strong>
                <br />
                <div className="mt-4">
                  {sort.subCategories.map((subhead, index) => (
                    <ul className="p-0" key={index}>
                      <li className="list-unstyled d-flex gap-3">
                        <input
                          type="radio"
                          value={subhead}
                          onChange={handleFilter}
                          checked={sorts === subhead}
                        />
                        {subhead}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))} */}
            <select name="" id="" onChange={(e) => handleSort(e.target.value)}>
              <option value="">Sort Item</option>
              {Sort.map((item, index) => (
                <>
                  <option value={item}>{item}</option>
                </>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
