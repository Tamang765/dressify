import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BsGenderFemale, BsGenderMale, BsPersonCircle } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import Newarrivals from "../NewArrivals/Newarrivals";
import { AiOutlineCrown } from "react-icons/ai";
import { GiJeweledChalice } from "react-icons/gi";
import "./Startexplore.scss";
import Women from "./Women/Women";
import Navigator from "../Component/Navigator/Navigator";
import Kids from "./Kids";
const Startexplore = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="start-exploring">
      <div className=" startexplore">
        <Navigator className="my-4"
          heading="Start exploring"
          item1={"Women"}
          item1_icon={< BsGenderFemale size={20}/>}
          item2_icon={ <BsGenderMale size={20}/> }
          item3_icon={<BsPersonCircle size={20} />}
          item4_icon={<CgGym size={20}/>}
          item5_icon={<AiOutlineCrown size={20}/>}
          item6_icon={<GiJeweledChalice size={20}/>}
          item2="Man"
          item3={"Kids"}
            item4="Sports" item5="Beauty" item6="Jewellry" toggle1={<Women />} toggle2={<Kids/>} />
      </div>
      </div>
    </>
  );
};
export default Startexplore;
