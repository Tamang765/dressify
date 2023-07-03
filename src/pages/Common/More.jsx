import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const More = ({heading,desc}) => {
  return (
    <div className="more-section btn container d-flex flex-column justify-content-center more-items align-items-center" height={ 80}>
    <h2>{heading} <BsArrowUpRight/> </h2>
    <p>{desc}</p>
</div>
  )
}

export default More