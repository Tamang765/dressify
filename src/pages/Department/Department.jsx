import React, { Component } from "react";
import Slider from "react-slick";
import "./Department.scss";
import departmentimg1 from "../../media/Department/department1.jpg";
import departmentimg2 from "../../media/Department/department2.jpg";
import departmentimg3 from "../../media/Department/department3.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import DepartmentData from "../../Data/DepartmentData";
import More from "../Common/More";
import Title from "../Component/Common/Title";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container-fluid department">
        
        <div className="container">
        <Title firstword="Shop By" lastword="Department" />
        <Slider {...settings}>
          {
            DepartmentData.map((item,index)=>{
              return(
                <><div className="department-details d-flex flex-column align-items-center text-align-center rounded-4" style={{backgroundColor:item.color}}>
                 <div >
                 <img src={item.departmentimg} alt="" />
                 </div>              
                </div>
                <div className="text-center">
                    <h3>{item.department_heading}</h3>
                    <small>{item.department_category}</small>
                  </div>
                </>
              )
            })
          }
            <More heading="More Collection" desc="Show More Collection" />

        </Slider>

        </div>
      </div>
    );
  }
}