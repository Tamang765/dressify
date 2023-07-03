import React from 'react'
import SinglePage from './singlePage'
import KidsData from '../../Data/KidsData'

const SingleKids = () => {
    const data= KidsData
  return (
      <>
          <SinglePage data={data} />
      </>
  )
}

export default SingleKids