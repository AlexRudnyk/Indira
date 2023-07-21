import { useState } from 'react';
import { CounterWrapper, CartItemLine } from './CartItem.styled';

export const CartItem = ({ good }) => {
  const [quantity, setQuantity] = useState(1);

  const handlePlusClick = () => {
    setQuantity(state => (state += 1));
  };

  const handleMinusClick = () => {
    setQuantity(state => (state -= 1));
  };

  return (
    <CartItemLine>
      <div>
        <img src={good.photoURL} alt="good in cart" width="100px" />
      </div>
      <div>
        <h3>{good.title}</h3>
        <p>{good.text}</p>
        <p>{good.price} UAH</p>
      </div>
      <CounterWrapper>
        <button
          type="button"
          onClick={handleMinusClick}
          disabled={quantity <= 1}
        >
          -
        </button>
        <div>{quantity}</div>
        <button type="button" onClick={handlePlusClick}>
          +
        </button>
      </CounterWrapper>
      <div>{good.price * quantity}</div>
    </CartItemLine>
  );
};
