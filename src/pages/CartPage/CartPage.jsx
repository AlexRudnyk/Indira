import { useAuth } from 'hooks';
import { CartItem } from 'components/CartItem';
import {
  CartPageContainer,
  CartPageTitle,
  TotalSumText,
  MakeOrderWrapper,
  OrderBtn,
  TotalSumSpan,
} from './CartPage.styled';
import { useState } from 'react';
import axios from 'axios';

export const CartPage = () => {
  const { user } = useAuth();
  const [totalSum, setTotalSum] = useState('');

  let totalSumArr = [];
  let goodsArray = [];

  const handleGetOrder = ({ title, price, quantity }) => {
    goodsArray.push({ title, price, quantity });
  };

  const getTotalSum = sum => {
    if (sum) {
      totalSumArr.push(sum);
    }
    const totalSumRes = totalSumArr.reduce((acc, sum) => acc + sum, 0);
    setTotalSum(totalSumRes);
  };

  const handleOrderClick = async () => {
    const mailBody = {
      user,
      goods: JSON.stringify(goodsArray),
      totalSum,
    };

    try {
      const { data } = await axios.post(
        'http://localhost:3030/api/users/order',
        mailBody
      );
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <CartPageContainer>
      <CartPageTitle>Your goods in cart</CartPageTitle>
      {user.goodsInCart.length !== 0 ? (
        <>
          <ul>
            {user.goodsInCart.map(goodId => (
              <CartItem
                goodId={goodId}
                key={goodId}
                getTotalSum={getTotalSum}
                getOrder={handleGetOrder}
              />
            ))}
          </ul>
          <MakeOrderWrapper>
            <TotalSumText>
              Your order is <TotalSumSpan>{totalSum}</TotalSumSpan> UAH
            </TotalSumText>
            <OrderBtn type="button" onClick={handleOrderClick}>
              Make order
            </OrderBtn>
          </MakeOrderWrapper>
        </>
      ) : (
        <div>
          <p>You didn't add any good to cart</p>
        </div>
      )}
    </CartPageContainer>
  );
};
