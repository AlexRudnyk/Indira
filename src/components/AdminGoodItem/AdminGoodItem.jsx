import { useDispatch } from 'react-redux';

import { AdminGoodItemWrapper, AdminGoodItemImg } from './AdminGoodItem.styled';
import { deleteGood } from 'redux/goods/operations';

export const AdminGoodItem = ({ good }) => {
  const dispatch = useDispatch();

  const handleEditGootClick = () => {
    console.log('Edit good');
  };

  const handleDeleteGoodClick = () => {
    dispatch(deleteGood(good._id));
  };

  return (
    <AdminGoodItemWrapper>
      <AdminGoodItemImg src={good.photoURL} alt="good" />
      <p>{good.title}</p>
      <p>{good.price} UAH</p>
      <button type="button" onClick={handleEditGootClick}>
        Edit
      </button>
      <button type="button" onClick={handleDeleteGoodClick}>
        Delete
      </button>
    </AdminGoodItemWrapper>
  );
};
