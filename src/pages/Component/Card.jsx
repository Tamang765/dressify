import React, { useEffect } from "react";
import { Card, ListGroup, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { MdZoomOutMap } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { Link, useNavigate } from "react-router-dom";
import { selector } from "./Common/CommonArrivals";
// import "../Trending/ManTrend/Trendman.scss";
import { useState } from "react";
import CustomModel from "./Common/CustomModel";
import CustomQuickAddModel from "./Common/CustomQuickAddModel";
import { useDispatch } from "react-redux";
import { removeFab } from "../../app/AddIdSlice";
const Cards = ({
  id,
  fabitem,
  data,
  item,
  img,
  changer,
  index,
  active,
  handleClick,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [modaldata, setModalData] = useState({});
  const [productId, setProductId] = useState("");
  console.log(data?.length);
  const firstVariation = data && data[0]?.variation[0];
  const [firstVariationImage, setFirstVariationImage] = useState("");
  console.log(firstVariationImage);
  const firstVariationColor = firstVariation?.color;
  const [selectedProducts, setSelectedProducts] = useState({});
  const [selectedProduct, setSelectedColor] = useState(firstVariationImage);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedColor, setSelectColor] = useState(firstVariationColor);
  const [selectedColorIndex, setSelectColorIndex] = useState(0);
  const [product, setProduct] = useState({});
  const removeFav = (index) => {
    dispatch(removeFab(index));
  };
  const productIdentify = (id) => {
    navigate(`/product_detail/${id}`);
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
  useEffect(() => {
    setIsLoading(true);
    if (data?.length > 0 && item?.variation.length > 0) {
      setFirstVariationImage(item?.variation[0]?.img);
    }
    setIsLoading(false);
  }, [data, item]);
  return (
    <>
      
        <Card>
          <div className="product-details d-flex justify-content-center ">
            <div>
              {img && (
                <Card.Img src={img} onClick={() => productIdentify(id)} />
              )}
              {selectedProducts ? (
                <Card.Img
                  variant="top"
                  style={{ objectFit: "cover" }}
                  src={selectedProducts[item?.id] || firstVariationImage}
                  onClick={() => productIdentify(id)}
                />
              ) : (
                ""
              )}
            </div>
            {changer && (
              <button
                className="love-icon"
                onClick={() => changer(item || fabitem)}
              >
                <AiFillHeart
                  className={active[id] ? "stroke fs-5" : "none fs-5"}
                  style={{ color: active[id] ? "red" : "white" }}
                />
              </button>
            )}
            {item?.new ? (
              <div className="new">
                <WiStars /> {item.new}
              </div>
            ) : null}
            {/* {item.size ? (
          <div
            className="newarrival-details d-flex gap-2"
            onClick={() => handleClick(item)}
          >
            <button>
              <strong>XS</strong>
            </button>
            <button>
              <strong>S</strong>
            </button>
            <button>
              <strong>M</strong>
            </button>
            <button>
              <strong>L</strong>
            </button>
            <button>
              <strong>XL</strong>
            </button>
          </div>
        ) : ( */}
            {/* <div className="cart d-flex gap-2 w-100">
          <button className="d-flex gap-2" onClick={() => handleClick(item)}>
            <BsCartCheck /> Add Cart
          </button>
          <button className="d-flex gap-2">
            {" "}
            <MdZoomOutMap /> Quick View
          </button>
          <CustomModel/>
        </div> */}
            <div className="carts gap-2 w-100 m-auto">
              <CustomQuickAddModel
                fabitem={fabitem}
                item={item}
                setShowModal={setShowModal}
                showModal={showModal}
                modal={modaldata}
              />
            </div>
            {/* )} */}
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
                overlay={<Tooltip id="tooltip-disabled">{color}</Tooltip>}
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
        </ListGroup>
      )} */}
          <div className="d-flex gap-2 py-2 align-items-center justify-content-start w-100">
            <div className="fw-semibold">Color:</div>
            {item?.variation.map((colors) => (
              <div
                className={` rounded-circle opacity-75 ${
                  selectedColor === colors.color &&
                  selectedColorIndex === item.id
                    ? "border-color"
                    : "no-color"
                }`}
                style={{ fontSize: "0",filter: "drop-Shadow(0px 0px 1px gray)" }}
              >
                <span
                  className="p-2 text-white rounded-circle border-0"
                  key={index + 1}
                  style={{ background: colors.color }}
                  onClick={() => colorActivator(item, colors.color, colors.img)}
                ></span>
              </div>
            ))}
          </div>
          <Card.Body className="align-self-start w-100 py-3 px-1">
            <strong>{item?.product_head || fabitem?.product_head}</strong>
            <br />
            {/* <small>{item.product_detail}</small> */}
            <div className="d-flex align-items-center justify-content-between pt-2">
              <span>${item?.price || fabitem?.price}</span>
              <span>
                <AiFillStar color="orange" />
                <small className="text muted">4.6 (40 reviews)</small>
              </span>
              {fabitem ? (
                <button
                  className="rounded-4 text-bg-danger"
                  style={{ border: "1px solid red" }}
                  onClick={() => removeFav(fabitem.id)}
                >
                  Remove
                </button>
              ) : (
                ""
              )}
            </div>
          </Card.Body>
        </Card>
      
    </>
  );
};
export default Cards;
