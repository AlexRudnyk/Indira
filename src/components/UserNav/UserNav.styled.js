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
  color: inherit;
`;
