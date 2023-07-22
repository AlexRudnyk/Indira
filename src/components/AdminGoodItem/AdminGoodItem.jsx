import { useDispatch } from 'react-redux';

import {
  AdminGoodItemWrapper,
  AdminGoodItemImg,
  AdminGoodItemLine,
  AdminGoodItemText,
  AdminGoodItemBtn,
  AdminTextWrapper,
} from './AdminGoodItem.styled';
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
    <AdminGoodItemLine>
      <AdminGoodItemWrapper>
        <AdminGoodItemImg src={good.photoURL} alt="good" />
        <AdminTextWrapper>
          <AdminGoodItemText>{good.title}</AdminGoodItemText>
          <AdminGoodItemText>{good.price} UAH</AdminGoodItemText>
        </AdminTextWrapper>
        <AdminGoodItemBtn type="button" onClick={handleEditGootClick}>
          Edit
        </AdminGoodItemBtn>
        <AdminGoodItemBtn type="button" onClick={handleDeleteGoodClick}>
          Delete
        </AdminGoodItemBtn>
      </AdminGoodItemWrapper>
    </AdminGoodItemLine>
  );
};
