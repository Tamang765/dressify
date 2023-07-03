import React from "react";
import "./SizeButton.scss";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import AddCart from "../AddCart";
import { FaBullseye } from "react-icons/fa";
import { add } from "../../../app/CartSlice";
import { useDispatch } from "react-redux";
import Newarrivals from "../../NewArrivals/Newarrivals";

const SizeButton = ({ item, sizes }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [active, setActive] = useState(FaBullseye);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [selected, setSelected] = useState(false);
  const [selectedColor, setSelectColor] = useState(item?.variation[0]?.color);

  // icon change
  const changeIcon = () => {
    setActive(!active);
  };

  const colorActivator = (item, color, img) => {
    item.selectedProduct = img;
    setSelectColor(color);
    setSelected(true);
    setProduct({ ...product, item });
  };

  // change size
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // adding to cart
  const handleAddCart = () => {
    if (selectedSize && quantity > 0) {
      const productDetail = {
        id: item.id,
        product_head: item.product_head,
        cloth: item?.variation[0].img,
        price: item.price,
        color: selectedColor,
        size: selectedSize,
        amount: quantity,
        category: item.category,
      };
      dispatch(add(productDetail));
      setSelectedSize("");
      setQuantity(1); // Reset quantity to 1
    }
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };
  const handleQuantityIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };

  return (
    <>
      <div className="sizeButton d-flex  gap-2">
        {item?.size.map((size) => (
          <button
            className={selectedSize === size ? "selected" : ""}
            onClick={() => handleSizeChange(size)}
            key={size}
          >
            <strong>{size}</strong>
          </button>
        ))}
      </div>
      <div className="fw-semibold">Color: {selectedColor}</div>
      <div className="d-flex gap-2 align-items-center">
        {item.variation?.map((colors, index) => (
          <div
            className={`rounded-circle ${
              selectedColor === colors.color ? "border-color" : "no-color"
            }`}
            key={index}
          >
            <div
              className="btn p-2 text-white rounded-circle border-0"
              style={{ background: colors.color }}
              onClick={() => colorActivator(item, colors.color, colors.img)}
            ></div>
          </div>
        ))}
      </div>
      <div className="d-flex gap-4">
        <AddCart
          handleClick={handleAddCart}
          item={item}
          quantity={quantity}
          updateQuantity={setQuantity}
          handleQuantityDecrease={handleQuantityDecrease}
          handleQuantityIncrease={handleQuantityIncrease}
        />
        {/* <button
          className="love-icon bg-gray border-0  d-flex align-items-center"
          style={{ zIndex: 3 }}
          onClick={changeIcon}
        >
          <AiFillHeart
            size={30}
            className={active ? "stroke fs-5" : "none fs-5"}
            style={{ color: active ? "red" : "white" }}
          />
        </button> */}
      </div>
    </>
  );
};

export default SizeButton;
