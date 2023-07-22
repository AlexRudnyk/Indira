import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoodDetailsWrapper } from './GoodDetailsPage.styled';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { toast } from 'react-toastify';

export const GoodDetailsPage = () => {
  const { id } = useParams();
  const [good, setGood] = useState({});
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function getGood() {
      try {
        const { data } = await axios.get(
          `http://localhost:3030/api/goods/id/${id}`
        );
        setGood(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getGood();
  }, [id]);

  const handleAddCartClick = () => {
    if (isLoggedIn) {
      dispatch(addToCart(id));
    } else {
      toast.error('please login');
    }
  };

  return (
    good && (
      <GoodDetailsWrapper>
        <div>
          <img src={good.photoURL} alt="good" />
        </div>
        <div>
          <h3>{good.title}</h3>
          <p>{good.text}</p>
          <p>{good.description}</p>
          <p>{good.price} UAH</p>
          <button type="button" onClick={handleAddCartClick}>
            Add to Cart
          </button>
        </div>
      </GoodDetailsWrapper>
    )
  );
};
