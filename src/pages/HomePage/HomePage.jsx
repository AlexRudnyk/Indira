import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGoods } from 'redux/goods/operations';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { GoodItem } from 'components/GoodItem';

export const HomePage = () => {
  const dispatch = useDispatch();
  const goods = useSelector(state => state.goods.goods);

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  return (
    goods.length !== 0 && (
      <>
        <ul>
          {goods.map(good => (
            <li key={good._id}>
              <GoodItem good={good} />
            </li>
          ))}
        </ul>
      </>
    )
  );
};
