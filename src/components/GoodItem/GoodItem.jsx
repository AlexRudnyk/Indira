export const GoodItem = ({ good }) => {
  return (
    <>
      <div>
        <img src={good.photoURL} alt="good" />
      </div>
      <div>{good.title}</div>
      <div>{good.text}</div>
      <div>{good.price} UAH</div>
    </>
  );
};
