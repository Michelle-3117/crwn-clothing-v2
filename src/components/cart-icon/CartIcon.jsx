import React from 'react'
import {ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import './cart-icon.scss'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext.jsx'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext) 
    console.log(isCartOpen)
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
      <div className='cart-icon-container' onClick={ toogleIsCartOpen }>
          <ShoppingBag className='shopping-icon' />
          <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon