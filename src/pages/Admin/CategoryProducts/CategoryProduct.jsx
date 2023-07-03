import React from 'react'
import Newarrivalsdata from '../../../Data/Newarrivalsdata'
import { Table } from 'react-bootstrap'
import Searchbar from '../Dashboard/Searchbar/Searchbar'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'
import "./CategoryProduct.scss"
const categoryList = [{
  id: "1",
  category: "Shoes",
  status:"Published"
}
  ,
  {
    id: "2",
    category: "Pants",
    status:"Published"
  },
  {
    id: "3",
    category: "Jacket",
    status:"Published"
  },
  {
    id: "4",
    category: "Sweater",
    status:"Scheduled"
  },
  {
    id: "5",
    category: "Tshirt",
    status:"Published"
  },
  {
    id: "6",
    category: "Hand Wear",
    status:"Hidden"
  },
]
const CategoryProduct = () => {
  const data = new useState(categoryList);

  return (
    <div className='category-product'>
      <Searchbar />
      <hr />
          <>
            <Table style={{fontSize:"14px"}}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
          </thead>
          {
        categoryList.map((items, index) => (
              <tbody>
                <tr>
                  <td>{ items.id}.</td>
              <td >{items.category}</td>
              <td ><span style={{color:"white",padding:" 4px 7px",borderRadius:"9px",
                backgroundColor: items.status==="Published"? "green":items.status==="Scheduled"? "#FFC107":items.status === "Hidden"?"red":""
              }}>{items.status}</span> </td>
              <div className='btn-group d-flex gap-2'>
                <button style={{border:"none",background:"white"}}>
                <FiEdit className='fs-5' color='green' />
                </button>
                <button style={{border:"none",background:"white"}}>
                  <MdDelete className='fs-4' color='red'/>
               </button>
              </div>
            </tr>
              </tbody>
            ))
          }
            </Table>
          </>
    </div>
  )
}

export default CategoryProduct