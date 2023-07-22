import { useAuth } from 'hooks';
import { CartItem } from 'components/CartItem';
import { CartPageContainer } from './CartPage.styled';

export const CartPage = () => {
  const { user } = useAuth();

  const handleOrderClick = () => {
    console.log('Order is in process');
  };

  return (
    <CartPageContainer>
      {user.goodsInCart.length !== 0 ? (
        <>
          <ul>
            {user.goodsInCart.map(goodId => (
              <CartItem goodId={goodId} key={goodId} />
            ))}
          </ul>
          <div>Total Summ</div>
          <button type="button" onClick={handleOrderClick}>
            Order
          </button>
        </>
      ) : (
        <div>
          <p>You didn't add any good to cart</p>
        </div>
      )}
    </CartPageContainer>
  );
};
