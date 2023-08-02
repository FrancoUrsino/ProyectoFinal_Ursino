import React from 'react'
import ItemCount from './products/ItemCount'

function Item({id, name, price, img, stock}) {
  return (
    <div className='card'>
      <div className='card__container'>
        <div className='card__container--img'>
        <img src={img} alt={name} className='card__img'/>
        </div>
        <div className='card__container--container'>
          <h3 className='card__container--container--title'>{name}</h3>
          <p className='card__container--container--price'>${price}</p>
          <ItemCount stock={stock} initial={1} onAdd={''}/>
          <button className='card__container--container--btn'>ver más</button>
        </div>
      </div>
    </div>
  )
}

export default Item