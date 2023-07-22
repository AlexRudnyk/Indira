import { Field, Form } from 'formik';
import styled from 'styled-components';

export const AdminPageSection = styled.section`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const AdminPageWrapper = styled.div`
  display: flex;
  margin-top: 100px;
`;

export const AdminPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 100px;
`;

export const AdminPageInput = styled(Field)`
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

export const AdminPageTextArea = styled.textarea`
  margin-bottom: 30px;
  &:focus {
    outline: none;
  }
`;

export const AdminPageImgInput = styled.input`
  margin-bottom: 30px;
`;

export const AdminPageBtn = styled.button`
  width: 70px;
  padding: 5px;
  cursor: pointer;
`;
