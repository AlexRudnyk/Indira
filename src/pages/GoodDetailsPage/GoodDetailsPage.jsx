import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const GoodDetailsPage = () => {
  const { id } = useParams();
  const [good, setGood] = useState({});

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
  }, [id, good]);

  return (
    <>
      <img src={good.photoURL} alt="good" />
      <h3>{good.title}</h3>
      <p>{good.text}</p>
      <p>{good.price}</p>
    </>
  );
};
