import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGoods } from 'redux/goods/operations';
import { useGoods } from 'hooks';
import { GoodItem } from 'components/GoodItem';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { goods } = useGoods();

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
