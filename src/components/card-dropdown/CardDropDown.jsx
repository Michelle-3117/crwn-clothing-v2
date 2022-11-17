import React from 'react'
import "./card-dropdown.scss";
import Button from '../button/Button';

const CardDropDown = () => {
  return (
      <div className='cart-dropdown-container'>
          <div className='cart-items'>
              <Button>TO CHECKOUT</Button>
          </div>
    </div>
  )
}

export default CardDropDown