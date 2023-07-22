import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

// export const ButtonsWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

export const CartItemLine = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const ChosenGoodWrapper = styled.div`
  display: flex;
  width: 700px;
`;

export const CartItemTitle = styled.h3`
  margin-bottom: 10px;
`;

export const CartItemText = styled.p`
  margin-bottom: 10px;
`;

export const CartItemImg = styled.img`
  width: 100px;
  margin-right: 20px;
`;

export const CartItemQuantityBtn = styled.button`
  width: 30px;
  padding: 5px;
  cursor: pointer;
`;

export const CartItemQuantity = styled.div`
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

export const CartItemSum = styled.div`
  width: 100px;
  margin-right: 20px;
  text-align: center;
`;

export const CartItemDelBtn = styled.button`
  padding: 5px;
`;
