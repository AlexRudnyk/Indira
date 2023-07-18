import styled from 'styled-components';

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 20px;
`;

export const GoodsItem = styled.li`
  position: relative;
  border-radius: 20px;
  flex-basis: calc((100% - 2 * 30px) / 3);
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;
