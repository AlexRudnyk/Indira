import { Field, Form } from 'formik';
import styled from 'styled-components';

export const LoginPageContainer = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const LoginPageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginPageTitle = styled.h2`
  margin-bottom: 50px;
`;

export const LoginPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginPageInput = styled(Field)`
  width: 300px;
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }
`;

export const LoginPageBtn = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
`;

export const LoginFormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;
