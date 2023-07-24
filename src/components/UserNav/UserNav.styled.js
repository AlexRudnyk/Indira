import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNavLogoutBtn = styled.button`
  padding: 5px;
  margin-right: 20px;
  cursor: pointer;
`;

export const UserGreetingText = styled.p`
  margin-right: 20px;
`;

export const UserNavLink = styled(Link)`
  display: block;
  color: inherit;
  padding: 5px;
  background-color: lightgrey;
  border-radius: 5px;
  border: 1px solid grey;
  width: 45px;
  text-align: center;
`;

export const CartLinkWrapper = styled.div`
  position: relative;
`;

export const GoodsInCartIndicator = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -10px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  padding: 4px 2px;
`;

export const IndicatorText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;
