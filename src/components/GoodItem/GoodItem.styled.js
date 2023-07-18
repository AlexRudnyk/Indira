import styled from 'styled-components';

export const GoodsItemWrapper = styled.div`
  /* outline: 1px solid black; */
  height: 545px;
  border-radius: 20px;
`;

export const GoodsItemImg = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const GoodsItemTitle = styled.h3`
  margin-bottom: 15px;
`;

export const GoodsItemText = styled.p`
  /* margin-bottom: 15px; */
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 140px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
