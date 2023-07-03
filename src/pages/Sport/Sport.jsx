import React from 'react'
import SportData from '../../Data/SportData';
import FilterPage from '../Categories/Man/Dumb';
import { useState } from 'react';

const Sport = () => {
    const colors = [...new Set(SportData.flatMap(item => item.variation.map(variant => variant.color)))];
    const [active, setActive] = useState(
      Array(SportData.length).fill(false)
    );
    return (
      <>
        <FilterPage dataof={SportData} filtercolor={colors} title="Sports"/>
      </>
    );
}

export default Sport