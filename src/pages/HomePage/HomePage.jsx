import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGoods } from 'redux/goods/operations';
import { useGoods } from 'hooks';
import { GoodItem } from 'components/GoodItem';
import { GoodsList, GoodsItem } from './HomePage.styled';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { goods } = useGoods();

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  return (
    goods.length !== 0 && (
      <>
        <GoodsList>
          {goods.map(good => (
            <GoodsItem key={good._id}>
              <GoodItem good={good} />
            </GoodsItem>
          ))}
        </GoodsList>
      </>
    )
  );
};
