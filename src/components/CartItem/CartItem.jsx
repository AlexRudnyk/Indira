import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  CounterWrapper,
  CartItemLine,
  ButtonsWrapper,
} from './CartItem.styled';
import { deleteFromCart } from 'redux/auth/operations';

export const CartItem = ({ good }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handlePlusClick = () => {
    setQuantity(state => (state += 1));
  };

  const handleMinusClick = () => {
    setQuantity(state => (state -= 1));
  };

  const handleDeleteClick = () => {
    dispatch(deleteFromCart(good._id));
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
      <ButtonsWrapper>
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
        <div>
          <button type="button" onClick={handleDeleteClick}>
            Delete
          </button>
        </div>
      </ButtonsWrapper>
      <div>{good.price * quantity} UAH</div>
    </CartItemLine>
  );
};
