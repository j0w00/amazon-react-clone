import React from 'react';
import './Product.css';

import { useStateValue } from '../../StateProvider';

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  // console.log('basket: ', basket);

  const addToBasket = () => {
    // dispatch item action to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }

  return (
    <div className='product'>
      
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => <span key={i}>🔥</span>)}
        </div>
      </div>

      <img
        src={image}
        alt={title}
      />

      <button onClick={addToBasket}>Add to Basket</button>

    </div>
  )
}

export default Product
