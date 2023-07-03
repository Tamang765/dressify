import { useDispatch, useSelector } from "react-redux";
import { Favorite } from "../../app/AddIdSlice";
import { MdNotInterested } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { BiColorFill } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";
import AddCart from "./AddCart";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiFillHeart, AiFillStar } from "react-icons/ai";
import { WiStars } from "react-icons/wi";
import "../Trending/ManTrend/Trendman.scss";
import Cards from "./Card";
import { add } from "../../app/CartSlice";

const WishList = () => {
  const favoriteList = useSelector(Favorite);
  console.log(favoriteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [productId, setProductId] = useState("");
  const handleAddCart = (item) => {
    dispatch(add(item));
    };
  const productIdentify = (id) => {
    navigate(`/product_detail/${id}`);
  };
  return (
    <><div className="d-flex  justify-content-between align-items-start gap-3 px-2 trend-man mt-5 pt-5">
      <div className="row m-auto " style={{ width: "90%" }}>

        {favoriteList.length > 0 ?
          favoriteList.map((item, i) => (
            <Cards fabitem={item} index={i} id={item.id} handleClick={handleAddCart} img={item.variation[0].img} />
          )) :
          <div className="text-center" style={{height:"50vh"}}>
            No items in Wishlist
          </div>}
      </div>
    </div><hr /></>
  );
};

export default WishList;
