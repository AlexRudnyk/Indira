import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNavLogoutBtn = styled.button`
  padding: 5px;
  cursor: pointer;
`;

export const UserGreetingText = styled.p`
  margin-right: 20px;
`;

export const UserNavLink = styled(Link)`
  margin-right: 20px;
  color: inherit;
`;
