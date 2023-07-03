import React, { useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { FaBullseye } from "react-icons/fa";
import { TbJewishStar } from "react-icons/tb";
import { WiStars } from "react-icons/wi";
import DescriptionProduct from "../../Data/DescriptionProduct";
import productDetailsData from "../../Data/productDetailsData";
import detail1 from "../../media/product-details/detail1.jpg";
import detail2 from "../../media/product-details/detail2.jpg";
import detail3 from "../../media/product-details/detail3.jpg";
import AddCart from "../Component/AddCart";
import ProductDesc from "../ProductDescription/ProductDesc";
import Review from "../Review/Review";
import Services from "../Services/Services";
import "./Product_detail.scss";
import Womendata from "../../Data/Womendata";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Newarrivals from "../NewArrivals/Newarrivals";
import Newarrivalsdata from "../../Data/Newarrivalsdata";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { Size } from "../Component/Filter/Filter";
import { add } from "../../app/CartSlice";
import { useDispatch } from "react-redux";
import SizeButton from "../Component/Common/SizeButton";
import ScrollToTop from "react-scroll-to-top";
import { useEffect } from "react";
import ProductDetail from "../Component/Common/ProductDetail";

const SingleWishlist = ({ handleClick }) => {
  
  const { id } = useParams();
  const dispatch = useDispatch();
  const [border, setBorder] = useState(false);
  const [active, setActive] = useState(FaBullseye);


  const changer = () => {
    setBorder(!border);
  };
  const changeIcon = () => {
    setActive(!active);
  };

  //add cart
  const handleAddCart = (item) => {
    dispatch(add(item));
  };
  const SingleNewArrival = Newarrivalsdata.filter((item) => item.id === id);
  const [bigimg, setBigImg] = useState(SingleNewArrival[0].cloth[0]);
  const handleImage = (src) => setBigImg(src);

  useEffect(() => {
    window.scrollTo(0, 0);
    // const handleBeforeUnload = () => {
    //   window.scrollTo(0, 0);
    // };
    // window.addEventListener("beforeunload", handleBeforeUnload);
    // return () => {
    //   window.removeEventListener("beforeunload", handleBeforeUnload);
    // };
  }, []);

  
  return (
    <>
      {/* <ScrollToTop /> */}
      <br />
      <br />
      <div className="container-fluid product-detail mt-5">
        <div>
          <div className="detail-product container d-flex gap-5 pt-5">
            <div className=" ">
              <div className="product-img">
                <div className="first-img position-relative d-flex flex-column gap-3"style={{zIndex:"4"}}>
                  <img src="" alt="" />
                  <button
                    className="position-absolute love-icon"
                    style={{ zIndex: 100 }}
                    onClick={changeIcon}
                  >
                    <AiFillHeart
                      className={active ? "stroke fs-5" : "none fs-5"}
                      style={{ color: active ? "red" : "white" }}
                    />
                  </button>
                  <div className=" d-flex gap-4 justify-content-center">
                    <div className="below-images justify-content-start d-flex flex-column gap-3 relative">
                      {SingleNewArrival
                        ? SingleNewArrival[0].cloth?.map((img, index) => (
                            <>
                              <div
                                className="first-img"
                                data-value={index + 1}
                                onClick={() => handleImage(img)}
                              >
                                <img src={img} alt="" width={70} />
                              </div>
                            </>
                          ))
                        : ""}
                    </div>
                  <div key={bigimg} style={{ width: "500px" }}>
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: "image",
                          isFluidWidth: true,
                          sizes: { width: "100%" },
                          src: bigimg,
                          className: "small-image",
                        },
                        largeImage: {
                          src: bigimg,
                          width: 900,
                          height: 1850,
                        },
                      }}
                    />
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductDetail product={ SingleNewArrival} />
          </div>
        </div>

        {/* {DescriptionProduct.map((item) => (    
          <div className=" container decription-product mt-5">
          <div className="heading"><strong className=" fs-4 py-4">Product Details</strong> </div>
            <p className="lh-4">
              { item.product_desc}
            </p>
            {item.list.map((item) => (
              <ul>
                <li>{ item.a}</li>
                <li>{ item.b}</li>
              </ul>
           )) 
              
            }
            <br />
            <br />
            <hr />

          
          </div>
        ))
        
        } */}
        <Review />
      </div>
    </>
  );
};

export default SingleWishlist;
