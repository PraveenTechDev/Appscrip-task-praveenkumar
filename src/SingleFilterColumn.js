import React from 'react'
import "./FilterColumn.css"
import arrowleft from "./images/arrow-left.png"

function SingleFilterColumn({title}) {
  return (
    <>
    <div className='SingleFilter'>
    <div className='top-single-filter'><h4>{title}</h4><img src={arrowleft} alt='arrow-left'/></div>
    <div className='bottom-single-filter'>All</div>
    </div>
    <hr/>
    </>
  )
}

export default SingleFilterColumn;