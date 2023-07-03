import React, { useState } from "react";
import {
  Button,
  Card,
  ListGroup,
  OverlayTrigger,
  Spinner,
  Tooltip,
} from "react-bootstrap";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { BsCartCheck, BsFillSuitHeartFill } from "react-icons/bs";
import { MdZoomOutMap } from "react-icons/md";
import { WiStars } from "react-icons/wi";
import { Link } from "react-router-dom";
import Newarrivalsdata from "../../../Data/Newarrivalsdata";
import productselector from "../../../media/Newarrivals/product-selecter.jpg";
import secondselector from "../../../media/Newarrivals/seonc-selector.jpg";
import Cards from "../../Component/Card";
import { selector } from "../../Component/Common/CommonArrivals";
import Newarrivals from "../../NewArrivals/Newarrivals";
import "./Sample.scss";
const Sample = () => {
  const [active, setActive] = useState(
    Array(Newarrivalsdata.length).fill(false)
  );

  const changer = (index) => {
    const newActive = [...active];
    newActive[index] = !newActive[index];
    setActive(newActive);
  };
  return (
    <>
      <div className="container  align-items-center d-flex flex-column justify-content-center">

      <div className="trend-man row justify-content-center d-flex w-100">
                  <Cards changer={changer} active={active} index={ index} />
      </div>
      <div className=" btn show-me d-flex align-items-center gap-3 my-5">
        <Spinner animation="border" role="status">
        </Spinner>
        <span>Show Me MOre</span>
        </div>
      </div>
      </>
  );
};

export default Sample;
