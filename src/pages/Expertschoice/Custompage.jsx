import React, { Component, useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import ExpertData from "../../Data/ExpertData";

import img from "../../media/ExpertsChoice/jacket1.jpg";
import "./Custompage.scss";

export const Custompage = () => {
  const [data, setData] = useState(ExpertData);
  // const [activeimg, setActiveimg] = useState(null)
  // const expertDataId1 = ExpertData.find((item) => item.id === 1);
  // const firstCoverImg = expertDataId1.img[1].cover;
  // useEffect(() => {
  //   setActiveimg(firstCoverImg)
  // }, [activeimg])
  // const handleSetImage = (id) => {
  //   setActiveimg(data[id].img)
  // }

  // const handleClick = () => {
  //   return
  // }
  const [selectImg, setSelectImg] = useState([]);

  return data.map((item, index) => {
    return (
      <div className="d-flex gap-4 custompage">
        <>
          <div className="d-flex flex-column gap-3">
          <div>{selectImg && <img src={selectImg} alt="" />}</div>
            <div className="d-flex align-items-center gap-3" key={index}>
              {item?.img.map((i) => (
                <>
                  <img
                    src={i}
                    alt="i"
                    width={120}
                    height={90}
                    onClick={() => setSelectImg(i)}
                  />
                </>
              ))}
            </div>
          </div>
        </>
      </div>
    );
  });
};
