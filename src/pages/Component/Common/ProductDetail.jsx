import { Modal } from "react-bootstrap"
import SizeButton from "./SizeButton"

const ProductDetail = ({ product, modalProduct }) => {
  return (
      <>
            {product?.map((item) => (
              <div className="product-head  w-50" key={item.id}>
                <div className="product-heading">
                  <div className="price-reviews d-flex flex-column gap-3 ">
                  <div className="fw-semibold">{item.product_head}</div>
                    <span className="price w-25">${item.price }</span>
                    <p>{item.product_detail }</p>
                      <br />       
                            <SizeButton item={item}  />
                    {/* <span className="middle-gap" width={1} height={2}></span>
                    <span className="d-flex align-items-center text-decoration-uderline">
                      <AiFillStar color="orange" />
                    </span>
                    <span>
                      <WiStars />
                      New one
                    </span> */}
                  </div>
                  {/* <div className="d-flex gap-4 align-items-center">
                    <select name="" id="">
                      <option value="" disabled>
                        Size
                      </option>
                      {Size.map((item, index) => (
                        <>
                          <option value={item}>{item}</option>
                        </>
                      ))}
                    </select>
                    <AddCart item={item} handleClick={handleAddCart} />
                  </div> */}
                  {/* {item.product.map((item, index) => {
                    return (
                      <>
                        <div className="price-reviews d-flex gap-3 align-items-center py-4" key={index}>
                          <span className="price">{item.price}</span>
                          <span
                            className="middle-gap"
                            width={1}
                            height={2}
                          ></span>
                          <span className="d-flex align-items-center text-decoration-uderline">
                            <AiFillStar color="orange" /> {item.reviews}
                          </span>
                          <span>
                            <WiStars />
                            New one
                          </span>
                        </div>
                        <div className="color py-1 ">
                          <span>Color: Orange</span>
                          <div className="d-flex gap-2 py-2">
                            {item.color.map((item, index) => (
                                    <div
                                    className="image-collection d-flex align-items-center justify-content-center" key={index}
                                    onClick={(event) => {
                                      const allDivs =
                                        document.querySelectorAll(".image-collection");
                                      allDivs.forEach((div) => {
                                        div.classList.remove("active");
                                      });
                                      event.currentTarget.classList.add("active");
                                    }}
                                  >
                                <img                           
                                  src={item}
                                  height={30}
                                  width={60}
                                  alt=""
                                  onClick={changer}
                                />
                              </div>
                  ))}
                          </div>
                        </div>
                        <div className="size d-flex flex-column gap-2">
                          <div className="size-heading d-flex justify-content-between">
                            <span>Size: </span>
                            <button>See Sizing Chart</button>
                          </div>
                          <div className="button-group d-flex gap-1">
                            <button>XS</button>
                            <button>S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button disabled>2XL</button>
                            <button disabled>3XL</button>
                          </div>
                        </div>
                        <AddCart handleClick={handleClick} item={item} />
                        <hr />
                        <br />
                        <ProductDesc />
                        <br />
                        <Services/>
                      </>
                    );
                  })} */}
                </div>
              </div>
            ))}
          
          { modalProduct?
              <>
                  <div className="product-head pt-3">
                      <div className="product-heading pe-3">
              <div className="price-reviews d-flex flex-column gap-3 ">
                <div className="d-flex justify-content-between align-items-center">
                <div className="fw-semibold">Price
                  </div>   
                </div>
                <span className="price w-25">${modalProduct.price}</span>
                {/* <div className="fw-semibold">Description</div>
                    <small className="text-justify">{modalProduct.product_detail }</small> */}
                    <span className="fw-semibold">asSize</span>
                              <SizeButton item={modalProduct} />
                      </div>
                      </div>
                  </div>
              </> : ""}
      </>
  )
}

export default ProductDetail