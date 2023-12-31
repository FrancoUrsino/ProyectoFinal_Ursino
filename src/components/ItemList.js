import React from 'react'
import Item from './Item'


function ItemList({ product }) {
  return (
    <div className='items__container justify-center'>
      {product.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList