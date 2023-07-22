import { Field, Form } from 'formik';
import styled from 'styled-components';

export const RegisterPageContainer = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterPageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterPageTitle = styled.h2`
  margin-bottom: 50px;
`;

export const RegisterPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterPageInput = styled(Field)`
  width: 300px;
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

export const RegisterPageBtn = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
`;

export const RegisterFormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;
