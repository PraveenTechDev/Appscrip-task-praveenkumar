import React from 'react'
import FilterColumn from './FilterColumn'
import Product from './Product'

function ProductList({isFilterColumnVisible}) {
  return (
    <div className='product-list'>
       {isFilterColumnVisible&&<FilterColumn/>}
       <Product isFilterColumnVisible={isFilterColumnVisible}/>
    </div>
  )
}

export default ProductList