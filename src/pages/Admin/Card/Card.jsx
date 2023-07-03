import React from 'react'
import { Card } from 'react-bootstrap'
const AdminCardData = [{
    id: 1,
    img:require( "../../../media/Admin/dollar.svg"),
    name: "Revenue",
    number: "$12,312",
    color: "green",
    background:"#D1E7DD"
},
{
    id: 2,
    img: require("../../../media/Admin/card.svg"),
    name: "Expense",
    number: "$112,312",
    color: "#DC3545",
    background:"#F8D7DA"
    },  
    {
        id: 3,
        img: require("../../../media/Admin/emoji.svg"),
        name: "Happy Clients",
        number: "$12.312",
        color:"#FFC107",
        background:"#FFF3CD"
    },
    {
             id: 4,
            img: require("../../../media/Admin/bag.svg"),
            name: "New Store Open",
        number: "$89,112",
            color:"#0DCAF0",
        background:"#CFF4FC"
    }
]
const AdminCard = () => {
  return (
      <div className='admin-card mt-5 d-flex gap-2 justify-content-between' >
          {
              AdminCardData.map((items, index) => (
                  <Card style={{ width: "20.23vw", height: "8vh", paddingInline: "8px" ,backgroundColor:items.background,border:"none"}}>
              <div className="structure d-flex align-items-center h-100 gap-2">
                  <div className="icon" style={{padding:"10px",borderRadius:"7px",backgroundColor:items.color}}><img src={items.img.default} alt="" style={{width:"1vw"}}/></div>
                  <div className="overview"><h6>{items.name}</h6>
                          <span>{ items.number}</span></div>
              </div>
          </Card>
          ))
        }
    </div>
  )
}

export default AdminCard