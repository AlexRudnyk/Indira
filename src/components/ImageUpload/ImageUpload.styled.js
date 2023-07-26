import styled from 'styled-components';

export const UploadLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  padding: 20px 0;
`;

export const UploadText = styled.div`
  width: 100px;
  padding: 10px;
  background-color: lightgrey;
  border-radius: 10px;
  text-align: center;
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 30px;
`;

export const PreviewImg = styled.img`
  width: 100px;
  margin-bottom: 5px;
`;

export const PreviewBtn = styled.button`
  padding: 5px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;
