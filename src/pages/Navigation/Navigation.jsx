import React, { useState } from "react";
import "./Navigation.scss";
import logo from "../../media/logo.jpg";
import {
  BsSearch,
  BsFillPersonFill,
  BsCartDash,
  BsPerson,
  BsBox2Heart,
  BsHouseHeart,
  BsArrowRight,
  BsPersonBadge,
} from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Card,
  CloseButton,
  Dropdown,
  DropdownButton,
  Modal,
  Offcanvas,
  Table,
} from "react-bootstrap";
import { AiTwotoneHeart } from "react-icons/ai";
import tshirt from "../../media/discover/t-shirt.jpg";
import { BiLogOut } from "react-icons/bi";
import facebook from "../../media/icons/facebook.svg";
import youtube from "../../media/icons/youtube.svg";
import telegram from "../../media/icons/tele.svg";
import twitter from "../../media/icons/twitter.svg";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import Mendata from "../../Data/Mendata";
import blogger from "../../media/News/news-author.jpg";
import { MdContentPaste } from "react-icons/md";
import { useSelector } from "react-redux";
import { CartList } from "../../app/CartSlice";
import { Favorite } from "../../app/AddIdSlice";
import Womendata from "../../Data/Womendata";
import Newarrivalsdata from "../../Data/Newarrivalsdata";
import KidsData from "../../Data/KidsData";
import SportData from "../../Data/SportData";
import Slider from "react-slick";
import Cards from "../Component/Card";

const Navigation = ({ size, setShow }) => {
  const [search, setSearch] = useState(true);
  const [show, setShows] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [filteredData, setFIlteredData] = useState();
  const handleClose = () => setShows(false);
  const handleShow = () => setShows(true);
  const [searchData, setSearchData] = useState(false);
  const [subdropdown, setSubdropdown] = useState(false);
  const [currentLink, setCurrentLink] = useState("");
  const navigate = useNavigate();
  const [searchPopup, setSearchPopup] = useState([]);
  const [searchValue, setSearchValue] = useState("");
    const [menDropdown, setMenDropdown] = useState(false);
  const [womenDropdown, setWomenDropdown] = useState(false);
  const [menSubdropdown, setMenSubdropdown] = useState(false);
  const [womenSubdropdown, setWomenSubdropdown] = useState(false);
  const filterMen = Newarrivalsdata.filter(
    (item) => item.genderCategory === "Male"
  );
  const filterWomen = Newarrivalsdata.filter(
    (item) => item.genderCategory === "Female"
  );
  const allData = [...Newarrivalsdata];
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    const filteredData = allData.filter((item) => {
      if (value === "") {
        return true;
      } else {
        return (
          item.product_head.toLowerCase().includes(value.toLowerCase()) ||
          item.category.toLowerCase().includes(value.toLowerCase())
        );
      }
    });
    setSearchPopup(filteredData);
    setSearchData(true);
  };

  const handleSearchSubmit = (searchValue) => {
    navigate(`/filtersearch/${searchValue}`);
  };

  const handleProductSearch = (id) => {
    navigate(`/product_detail/${id}`);
    setSearchData(false);
    setSearch(true);
    setSearchValue("");
  };

  const handleClick = () => {
    return setSearch(!search);
  };

  const generateSubLinks = (category) => {
    const subLinks = filterWomen.filter((item) => item.category === category);
    console.log(subLinks);
    return subLinks.map((item) => (
      <div className="d-flex flex-column">
        <li key={item.id}>
          <Link to={`/product_detail/${item.id}`}>
            <small>{item.product_head}</small>
          </Link>
        </li>
      </div>
    ));
  };
  const generateMenSubLinks = (category) => {
    const subLinks = filterMen.filter((item) => item.category === category);
    console.log(subLinks);
    return subLinks.slice(0, 4).map((item) => (
      <div className="d-flex flex-column">
        <li key={item.id}>
          <Link to={`/product_detail/${item.id}`}>
            <small>{item.product_head}</small>
          </Link>
        </li>
      </div>
    ));
  };

  //new set allows to store a unique values of any type, including primitive types and object references
  // Array. from methis is used to create a new array from an iterable object or array like object
  // set object contains unique categories and creates a new array from its elements, it eleminates duplicate values creating a unique set
  // const categories = Array.from(
  //   new Set(Womendata.map((item) => item.category))
  // );
  // Get unique categories
  const categories = [...new Set(filterWomen.map((item) => item.category))];
  // const categories = [...new Set(Womendata.map((item) => item.category))];
  const Mencategories = [...new Set(filterMen.map((item) => item.category))];
  const data = filterWomen.filter((item) => item.category);
  const handleSubdropdown = () => {
    setSubdropdown(!subdropdown);
  };
  const [activeLink, setActiveLink] = useState(null);
  const handleClicks = (link) => {
    setActiveLink(link);
  };
  const sizes = useSelector(CartList);
  const FavList = useSelector(Favorite);
  const handler = (children) => {
    setFIlteredData(children);
  };

  
  const handleMenDropdown = () => {
    setMenDropdown(!menDropdown);
    setWomenDropdown(false);
  };
  
  const handleWomenDropdown = () => {
    setWomenDropdown(!womenDropdown);
    setMenDropdown(false);
  };
  
  const handleMenSubdropdown = () => {
    setMenSubdropdown(!menSubdropdown);
  };
  
  const handleWomenSubdropdown = () => {
    setWomenSubdropdown(!womenSubdropdown);
  };

  console.log(womenSubdropdown);
  return (
    <>
      <nav className="container-fluid navigation ">
        <div className="wrapper">
          <div className="hamburger w-25" onClick={handleShow}>
            <GoThreeBars className="fs-3" />
          </div>
          <Offcanvas show={show} onHide={handleClose} backdrop="static">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <div
                  className="logo w-25 d-flex justify-content-center"
                  onClick={() => setShow(true)}
                >
                  <Link to="/">
                    <img src={logo} alt="" width={100} />
                  </Link>
                </div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="text-muted">
                Discover the most outstanding articles on all topics of life
                write your stories and share them
              </p>
              <div className="icons d-flex gap-3 pt-4">
                <div className="facebook icon d-flex ">
                  <img src={facebook} alt="" width={40} />
                </div>
                <div className="youtube icon d-flex">
                  <img src={youtube} alt="" width={40} />
                </div>
                <div className="telegram icon d-flex ">
                  <img src={telegram} alt="" width={40} />
                </div>
                <div className="twitter icon d-flex ">
                  <img src={twitter} alt="" width={40} />
                </div>
              </div>
              <button className="search-icon mt-4 w-100 d-flex align-items-center"            onClick={handleSearchSubmit}>
                <BsSearch className="fs-4" />
                <input type="text" className="w-100"    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}/>
              </button>
              <div className="inputs-section" style={{ height: "6vh" }}>
                  {searchData && (
                    <div>
                      {" "}
                      {searchPopup.length === 0 ? (
                        <div className="bg-white d-flex flex-column pt-4">
                          <p className="text-center">No results found.</p>
                        </div>
                      ) : (
                        <div className="bg-white d-flex flex-column pt-4">
                          <span style={{ paddingLeft: "3rem" }}>
                            Product Details
                          </span>
                          <hr />
                          <div className="d-flex justify-content-around bg-white" style={{zIndex:"5"}}>
                            {searchPopup.slice(0, 2).map((item) => (
                              <>
                                <Card className="border-0 align-self-center ">
                                  <img
                                    src={item.variation[0]?.img}
                                    alt=""
                                    width={170}
                                    height={150}
                                    className="align-self-center " style={{objectFit:"cover"}}
                                    onClick={() => handleProductSearch(item.id)}
                                  />
                                  <strong className="align-self-center">
                                    {item.product_head}
                                  </strong>
                                  {/* <small className="align-self-center">
                                {item.product_detail}
                              </small> */}
                                  <p className="align-self-center">
                                    Rs {item.price}
                                  </p>
                                </Card>
                              </>
                            ))}
                          </div>
                          <hr />
                          <button className="text-uppercase text-sm border-0 bg-white py-4">
                            view all results {searchPopup.length} Products
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {/* {!searchData && (
                    <div className="bg-white d-flex flex-column pt-4">
                      <p style={{ paddingLeft: "3rem" }}>
                        Explore these products too:
                      </p>
                      <div className="d-flex justify-content-around">
                        {allData.slice(0, 2).map((item) => (
                          <Card className="border-0 align-self-center ">
                            <img
                              src={item.variation[0]?.img}
                              alt=""
                              width={100}
                              height={50}
                              className="align-self-center"
                              onClick={() => handleProductSearch(item.id)}
                            />
                            <strong className="align-self-center">
                              {item.product_head}
                            </strong>
                            <p className="align-self-center">Rs {item.price}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )} */}
                </div>
              <hr />
  <ul className="nav-links list-unstyled">
    <li className="list-unstyled">
      <Link
        to=""
        onClick={handleMenDropdown}
        className={`d-flex justify-content-between ${menDropdown ? "active" : ""}`}
      >
        Men{" "}
        <span>
          <AiOutlineDown />
        </span>
      </Link>
      {menDropdown && (
        <ul className="d-flex flex-column gap-1 w-100">
          {Mencategories?.map((category) => (
            <li key={category}>
              <Link
                onClick={handleMenSubdropdown}
                className={`d-flex justify-content-between ${
                  menSubdropdown ? "active subdropdown" : ""
                }`}
              >
                {category}
                <span>
                  <AiOutlineDown />
                </span>
              </Link>
              {menSubdropdown && (
                <ul>
                  <li className="d-flex flex-column text-muted">
                    {generateMenSubLinks(category)}
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
    <li className="list-unstyled">
      <Link
        to=""
        onClick={handleWomenDropdown}
        className={`d-flex justify-content-between ${
          womenDropdown ? "active" : ""
        }`}
      >
        Women{" "}
        <span>
          <AiOutlineDown />
        </span>
      </Link>
      {womenDropdown && (
        <ul className="d-flex flex-column gap-1 w-100">
          {categories?.map((category) => (
            <li key={category}>
              <Link
                onClick={handleWomenSubdropdown}
                className={`d-flex justify-content-between ${
                  womenSubdropdown ? "active subdropdown" : ""
                }`}
              >
                {category}
                <span>
                  <AiOutlineDown />
                </span>
              </Link>
              {womenSubdropdown && (
                <ul>
                  <li className="d-flex flex-column text-muted">
                  {generateMenSubLinks(category)}
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
    <li>
      <Link className="py-3" to="/kidscategory">
        Kids
      </Link>
    </li>
    <li>
      <Link className="py-3" to="">
        Accessories
      </Link>
    </li>
    <li>
      <Link className="py-3" to="/sportscategory">
        Sport
      </Link>
    </li>
  </ul>
            </Offcanvas.Body>
          </Offcanvas>
          <div className="logo w-25" onClick={() => setShow(true)}>
            <Link to="/">
              <img
                src={logo}
                alt=""
                width={81}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </div>
          <div classNam e="menu w-50  d-flex justify-content-center">
            {search ? (
              <ul className="nav-links">
                <li>
                  <Link to="/mancategory">
                    Men <HiOutlineChevronDown />
                  </Link>
                  <div className="mega-box">
                    <div className="content w-100">
                      <div className="w-100 d-flex">
                        <div
                          className="mega-links p-0 "
                          style={{ width: "65%" }}
                        >
                          <div className="d-flex justify-content-between">
                            {Mencategories?.map((category) => (
                              <>
                                <div
                                  key={category}
                                  className="d-flex flex-column"
                                >
                                  <strong className="muted">{category}</strong>
                                  <br />
                                  {generateMenSubLinks(category)}
                                </div>
                                <div></div>
                              </>
                            ))}
                          </div>
                        </div>
                        <div
                          className="discover-details d-flex gap-2 p-4 rounded-2"
                          style={{
                            backgroundColor: "lightblue",
                            width: "35%",
                            height: "33vh",
                          }}
                        >
                          <div className="d-flex flex-column justify-content-between">
                            <small>Explore new arrivals</small>
                            <span className="fw-semibold fs-3 lh-sm">
                              Shop the lates from top Brands
                            </span>
                            <Link
                              to="/mancategory"
                              className="border-0 p-2 w-75 rounded-4 bg-white justify-content-center"
                            >
                              <small>Show More All</small>
                            </Link>
                          </div>
                          <img src={tshirt} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/kidscategory">Kids</Link>
                </li>
                <li>
                  <Link to="">Accessories</Link>
                </li>
                <li>
                  <Link to="/sportscategory">Sport</Link>
                </li>
                <li>
                  <Link to="/womencategory">
                    Women <HiOutlineChevronDown />
                  </Link>
                  <div className="mega-box">
                    <div className="content w-100">
                      <div className="w-100 d-flex">
                        <div
                          className="mega-links p-0 "
                          style={{ width: "65%" }}
                        >
                          <div className="d-flex justify-content-between">
                            {categories.map((category) => (
                              <>
                                <div
                                  key={category}
                                  className="d-flex flex-column"
                                >
                                  <strong className="muted">{category}</strong>
                                  <br />
                                  {generateSubLinks(category)}
                                </div>
                                <div></div>
                              </>
                            ))}
                          </div>
                        </div>
                        <div
                          className="discover-details d-flex gap-2 p-4 rounded-2"
                          style={{
                            backgroundColor: "lightblue",
                            width: "35%",
                            height: "33vh",
                          }}
                        >
                          <div className="d-flex flex-column justify-content-between">
                            <small>Explore new arrivals</small>
                            <span className="fw-semibold fs-3 lh-sm">
                              Shop the lates from top Brands
                            </span>
                            <Link
                              to="/womencategory"
                              className="border-0 p-2 w-75 rounded-4 bg-white justify-content-center"
                            >
                              <small>Show More All</small>
                            </Link>
                          </div>
                          <img src={tshirt} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            ) : (
              <>
                <div className="inputs-section" style={{ height: "6vh" }}>
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchValue}
                    onChange={handleSearchChange}
                  />
                  <BsSearch className="search-icons fs-4" />
                  {/* <button
                    className="border-0 position-absolute right-0"
                    onClick={handleSearchSubmit}
                  >
                    <BsArrowRight className="fs-3" color="white" />
                  </button> */}
                  <button class="btn-close" onClick={handleClick}></button>
                  {searchData && (
                    <div>
                      {" "}
                      {searchPopup.length === 0 ? (
                        <div className="bg-white d-flex flex-column pt-4">
                          <p className="text-center">No results found.</p>
                        </div>
                      ) : (
                        <div className="bg-white d-flex flex-column pt-4 mt-2">
                          <span style={{ paddingLeft: "3rem" }}>
                            Product Details
                          </span>
                          <hr />
                          <div className="d-flex justify-content-around">
                            {searchPopup.slice(0, 3).map((item) => (
                              <>
                                <Card className="border-0 align-self-center ">
                                  <img
                                    src={item.variation[0]?.img}
                                    alt=""
                                    width={200}
                                    height={250}
                                    className="align-self-center"
                                    onClick={() => handleProductSearch(item.id)}
                                  />
                                  <strong className="align-self-center">
                                    {item.product_head}
                                  </strong>
                                  {/* <small className="align-self-center">
                                {item.product_detail}
                              </small> */}
                                  <p className="align-self-center">
                                    Rs {item.price}
                                  </p>
                                </Card>
                              </>
                            ))}
                          </div>
                          <hr />
                          <button className="text-uppercase text-sm border-0 bg-white py-4" onCLick={()=>handleSearchSubmit(searchValue)}>
                            view all results {searchPopup.length} Products
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                  {!searchData && (
                    <div className="bg-white d-flex flex-column pt-4">
                      <p style={{ paddingLeft: "3rem" }}>
                        Explore these products too:
                      </p>
                      <div className="d-flex justify-content-around">
                        {allData.slice(0, 3).map((item) => (
                          <Card className="border-0 align-self-center ">
                            <img
                              src={item.variation[0]?.img}
                              alt=""
                              width={200}
                              height={250}
                              className="align-self-center"
                              onClick={() => handleProductSearch(item.id)}
                            />
                            <strong className="align-self-center">
                              {item.product_head}
                            </strong>
                            <p className="align-self-center">Rs {item.price}</p>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="search-profile-section w-25 d-flex justify-content-end align-items-center gap-3">
            {search ? (
              <button className="search-icon" onClick={handleClick}>
                <BsSearch size={25} />
              </button>
            ) : (
              ""
            )}
            <div className="user-icon d-flex align-items-center">
              <Link to="/wishlist" className="position-relative">
                <div className="fav-count" data-count={FavList?.length}>
                  <BsHouseHeart size={25} color="black" />
                </div>
              </Link>
              <Link
                to="/cart"
                onClick={() => setShow(false)}
                className="position-relative"
              >
                <div className="cart-count" data-count={sizes?.length}>
                  <BsCartDash size={25} className="changer" />
                </div>
              </Link>
              <Link to="/account">
                <BsPerson size={25} />{" "}
              </Link>
              {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className="p-0">
                  <BsFillPersonFill color="black" className="fs-3" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="profile-dropdownmenu ">
                  <Dropdown.Item>
                    <div className="updates-by d-flex gap-2">
                      <img
                        src={blogger}
                        alt=""
                        width={500}
                        height={50}
                        style={{ width: "3rem", borderRadius: "50%" }}
                      />
                      <div className="blogger d-flex flex-column">
                        <small className="name">Fones Mini</small>
                      </div>
                    </div>
                  </Dropdown.Item>
                  <hr />
                  <div className="dropdown-profile d-flex flex-column justify-content-center ">
                    <Link to="/account" className="list-unstyled">
                      <span>
                        <BsPerson /> My Account
                      </span>
                    </Link>
                    <span>
                      <BiLogOut /> Log out
                    </span>
                  </div>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
