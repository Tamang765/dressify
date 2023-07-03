import React, { useState } from 'react'
import {
    Button,
    Card,
    ListGroup,
    OverlayTrigger,
    Tooltip,
  } from "react-bootstrap";
  import {
    AiFillHeart,
    AiFillStar,
    AiOutlineHeart,
    AiOutlineStar,
  } from "react-icons/ai";
  import { BsCartCheck, BsFillSuitHeartFill, BsHeartFill } from "react-icons/bs";



  import { MdZoomOutMap } from "react-icons/md";
  import { WiStars } from "react-icons/wi";
  import { Link } from "react-router-dom";
import Newarrivalsdata from '../../../Data/Newarrivalsdata';
export const selector = {
    primaryColors: ["red", "yellow", "lightblue","black","lightgreen"],
    images:[require("../../../media/Newarrivals/product-selecter.jpg"),require("../../../media/Newarrivals/seonc-selector.jpg"),require("../../../media/Newarrivals/seonc-selector.jpg"),require("../../../media/Newarrivals/seonc-selector.jpg"),require("../../../media/Newarrivals/seonc-selector.jpg")]
  };
const CommonArrivals = () => {
    const [active, setActive] = useState(
        Array(Newarrivalsdata.length).fill(false)
      );
    const changer = (index) => {
        const newActive = [...active];
        newActive[index] = !newActive[index];
        setActive(newActive);
      };
  return (
      <div className='d-flex'>

    </div>
  )
}

export default CommonArrivals