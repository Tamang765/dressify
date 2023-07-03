import React from "react";
import bag from "../../../media/New folder/bag.jpg";
import "./Women.scss";
import sideimg from "../../../media/New folder/explore.svg";
import { BsArrowRight } from "react-icons/bs";
import Womendata from "../../../Data/Womendata";
import "../../Trending/ManTrend/TrendMan";
import Cards from "../../Component/Card";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";
import { addFab } from "../../../app/AddIdSlice";
import { useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import CustomModel from "../../Component/Common/CustomModel";
import CustomQuickAddModel from "../../Component/Common/CustomQuickAddModel";
import { useNavigate } from "react-router-dom";
import Custom from "../../Product-details/Modal/Custom";



const CommonTab = ({ data, navigation }) => {
  const [product, setProduct] = useState({});
  const firstObject = data && data[0];
  const firstVariation = firstObject?.variation[0];
  const firstVariationImage = firstVariation?.img;
  const firstVariationColor = firstVariation?.color;
  const dispatch = useDispatch();
  const [active, setActive] = useState(Array(data?.length).fill(false));
  const [selectedProduct, setSelectedColor] = useState(firstVariationImage);
  const [selectedColor, setSelectColor] = useState(firstVariationColor);
  const navigate = useNavigate();
  const [selectedProducts, setSelectedProducts] = useState({});
  //modal
  const [showModal, setShowModal] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  //modal data
  const [modaldata, setModalData] = useState({});
  //change color of product
  const colorActivator = (item, color, img) => {
    item.selectedProduct = img;
    setSelectColor(color);
    setColorIndex(item.id);
    setProduct({ ...product, item });
  };
  //add to wish list
  const changer = (item) => {
    const newActive = [...active];
    newActive[item.id] = !newActive[item.id];
    setActive(newActive);
    dispatch(addFab(item));
  };
  // Modal function
  const openFunc = (item) => {
    setShowModal(true);
    setModalData(item);
  };
  const productIdentify = (id) => {
    navigate(`/product_detail/${id}`);
  };
  return (
    <div className="container women">
      <div className="row">
        {data?.map((item, index) => {
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
            <div
              className="col-lg-3 col-md-6 col-sm-12 pt-3 border-1 "
              key={item.id}
            >
              <div className="rounded-3 ">
                <Card className="p-0 position-relative  border-0 rounded-2">
                  <img
                    src={selectedProducts[item.id]}
                    onClick={() => productIdentify(item.id)}
                    width={150}
                    className="rounded p-0"
                  />
                  <OverlayTrigger
                    key="left"
                    placement="left"
                    overlay={
                      <Tooltip id="tooltip-left">Add to Wish List</Tooltip>
                    }
                  >
                    <button
                      className="love-icon position-absolute pull-right  border-0 rounded-circle "
                      onClick={() => changer(item)}
                      style={{
                        right: "13px",
                        top: "10px",
                        background: "white",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 1px 1px;",
                        width: "30px",
                        height: "30px",
                        border: "none",
                      }}
                    >
                      <AiFillHeart
                        className={
                          active[item.id] ? "stroke fs-5" : "none fs-5"
                        }
                        style={{ color: active[item.id] ? "red" : "white" }}
                      />
                    </button>
                  </OverlayTrigger>
                  {/* <div className="d-flex flex-column gap-1 addButton w-100 m-auto position-absolute top-50">
                  <div
                    className="btn border-1 text-white  fw-normal w-50 m-auto"
                    style={{ background: "#9999" }}
                  >
                    <small>
                    Add to Cart
                    </small>
                  </div>
                  <div
                    className="btn border-1 text-white fw-normal w-50 m-auto"
                    style={{ background: "#9999" }} onClick={()=>openFunc(item)}
                  >
                    <small>
                    Quick View
                    </small>
                  </div>
                </div>
                <CustomModel setShowModal={setShowModal} showModal={showModal} modal={modaldata} /> */}
                  <div className="carts d-flex gap-2 w-100 m-auto">
                    <CustomQuickAddModel
                      item={item}
                      setShowModal={setShowModal}
                      showModal={showModal}
                      modal={modaldata}
                    />
                    {/* <Custom/> */}
                  </div>
                </Card>
                <br />
                <div className="details  py-md-1 py-sm-3 d-flex flex-column justify-content-center ps-3 ">
                  <div className="fw-semibold">{item.product_head}</div>
                  <div className="fw-normal py-2">
                    Size:<small>{`${item.size},`}</small>
                  </div>

                  <div className="fw-normal py-2">Rs. {item.price}</div>
                  {/* {item.variation ? (
                  <>
                    <div className="d-flex gap-2 mt-2">
                      {item.variation.map((colors) => (
                        <>
                          <div
                            className={`rounded-circle ${
                              selectedColor === colors.color && colorIndex === item.id
                                ? "border-color"
                                : "no-color"
                            }`}
                          >
                            <OverlayTrigger
                              key="top"
                              placement="top"
                              overlay={
                                <Tooltip id="tooltip-top">
                                  <small>

                                  {colors.color}
                                  </small>
                                </Tooltip>
                              }
                            >
                              <div
                                className="btn p-2 text-white rounded-circle border-0"
                                key={index + 1}
                                style={{ background: colors.color }}
                                onClick={() =>
                                  colorActivator(item, colors.color, colors.img)
                                }
                              ></div>
                            </OverlayTrigger>
                          </div>
                        </>
                      ))}
                    </div>
                    <small>Colors</small>
                  </>
                ) : (
                  ""
                )} */}
                </div>
     
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <button className=" show-me d-flex m-auto justify-content-center" style={{width:"fit-content"}}>
                  View  More
      </button>
    </div>
  );
};

export default CommonTab;
