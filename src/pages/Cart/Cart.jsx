import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { BiColorFill } from "react-icons/bi";
import { MdNotInterested } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { IoIosResize } from "react-icons/io";
import { Link } from "react-router-dom";
import AddCart from "../Component/AddCart";
import "./Cart.scss";
import Ordersummary from "../Component/Ordersummary";
import Checkout from "../Component/Checkout";
import { useDispatch, useSelector } from "react-redux";
import { CartList, remove } from "../../app/CartSlice";

const Cart = () => {
  const cart = useSelector(CartList);
  let page="cart"
  const [quantity, setQuantity] = useState(cart[0]?.amount);
  const [totalQuantity, setTotalQuantity] = useState(cart[0]?.totalAmount)
  console.log(totalQuantity);
  const count = cart?.length > 0 ? cart[0].amount : 0;
  const dispatch = useDispatch();
  const [checkout, setCheckout] = useState(false);
  const handleCheckout = () => {
    return setCheckout(!checkout);
  };
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  let singleProduct = 0;
  if (cart && cart.length > 0) {
    singleProduct = cart.reduce(
      (total, item) => item.totalPrice * item.amount,
      0
    );
  }
  
  let cartTotal = 0;
  if (cart && cart.length > 0) {
    cartTotal = cart.reduce((total, item) => total + item.totalPrice * item.amount, 0);
  }
  
  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };
  const handleQuantityIncrease = () => {
    setQuantity((quantity) => quantity + 1);
  };
  console.log(cart);
  return (
    <div className="container-fluid cart">
      <div className="container">
        <h2 className="fw-bold">Shopping Cart</h2>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/newarrival">Newarrivals</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            {checkout ? <span>Checkout</span> : "Cart"}
          </Breadcrumb.Item>
        </Breadcrumb>
        <hr />
        <div className="cart-items d-flex">
          {checkout ? (
            <Checkout />
          ) : (
            <div className="itemdata col-7">
              {cart &&
                cart?.map((item, i) => (
                  <>
                    <div
                      className="cart_box d-flex align-items-center "
                      key={item.id}
                    >
                      <div className="cart_img my-4">
                        <img src={item.img && item?.img} alt="" />
                      </div>
                      <div className=" item-details d-flex flex-column w-100">
                        <div className="item d-flex align-items-center  justify-content-between">
                          <div className="d-flex flex-column">
                            <strong>{item.name}</strong>
                            <small>
                              Color: <BiColorFill /> {item.color}
                            </small>
                            <small>
                              Size: <IoIosResize /> {`${item.size},`}
                            </small>
                            <small>
                              Quantity: <IoIosResize /> {`${item.amount}`}
                            </small>
                          </div>
                          <div className="manage-quantity">
                            <AddCart
                              item={item}
                              amount={item.amount}
                              quantity={quantity}
                              totalAmount={totalQuantity}
                              updateQuantity={setQuantity}
                              handleQuantityDecrease={handleQuantityDecrease}
                              handleQuantityIncrease={handleQuantityIncrease}
                              page={page}
                              singleProduct={singleProduct}
                            />
                          </div>
                          <span className="price">$ {item.totalPrice}</span>
                          <span>Rs. {item.totalPrice * item.amount}</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                          {/* <span className="stock">
                    {item.stock === "Sold Out" ? (
                      <MdNotInterested />
                    ) : (
                      <TiTick />
                    )}
                    {item.stock}
                  </span> */}
                          <button
                            className="remove-item fw-bold"
                            onClick={() => handleRemove(i)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          )}
          <div className="divider col-2 "></div>
          {
            <Ordersummary
              singleProduct={singleProduct}
              handleCheckout={handleCheckout}
              buttonHeading="Confirm"
              cartTotal={cartTotal}
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
