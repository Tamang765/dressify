import React from 'react'
import CommonTab from './Women/Tab'
import KidsData from '../../Data/KidsData'
import Newarrivalsdata from '../../Data/Newarrivalsdata'

const Kids = () => {
    const data = Newarrivalsdata.filter((item) => item.genderCategory === "Kid")
    console.log(data);
  return (
      <>
          <CommonTab data={data} navigation="/kids/productdetails"/>
      </>
  )
}

export default Kids