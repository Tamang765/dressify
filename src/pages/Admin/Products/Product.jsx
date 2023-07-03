import React from "react";
import Newarrivalsdata from "../../../Data/Newarrivalsdata";
import DashboardSection from "../Dashboard/DashboardSection/DashboardSection";
import { ButtonGroup, Table } from "react-bootstrap";
import Searchbar from "../Dashboard/Searchbar/Searchbar";
import "./Product.scss";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
const Product = () => {
  return (
    <>
      <div className="product w-100 ">
      <Searchbar />
        <hr />
        <div className="">
          <h3>Products Details</h3>
          <Table  style={{ width: "109rem" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Details</th>
                <th>Size</th>

                <th>Price</th>
              </tr>
            </thead>
            {Newarrivalsdata.map((item, index) => (
              <tbody>
                <tr>
                  <td className="pt-5">{item.id}.</td>
                  <td>
                    <img src={item.cloth} alt="" style={{ width: "9rem" }} />
                  </td>
                  <td className="pt-5">
                    <span>{item.product_head}</span>
                  </td>
                  <td className="pt-5">
                    <span >{item.size}</span>
                  </td>
                  <td className="pt-5">$ {item.price}</td>
                  <div className="btn-group d-flex gap-3 pt-5">
                    <button style={{ border: "none", background: "white" }}>
                      <FiEdit className="fs-5" color="green" />
                    </button>
                    <button style={{ border: "none", background: "white" }}>
                      <MdDelete className="fs-4" color="red" />
                    </button>
                  </div>
                </tr>
              </tbody>
            ))}
          </Table>
        </div>
      </div>
    </>
  );
};

export default Product;
