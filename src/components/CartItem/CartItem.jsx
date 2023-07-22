import { useGoods } from 'hooks';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from 'redux/auth/operations';
import {
  CounterWrapper,
  CartItemLine,
  ButtonsWrapper,
} from './CartItem.styled';

export const CartItem = ({ goodId }) => {
  const [good, setGood] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { goods } = useGoods();

  useEffect(() => {
    const foundGood = goods.find(item => item._id === goodId);
    setGood(foundGood);
  }, [goodId, goods]);

  const handlePlusClick = () => {
    setQuantity(state => (state += 1));
  };

  const handleMinusClick = () => {
    setQuantity(state => (state -= 1));
  };

  const handleDeleteClick = () => {
    dispatch(deleteFromCart(goodId));
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
