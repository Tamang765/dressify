import React from "react";
import { BiColorFill } from "react-icons/bi";
import { IoIosResize } from "react-icons/io";

const Ordersummary = ({
  checkout,
  cart,
  AddCart,
  removeFromLocalStorage,
  cartTotal,
  handleCheckout,
  singleProduct
}) => {
  const shippingCost = 100;
  return (
    <div className="ordersummary col-4">
      <div
        className={
          checkout
            ? "order-summary col confirm-section position-relative"
            : "order-summary col pt-5"
        }
      >
        <h3 className="fs-5 fw-bold px-2">Order Summary</h3>
        {checkout ? (
          <>
            <div className="itemdata">
              {cart?.map((item) => (
                <>
                  <div
                    className="cart_box d-flex align-items-center"
                    key={item.id}
                  >
                    <div className="cart_img my-4">
                      <img src={item.cloth} alt="" />
                    </div>
                    <div className="item-details d-flex flex-column gap-5">
                      <div className="d-flex align-items-center justify-content-between gap-5">
                        <div className="d-flex flex-column">
                          <small>{item.product_head}</small>
                          {item.color ? (
                            <span>
                              <BiColorFill /> {item.color}
                            </span>
                          ) : (
                            <span>
                              <IoIosResize /> {item.size}
                            </span>
                          )}
                        </div>
                        <span className="price">$ {item.price}</span>
                        <span>{singleProduct}asdsad</span>
                      </div>
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="manage-quantity">
                          <AddCart />
                        </div>
                        <button
                          className="remove-item fw-bold"
                          onClick={() => removeFromLocalStorage(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
            <div className="py-4">
              <div className="d-flex flex-column">
                <div className="subtotal d-flex justify-content-between">
                  <small className="text-muted">Subtotal</small>
                  <strong>{cartTotal}</strong>
                </div>
                <hr />
                <div className="shipping-estimate d-flex justify-content-between">
                  <small className="text-muted">Shipping Estimate</small>
                  <strong>{singleProduct}</strong>
                </div>
                <hr />
                <div className="tax-estimate d-flex justify-content-between">
                  <small className="text-muted">Tax estimate</small>
                  <strong>$298.0</strong>
                </div>
                <hr />
                <div className="order-total d-flex justify-content-between align-items-center">
                  <strong className="fs-6">Order Total</strong>
                  <strong>{cartTotal}</strong>
                </div>
                <div className="btn btn-checkout">Confirm Order</div>
              </div>
            </div>
          </>
        ) : (
          <div className="py-4">
            <div className="d-flex flex-column">
              <div className="subtotal d-flex justify-content-between">
                <small className="text-muted">Subtotal</small>
                <strong>Rs.{cartTotal}</strong>
              </div>
              <hr />
              <div className="shipping-estimate d-flex justify-content-between">
                <small className="text-muted">Shipping Estimate</small>
                  <strong>Rs. {shippingCost}</strong>
              </div>
              <hr />
              {/* <div className="tax-estimate d-flex justify-content-between">
                <small className="text-muted">Tax estimate</small>
                <strong>$298.0</strong>
              </div> */}
              <hr />
              <div className="order-total d-flex justify-content-between align-items-center">
                <strong className="fs-6">Order Total</strong>
                <strong> Rs.{cartTotal+shippingCost}</strong>
              </div>
              <div className="btn btn-checkout" onClick={handleCheckout}>
                Checkout
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ordersummary;
