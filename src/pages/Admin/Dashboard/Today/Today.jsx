import React from "react";
import { Card } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import Cards from "../../Cards/Cards";

const TodayData = [
  {
    id: 1,
    DataName: "Customers",
    Data: "14,231",
    img: require("../Dashboard"),
    img: require("../../../../media/Admin/customers.svg"),
  },
  {
    id: 2,
    DataName: "Order",
    Data: "11,231",
    img: require("../../../../media/Admin/cart.svg"),
  },
  {
    id: 3,
    DataName: "Avg Sale",
    Data: "17,231",
    img: require("../../../../media/Admin/sales.svg"),
  },
  {
    id: 4,
    DataName: "Avg Item Sale",
    Data: "14,231",
    img: require("../../../../media/Admin/avgsale.svg"),
  },
  {
    id: 5,
    DataName: "Total Sale",
    Data: "14,231",
    img: require("../../../../media/Admin/calculate.svg"),
  },
  {
    id: 6,
    DataName: "Visitors",
    Data: "14,231",
    img: require("../../../../media/Admin/visitors.svg"),
  },
  {
    id: 7,
    DataName: "Total Products",
    Data: "14,231",
    img: require("../../../../media/Admin/productbag.svg"),
  },
  {
    id: 8,
    DataName: "Top Selling Item",
    Data: "14,231",
    img: require("../../../../media/Admin/topselling.svg"),
  },
  {
    id: 9,
    DataName: "Dealership",
    Data: "14,231",
    img: require("../../../../media/Admin/handshake.svg"),
  },
];
const Today = () => {
  return (
    <section>
      <div
        className="today d-flex flex-wrap gap-3 justify-content-between"
        style={{ background: "#F9FBFD" }}
      >
        {TodayData.map((items, index) => (
            <Cards items={ items} />
        ))}
      </div>
    </section>
  );
};

export default Today;
