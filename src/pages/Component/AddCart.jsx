import React, { useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import { GiShoppingCart } from "react-icons/gi";
import "./Addcart.scss";
import addicon from "../../media/add.jpg";
import subtracticon from "../../media/subtract.jpg";
import { add } from "../../app/CartSlice";
import { useDispatch } from "react-redux";

const AddCart = ({
  handleClick,
  item,
  quantity,
  amount,
  totalQuantity,
  updateQuantity,
  singleProduct,
  handleQuantityDecrease,
  handleQuantityIncrease,
}) => {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(totalQuantity);

  const adder = () => {
    const updatedNumber = number + 1;
    setNumber(updatedNumber);
    dispatch(add({ ...item, totalAmount: updatedNumber }));
  };
  const subtract = () => {
    if (number > 1) {
      const updatedNumber = number - 1;
      setNumber(updatedNumber);
      dispatch(add({ ...item, totalAmount: updatedNumber }));
    }
  };

  return (
    <div className="cart d-flex flex-column justify-content-between mt-0 w-100 pb-4">
      <div className="d-flex justify-content-between">
        <ButtonGroup className="d-flex gap-3 align-items-center bg-white">
          <button className="subtract" onClick={amount ? subtract : handleQuantityDecrease}>
            <img src={subtracticon} alt="" />
          </button>
          <span className="fs-4">{number && number || amount ? amount : quantity}</span>
          <button className="add" onClick={amount ? adder : handleQuantityIncrease}>
            <img src={addicon} alt="" />
          </button>
        </ButtonGroup>
        <div className="btn d-flex align-items-center gap-2 icon px-3 py-2" onClick={handleClick}>
          <GiShoppingCart size={25} /> <span>Add to cart</span>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddCart;
