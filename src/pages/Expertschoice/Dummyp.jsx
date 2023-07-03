import React, { Component, useState } from "react";
import "./Dummyp.scss";
import dummy from "../../Data/Dummy";
import More from "../Common/More";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { AiFillStar} from "react-icons/ai"
export default function Dummy() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };
  const handleImageClick = (productIndex, imageIndex) => {
    setSelectedImages((prevSelectedImages) => {
      const newSelectedImages = [...prevSelectedImages];
      newSelectedImages[productIndex] = imageIndex;
      return newSelectedImages;
    });
  };

  return (
    <div className="container dummy d-flex flex-column justify-content-center">
      <div className="d-flex justify-content-between gap-3 align-items-center">
        <h2 className="fw-bolder px-5 py-4 fs-2"> Chosen By Our Experts</h2>
        <div className="d-flex gap-2">
          <div className=" btn btn-prev" onClick={prevHandler}></div>
          <div className=" btn btn-next" onClick={nextHandler}></div>
        </div>
      </div>
      <div className="container d-flex text-center align-items-center">
        <Swiper
          spaceBetween={50}
          onSwiper={(swiper) => setSwiperRef(swiper)}
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 50 },
          }}
          className="mySwiper"
        >
          {Object.values(dummy).map((product, index) => (
            <SwiperSlide>
              <div
                className="d-flex flex-column justify-content-center align-items-center gap-4 w-100 col-12 col-md-6 col-sm-12"
                key={index}
              >
                <div className="img-holder">
                  <img
                    src={product[0].img[selectedImages[index] || 0]}
                    alt="first product"
                    width={300}
                    height={250}
                  />
                </div>
                <div>
                  <div className="product-images d-flex gap-3">
                    {product[0].img.map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={image}
                        alt="product image"
                        width={123}
                        onClick={() => handleImageClick(index, imageIndex)}
                      />
                    ))}
                  </div>
                </div>
                <div className="product-price d-flex justify-content-between  align-items-center">
                  <div className="d-flex flex-column">
                    <h6>{product[0]["product-name"]}</h6>
                    <small className="color-rating d-flex gap-1 text-muted">
                      <span>{product[0]["color"]}</span>
                      <span>|</span>
                      <span><AiFillStar color="orange" /></span> 
                      <span>{product[0]["rating"]}</span>
                    </small>
                  </div>
                  <div className="price">{product[0].price}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div>
              <More heading="More Collection" desc="Show More Collection" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
