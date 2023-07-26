import styled from 'styled-components';

export const GoodDetailsContainer = styled.div`
  margin-top: 100px;
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoodDetailsWrapper = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const GoodDetailsImg = styled.img`
  width: 400px;
  margin-right: 50px;
  border-radius: 20px;
`;

export const GoodDetailsTitle = styled.h1`
  margin-bottom: 30px;
`;

export const GoodDetailsText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const GoodDetailsBtn = styled.button`
  padding: 5px;
  cursor: pointer;
`;
