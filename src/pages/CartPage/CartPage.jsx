import { useAuth } from 'hooks';
import { CartItem } from 'components/CartItem';
import {
  CartPageContainer,
  TotalSumText,
  MakeOrderWrapper,
  OrderBtn,
  TotalSumSpan,
} from './CartPage.styled';
import { useState } from 'react';

export const CartPage = () => {
  const { user } = useAuth();
  const [totalSum, setTotalSum] = useState('');

  const handleOrderClick = () => {
    console.log('Order is in process');
  };

  let totalSumArr = [];

  const getTotalSum = sum => {
    if (sum) {
      totalSumArr.push(sum);
    }
    const totalSumRes = totalSumArr.reduce((acc, sum) => acc + sum, 0);
    setTotalSum(totalSumRes);
  };

  return (
    <CartPageContainer>
      {user.goodsInCart.length !== 0 ? (
        <>
          <ul>
            {user.goodsInCart.map(goodId => (
              <CartItem
                goodId={goodId}
                key={goodId}
                getTotalSum={getTotalSum}
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
