import React from 'react'
import Cards from '../../Cards/Cards';

const WeeklyData = [
    {
      id: 1,
      DataName: "Customers",
      Data: "14,121,231",
      img: require("../Dashboard"),
      img: require("../../../../media/Admin/customers.svg"),
    },
    {
      id: 2,
      DataName: "Order",
      Data: "21,31",
      img: require("../../../../media/Admin/cart.svg"),
    },
    {
      id: 3,
      DataName: "Avg Sale",
      Data: "7,231",
      img: require("../../../../media/Admin/sales.svg"),
    },
    {
      id: 4,
      DataName: "Avg Item Sale",
      Data: "4,231",
      img: require("../../../../media/Admin/avgsale.svg"),
    },
    {
      id: 5,
      DataName: "Total Sale",
      Data: "1,231",
      img: require("../../../../media/Admin/calculate.svg"),
    },
    {
      id: 6,
      DataName: "Visitors",
      Data: "8,231",
      img: require("../../../../media/Admin/visitors.svg"),
    },
    {
      id: 7,
      DataName: "Total Products",
      Data: "9,231",
      img: require("../../../../media/Admin/productbag.svg"),
    },
    {
      id: 8,
      DataName: "Top Selling Item",
      Data: "10,231",
      img: require("../../../../media/Admin/topselling.svg"),
    },
    {
      id: 9,
      DataName: "Dealership",
      Data: "10,231",
      img: require("../../../../media/Admin/handshake.svg"),
    },
  ];
const Weekly = () => {
  return (
      <div className='weekly d-flex flex-wrap gap-4 justify-content-between'>
          {
              WeeklyData.map((items) => (
                  <Cards items={ items} />
              ))
          }
    </div>
  )
}

export default Weekly