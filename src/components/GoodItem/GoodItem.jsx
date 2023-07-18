import { useDispatch } from 'react-redux';
import { deleteGood } from 'redux/goods/operations';

export const GoodItem = ({ good }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteGood(good._id));
  };

  return (
    <>
      <div>
        <img src={good.photoURL} alt="good" />
      </div>
      <div>{good.title}</div>
      <div>{good.text}</div>
      <div>{good.price} UAH</div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
};
