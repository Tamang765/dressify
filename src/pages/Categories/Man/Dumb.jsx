import { useState } from "react";
import { useDispatch } from "react-redux";
import Womendata from "../../../Data/Womendata";
import { addFab } from "../../../app/AddIdSlice";
import { add } from "../../../app/CartSlice";
import Filter from "../../Component/Filter/Filter";
import Cards from "../../Component/Card";
import { useEffect } from "react";
import Category from "./Category";
import CustomPage from "../../Component/Common/CustomPage";

const FilterPage = ({ dataof, title, filtercolor }) => {
  const [active, setActive] = useState(Array(dataof.length).fill(false));
  console.log(dataof);
  const allCategory = [...new Set(dataof?.map((item) => item.category))];
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

  // const handleFilter = (event) => (
  //   setSizeFilter(event.target.value),
  //   setCategories(event.target.value),
  //   setSort(event.target.value),
  //   setColor(event.target.value)
  // );
  // //filter categories

  // const WomenFilterData = sizeFilter
  //   ? Womendata.filter((item) => item.size === sizeFilter)
  //   : Womendata;
  // const CategoryFilter = categories
  //   ? Womendata.filter((item) => item.product_head === categories)
  //   : Womendata;
  // const sortFilter = sort
  //   ? Womendata.filter((item) => item.sort === sort)
  //   : Womendata;
  // const colorFilterData = color
  //   ? Womendata.filter((item) => item.Color === color)
  //   : Womendata;
  const [values, setSearchValues] = useState({ min: 0, max: 500 });

  const [rangevalues, setRangeValues] = useState({ min: 0, max: 500 });

  // const priceFilter = Womendata.filter(
  //   (i) => i.price >= values.min && i.price <= values.max
  // );
  const filterAll = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    if (selectedSize === "") {
      setFilteredData(dataof); // Show all items
    }
  };

  const filterBySize = (e) => {
    setSize(e.target.value);
    const data = dataof?.filter((item) => item.size.includes(e.target.value));
    setFilteredData(data);
  };
  const filterByCategory = (e) => {
    const data = dataof?.filter((item) => item.category == e.target.value);
    setSize(e.target.value);
    setFilteredData(data);
  };
  const filterByColor = (e) => {
    const selectedColor = e.target.value.toLowerCase();
    const data = dataof?.filter((item) => {
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
    const data = dataof?.filter(
      (item) => item.price <= e.max && item.price >= e.min
    );
    // const data = Womendata.filter((i) => i.price >= values.min && i.price <= values.max)
    setFilteredData(data);
  };
  //sorting the data
  const handleSort = (sortBy) => {
    let sortedProduct = [...dataof];
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
    setFilteredData(dataof);
  }, [dataof]);

  return (
    <>
      <div className="container  align-items-center d-flex flex-column justify-content-center ">
        <Category title={title} />
        <hr className="w-100"/>
        <div className="trend-man justify-content-between row w-100 mt-4" >
          <div className="col-sm-12 col-lg-2">
            <Filter
              rangevalues={rangevalues}
              cat={allCategory}
              handleSort={handleSort}
              handleFilter={filterBySize}
              handleCategory={filterByCategory}
              handleColor={filterByColor}
              filterByPrice={filterByPrice}
              // handlePrice={filterByPrice}
              showAll={filterAll}
              filtercolor={filtercolor}
              size={size}
              sizeFilter={sizeFilter}
              categories={categories}
              sorts={sort}
              values={values}
              setSearchValues={setSearchValues}
            />
          </div>
          <div className="col-sm-12 col-lg-10" style={{weight:"85%", height: "250vh" }}>
            <CustomPage data={filteredData} />
          </div>
        </div>
        {/* <div className=" btn show-me d-flex align-items-center gap-3 my-5">
      <Spinner animation="border" role="status"></Spinner>
      <span>Show Me More</span>
    </div> */}
      </div>
      <hr />
    </>
  );
};
export default FilterPage;
