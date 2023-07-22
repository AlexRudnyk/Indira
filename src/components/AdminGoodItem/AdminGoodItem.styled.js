import styled from 'styled-components';

export const AdminGoodItemLine = styled.li`
  width: 700px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  border-radius: 10px;
  padding: 10px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const AdminGoodItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const AdminGoodItemImg = styled.img`
  width: 100px;
  border-radius: 10px;
  margin-right: 30px;
`;

export const AdminGoodItemText = styled.p`
  margin-right: 30px;
`;

export const AdminGoodItemBtn = styled.button`
  width: 70px;
  padding: 5px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const AdminTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
`;
