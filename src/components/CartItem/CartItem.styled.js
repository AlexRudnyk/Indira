import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
`;

export const CartItemLine = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;
