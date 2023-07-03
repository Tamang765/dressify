import React, { Component, useEffect, useState } from "react";
import {
  Button,
  Card,
  ListGroup,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsCartCheck, BsFillSuitHeartFill, BsHeartFill } from "react-icons/bs";
import Slider from "react-slick";
import left from "../../media/lefty.svg";
import right from "../../media/next.svg";
import { MdZoomOutMap } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selector } from "../Component/Common/CommonArrivals";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../app/CartSlice";
import { addFab } from "../../app/AddIdSlice";
import Womendata from "../../Data/Womendata";
import Title from "../Component/Common/Title";
import CustomQuickAddModel from "../Component/Common/CustomQuickAddModel";
import CustomModel from "../Component/Common/CustomModel";
import Newarrivalsdata from "../../Data/Newarrivalsdata";

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

const WomenArrival = (props) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [showModal, setShowModal] = useState(false);
  //modal data
  const [modaldata, setModalData] = useState({});
  const filterWomen = Newarrivalsdata.filter((item) => item.genderCategory === "Female");
  const carouselData = filterWomen.slice(0, 6);
  const navigate = useNavigate();
  const { title, remaining, handleClick, setShow } = props;
  const [product, setProduct] = useState({});
  const [active, setActive] = useState(Array(carouselData.length).fill(false));
  const [productColor, setProductColor] = useState();
  const dispatch = useDispatch();
  const productIdentify = (id) => {
    navigate(`/product_detail/${id}`);
  };
  const firstObject = carouselData[0];

  // Get the first image from the variation array of the first object
  const firstVariation = firstObject.variation[0];
  const firstVariationImage = firstVariation.img;
  const firstVariationColor = firstVariation.color;
  const [selectedProduct, setSelectedColor] = useState(firstVariationImage);
  const [selectedColor, setSelectColor] = useState(firstVariationColor);
  const [selectedProducts, setSelectedProducts] = useState({});
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
    newActive[item.id] = !newActive[item.id];
    setActive(newActive);
    dispatch(addFab(item));
  };

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
    setSelectedProducts({
      ...selectedProducts,
      [item.id]: img,
    });
  };
  return (
    <div className="newarrivals container-fluid my-5 py-3">
      <div className="container">
        <Title firstword="Best Selling Women" lastword="Collection" />
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
              <Card style={{ width: "15rem" }}>
                <div className="product-details d-flex justify-content-center">
                  <Card.Img
                    src={selectedProducts[item.id]}
                    style={{objectFit:"cover"}}
                    onClick={() => productIdentify(item.id)}
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
                  {
                    item.size ? (
                      <div className="cart d-flex gap-2">
                        <CustomQuickAddModel
                          item={item}
                          setShowModal={setShowModal}
                          showModal={showModal}
                          modal={modaldata}
                        />
                        <CustomModel item={item} />
                      </div>
                    ) : (
                      ""
                    )
                    //   <div className="newarrival-details d-flex gap-2">
                    //     {item.size.map((sizes) => (
                    //       <button
                    //         key={sizes}
                    //         onClick={() => handleAddCart(item, sizes,selectedColor)}
                    //       >
                    //         <strong>{sizes}</strong>
                    //       </button>
                    //     ))}
                    //   </div>
                    // ) : (
                    // <div className="cart d-flex gap-2">
                    //   <button
                    //     className="d-flex gap-2"
                    //     onClick={() => handleAddCart(item)}
                    //   >
                    //     <BsCartCheck /> Add Cart
                    //   </button>
                    //   <button className="d-flex gap-2">
                    //     {" "}
                    //     <MdZoomOutMap /> Quick View
                    //   </button>
                    // </div>
                  }
                </div>
                <div className="fw-semibold pt-2" >{item.product_head}</div>
                {item.variation ? (
                  <>
                    <div className="d-flex gap-2 py-2 align-items-center">
                    <div className="fw-semibold">Color:</div>
                      {item.variation.map((colors) => (
                        <div
                          className={`rounded-circle opacity-75 ${
                            selectedColor === colors.color &&
                            selectedColorIndex === item.id
                              ? "border-color"
                              : "no-color"
                          }`}
                          style={{ fontSize: "0" }}
                        >
                          <span
                            className="p-2 text-white rounded-circle border-0"
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
                <Card.Body className="d-flex justify-content-between p-0  pe-3">
                  <small>$.{item.price}</small>
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

export default WomenArrival;
