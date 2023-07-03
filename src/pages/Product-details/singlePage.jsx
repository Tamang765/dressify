import React, { useEffect, useState } from "react";
import Review from "../Review/Review";
import Services from "../Services/Services";
import "./Product_detail.scss";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import Newarrivals from "../NewArrivals/Newarrivals";
import Newarrivalsdata from "../../Data/Newarrivalsdata";
import { add } from "../../app/CartSlice";
import { useDispatch } from "react-redux";
import SizeButton from "../Component/Common/SizeButton";



const SinglePage = ({ handleClick,data }) => {
  const { id } = useParams();
const dispatch =useDispatch()
  const [border, setBorder] = useState(false);

  const changer = () => {
    setBorder(!border);
  };

  // const filterProduct = Womendata.filter((item)=>item.id === )
  const SingleProduct = data?.filter((item) => item.id === id);
  const [bigimg, setBigImg] = useState( SingleProduct[0].variation[0]?.img);

  //handle big image
  const handleImage = (src) => setBigImg(src);
  
  useEffect(() => { 
    window.scrollTo(0,0)
  },[])
  return (
    <>
      <br />
      <br />
      <div className="container-fluid product-detail mt-5">
        <div>
          <div className="detail-product container d-flex gap-5 pt-5">
            <div className=" ">
              <div className="product-img">
                <div className="first-img position-relative d-flex  gap-3" style={{zIndex:"4"}}>
                <div className="">
                    <div className="below-images justify-content-center d-flex flex-column gap-3 relative">
                      {SingleProduct[0].variation.map((images, index) => (
                        <>
                          <div
                            className="first-img"
                            data-value={index + 1}
                            onClick={() => handleImage(images.img)}
                          >
                            <img src={images.img} alt="" width={70} />
                          </div>
                        </>
                      ))}
                    </div>
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
              {SingleProduct.map((item) => (
            <div className="product-head  w-100 ">
                <div className="product-heading" key={item.id}>
                  <div className="d-flex flex-column price-reviews gap-3">
                    <strong className="fs-3 ">{item.product_head}</strong>
                    <span className="price" style={{width:"fit-content"}}>Rs.{item.price}</span>
                    <p>{item.product_detail}</p>
                      <strong>Size</strong>
                      <SizeButton item={item}/>
                  </div>
                </div>
            </div>
              ))}
          </div>
        </div>
        <Review />
      </div>
    </>
  );
};

export default SinglePage;
