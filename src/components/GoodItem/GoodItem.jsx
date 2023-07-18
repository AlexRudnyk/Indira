import { useDispatch } from 'react-redux';
import { deleteGood } from 'redux/goods/operations';
import { useAuth } from 'hooks';
import {
  GoodsItemWrapper,
  GoodsItemImg,
  GoodsItemTitle,
  GoodsItemText,
  DescriptionWrapper,
  DeleteButton,
} from './GoodItem.styled';

export const GoodItem = ({ good }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleDelete = () => {
    dispatch(deleteGood(good._id));
  };

  return (
    <>
      <GoodsItemWrapper>
        <GoodsItemImg src={good.photoURL} alt="good" />
        <DescriptionWrapper>
          <div>
            <GoodsItemTitle>{good.title}</GoodsItemTitle>
            <GoodsItemText>{good.text}</GoodsItemText>
          </div>
          <div>
            <p>{good.price} UAH</p>
          </div>
        </DescriptionWrapper>
      </GoodsItemWrapper>
      {user.role === 'admin' && (
        <DeleteButton type="button" onClick={handleDelete}>
          Delete
        </DeleteButton>
      )}
    </>
  );
};
