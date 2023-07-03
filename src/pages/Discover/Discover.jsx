import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./Discover.scss";
import Discoverdata from "../../Data/Discoverdata";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import left from "../../media/lefty.svg";
import right from "../../media/next.svg";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Title from "../Component/Common/Title";
import { AiOutlineRight } from "react-icons/ai";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="next-button"
      style={{background:"transparent", border: "none" }}
      onClick={onClick}
    >
      <span>
      {/* <AiOutlineRight/> */}
        <img src={right} alt="" />
      </span>
    </button>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button
      className="prev-button"
      style={{ background:"transparent", border: "none" }}
      onClick={onClick}
    >
      <span>
        <img src={left} alt="" />
      </span>
    </button>
  );
}
export default class Discover extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
    };
    return (
      <div className="container discover mt-8">
        <Title
          firstword="Discover more."
          lastword="Good things are waiting for you"
        />
        <Slider {...settings}>
          {Discoverdata.map((item, index) => {
            return (
              <>
                <div
                  className="discover-details d-flex gap-2 p-4"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="d-flex flex-column justify-content-between">
                    <div className="d-grid gap-2">
                      <small>{item.new}</small>
                      <span className="fw-semibold fs-5 pt-1">{item.desc}</span>
                    </div>
                    <Link
                      to={item.path}
                      className="rounded border-2 text-decoration-none text-black bg-white p-2"
                      style={{ width: "fit-content" }}
                    >
                      <small>Show More All</small>{" "}
                    </Link>
                  </div>
                  <img src={item.img} alt="" />
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    );
  }
}
