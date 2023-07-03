import Carousel from "react-bootstrap/Carousel";
import { BsSearch } from "react-icons/bs";
import carouse1 from "../../media/nav-carousel.jpg";
import carouse2 from "../../media/nav-carousel2.jpg";
import { AiTwotoneFire } from "react-icons/ai";
import "./Explore.scss";
const carouselimg = [{
  id: 1,
  img:require("../../media/nav-carousel1.jpg")
},
  {
    id: 2,
    img:require("../../media/nav-carousel3.jpg")
  }]
function UncontrolledExample() {
  return (
    <div className="explore-section my-4">
      <Carousel>
       {carouselimg.map((item) => (    
        <Carousel.Item>
          <div className="explore-details d-flex justify-content-center mt-3">
          <div className=" navigation-section w-50 justify-content-center d-flex">
            <div className="navigate d-flex flex-column justify-content-center gap-4 ">
              <span>In this season find the best <AiTwotoneFire color="red" className="fs-3"/></span>
                <h3 >Exclusive Collection for everyone</h3>
                <button className="d-flex gap-4">Explore now <BsSearch/></button>
              </div>
          </div>           
              < div className=" img-container w-50">
                <img src={ item.img} alt="" />
          </div>
     
          </div>
        </Carousel.Item>
      ))
    }
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
