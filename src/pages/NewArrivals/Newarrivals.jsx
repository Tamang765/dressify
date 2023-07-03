import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Card,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import {
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiOutlineStar,
} from "react-icons/ai";
import { BsCartCheck, BsFillSuitHeartFill, BsHeartFill } from "react-icons/bs";
import Slider from "react-slick";
import left from "../../media/lefty.svg";
import right from "../../media/next.svg";
import "./Newarrivals.scss";
import Newarrivalsdata from "../../Data/Newarrivalsdata";
import { MdZoomOutMap } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selector } from "../Component/Common/CommonArrivals";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../app/CartSlice";
import { addFab } from "../../app/AddIdSlice";
import Title from "../Component/Common/Title";
import CustomModel from "../Component/Common/CustomModel";
import CustomQuickAddModel from "../Component/Common/CustomQuickAddModel";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button className="next-button" onClick={onClick}>
      <span>
        <img src={right} alt="" srcset="" />
      </span>
    </button>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button className="prev-button" onClick={onClick}>
      <span>
        <img src={left} alt="" />
      </span>
    </button>
  );
}
const Newarrivals = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const filterMen = Newarrivalsdata.filter((item) => item.genderCategory === "Male");
  console.log(filterMen);
  const carouselData = filterMen;
  const navigate = useNavigate();
  const { title, remaining, handleClick, setShow } = props;
  const [product, setProduct] = useState({});
  const [active, setActive] = useState(Array(carouselData.length).fill(false));
  const [productColor, setProductColor] = useState();
    //modal

    const [showModal, setShowModal] = useState(false)
    //modal data 
    const [modaldata, setModalData] = useState({})
  const dispatch = useDispatch();
  const [path,setPath]= useState()
  const productIdentify = (item) => {
    navigate(`/product_detail/${item.id}`);
  };
  const firstObject = carouselData[0];
  // Get the first image from the variation array of the first object
  const firstVariation = firstObject?.variation[0];
  const firstVariationImage = firstVariation?.img;
  const firstVariationColor = firstVariation.color;
  //img 
  const [selectedProducts, setSelectedProducts] = useState({});
  const [selectedProduct, setSelectedColor] = useState(firstVariationImage);
  const [selectedColor, setSelectColor] = useState(firstVariationColor);
  const [selectedColorIndex, setSelectColorIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const changer = (item) => {
    const newActive = [...active];
    console.log(item);
    newActive[item.id] = !newActive[item.id];
    setActive(newActive);
    dispatch(addFab(item));
  };
  const openFunc = (item) => {
    setShowModal(true)
    setModalData(item)
  }

  //handle add cart with size
  const handleAddCart = (item, size, color) => {
    const newItem = { ...item };
    newItem.size = [size];
    newItem.color = [color];
    newItem.img = selectedColor;
    dispatch(add(newItem));
  };
  const colorActivator = (item, color, img) => {
    item.selectedProduct = img;
    setSelectColor(color);
    setSelectColorIndex(item.id);
    setProduct({ ...product, item });
    setSelectedProducts({
      ...selectedProducts,
      [item.id]: img,
    });
  };
  return (
    <div className="newarrivals container-fluid  my-5" style={{paddingBottom:"3rem"}}>
      <div className="container">
        <Title firstword="New Arrival's" lastword="Collection" />
        <Slider {...settings}>
          {carouselData.map((item, index) => {
              // Get the first image and color of the item
              const firstVariation = item.variation[0];
              const firstVariationImage = firstVariation.img;
              const firstVariationColor = firstVariation.color;
              // Check if the item's selected product is already set
              // If not, set it to the first variation's image
              if (!selectedProducts[item.id]) {
                setSelectedProducts({
                  ...selectedProducts,
                  [item.id]: firstVariationImage,
                });
              }
            return (
              <Card style={{ width: "15rem"}}>
                <div className="product-details d-flex justify-content-center">
                  {/* {item.cloth.slice(0, 1).map((images) => ( */}
                  <Card.Img
                    src={selectedProducts[item.id]}
                    style={{objectFit:"cover"}}
                    onClick={() => productIdentify(item)}
                  />
                  {/* ))} */}
                  <button className="love-icon" onClick={() => changer(item)}>
                    <AiFillHeart
                      className={active[item.id] ? "stroke fs-5" : "none fs-5"}
                      style={{ color: active[item.id] ? "red" : "white" }}
                    />
                  </button>
                  {item.new ? (
                    <div className="new">
                      <WiStars /> {item.new}
                    </div>
                  ) : null}
                  {item.size ?
                    (               
                    // <div className="newarrival-details d-flex gap-2">
                    //   {item.size.map((sizes) => (
                    //     <button
                    //       key={sizes}
                    //       onClick={() =>
                    //         handleAddCart(item, sizes, selectedColor)
                    //       }
                    //     >
                    //       <strong>{sizes}</strong>
                    //     </button>
                    //   ))}
                    // </div>
                  // ) : (
                    <div className="cart d-flex gap-2">
                        <CustomQuickAddModel item={item} setShowModal={setShowModal} showModal={showModal} modal={modaldata}/>         
                    </div>
                  ):""
                }
                </div>
                {/* {item.options ? (
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                      {selector.images.map((img, index) => (
                        <div className="images d-flex gap-2">
                          <div
                            className="image-collection d-flex align-items-center justify-content-center"
                            onClick={(event) => {
                              const allDivs =
                                document.querySelectorAll(".image-collection");
                              allDivs.forEach((div) => {
                                div.classList.remove("active");
                              });
                              event.currentTarget.classList.add("active");
                            }}
                          >
                            <img src={img} alt="" />
                          </div>
                        </div>
                      ))}
                    </ListGroup.Item>
                    <strong>{item.product_head}</strong>
                    <p>{item.product_detail}</p>
                  </ListGroup>
                ) : (
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item className="d-flex gap-2">
                      {selector.primaryColors.map((color, index) => (
                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">{color}</Tooltip>
                          }
                        >
                          <div
                            key={index}
                            className="color-collection"
                            onClick={(event) => {
                              // Remove active class from all color divs
                              const colorDivs =
                                document.querySelectorAll(".color-collection");
                              colorDivs.forEach((div) => {
                                div.classList.remove("active");
                              });
                              // Add active class to the clicked color div
                              event.currentTarget.classList.add("active");
                            }}
                          >
                            <div
                              className={
                                color === "red"
                                  ? "red colors"
                                  : color === "yellow"
                                  ? "yellow colors"
                                  : color === "lightblue"
                                  ? "blue  colors"
                                  : color === "black"
                                  ? "lightblack colors"
                                  : color === "lightgreen"
                                  ? "lightgreen colors"
                                  : "none"
                              }
                            >
                              <div
                                className="choose-color"
                                style={{ backgroundColor: color }}
                              ></div>
                            </div>
                          </div>
                        </OverlayTrigger>
                      ))}
                    </ListGroup.Item>
                    <strong>{item.product_head}</strong>
                    <p>{item.product_detail}</p>
                  </ListGroup>
                )} */}
              <div className="fw-semibold pt-2">{item.product_head}</div>
                {item.variation ? (
                  <>
                    <div className="d-flex gap-2 py-2 align-items-center">
                    <div className="fw-semibold">Color:</div>
                      {item.variation.map((colors) => (
                        <div
                          className={` rounded-circle opacity-75 ${
                            selectedColor === colors.color &&
                            selectedColorIndex === item.id
                              ? "border-color"
                              : "no-color"
                          }`}
                          style={{ fontSize: "0" }}
                        >
                          <span
                            className="p-2 text-white rounded-circle border-0"
                            key={index + 1}
                            style={{ background: colors.color }}
                            onClick={() =>
                              colorActivator(item, colors.color, colors.img)
                            }
                          ></span>
                        </div>
                      ))}
                    </div>

                    {/* <p>{item.product_detail}</p> */}
                  </>
                ) : (
                  ""
                )}
                <Card.Body className="d-flex justify-content-between p-0 pt-2 pe-3">
                  <small>$. {item.price}</small>
                  <small className="text-muted">
                    <AiFillStar color="orange" />
                    4.6 (40 reviews)
                  </small>
                </Card.Body>
              </Card>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Newarrivals;
