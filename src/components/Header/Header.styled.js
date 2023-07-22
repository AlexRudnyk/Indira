import styled from 'styled-components';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background-color: white;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
