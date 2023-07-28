import { Field, Form } from 'formik';
import styled from 'styled-components';

export const RegisterPageContainer = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterPageWrapper = styled.div`
  margin-top: 130px;
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
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  color: white;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const RegisterFormWrapper = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;
