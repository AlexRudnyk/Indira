import { useAuth } from 'hooks';
import { CartItem } from 'components/CartItem';

export const CartPage = () => {
  const { user } = useAuth();

  return (
    user.goodsInCart.length !== 0 && (
      <ul>
        {user.goodsInCart.map(good => (
          <CartItem good={good} key={good._id} />
        ))}
      </ul>
    )
  );
};
