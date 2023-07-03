import React, { Component } from "react";
import pic from "../../media/Testimonials/test1.jpg";
import pic2 from "../../media/Testimonials/test2.jpg";
import "./Testimonials.scss";
import quotes from "../../media/Testimonials/quotes.jpg";
import quotes1 from "../../media/Testimonials/quotes2.jpg";
import test1 from "../../media/Testimonials/last1.jpg";
import test2 from "../../media/Testimonials/last2.jpg";
import Slider from "react-slick";
import {AiFillStar} from "react-icons/ai"
import TestimonialData from "../../Data/TestimonialData";
export default class Testimonials extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:false
    };

    return (
      <div className="container testimonials">
        <div className="testimonial-area d-flex flex-column">
          <div className="heading d-flex flex-column justify-content-center align-items-center">
            <h3 className="fw-bold">Good News From Far Away 🥇</h3>
            <span className="fs-5  fw-normal opacity-50">
              Let's See what people thinks of Ciseco
            </span>
          </div>
          <div className="first-row testimonial-images d-flex justify-content-center align-items-center">
            {/* <img src={pic} alt="" /> */}
            <img src={pic2} alt="" width={1000 } />
            {/* <img src={pic} alt="" /> */}
          </div>
          <div className="people-opinon-img d-flex justify-content-center align-items-center">
            {/* <img src={pic} alt="" /> */}
            <div className="d-flex quotes-details justify-content-center">
                <img src={quotes} alt="" className="w-25"/>
                <Slider {...settings}>
           {TestimonialData.map((item,index)=>{
            return(
                <div className="opinion" key={index}>
                <p>{item.opinion}</p>
                <div className="author-name">{item.speaker}</div>
                <span><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar/></span>
            </div>
            )
           })   }
                </Slider>
                <img src={quotes1} alt="" className="w-25"/>
            </div>
            {/* <img src={pic} alt="" /> */}
          </div>
          <div className="last-row d-flex justify-content-center">
            {/* <img src={test1} alt="" /> */}
            {/* <img src={test2} alt="" /> */}
          </div>
        </div>
      </div>
    );
  }
}
