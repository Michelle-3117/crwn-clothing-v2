import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext.jsx'
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.styles.jsx'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext) 
    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
      <CartIconContainer onClick={ toogleIsCartOpen }>
          <ShoppingIcon className='shopping-icon' />
          <ItemCount className='item-count'>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon