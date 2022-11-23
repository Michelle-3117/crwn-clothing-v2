import React from 'react'
import "./card-dropdown.jsx";
import Button from '../button/Button';
import CartItem from '../cart-item/CartItem'
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { CartDropDownContainer, EmptyMessage, CartItems  } from './card-dropdown.jsx';

const CardDropDown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your Cart is Empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
}

export default CardDropDown