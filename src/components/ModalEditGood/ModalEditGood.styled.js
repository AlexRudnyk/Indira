import styled from 'styled-components';
import { ReactComponent as Close } from '../../images/Сlose.svg';
import { Field, Form } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 100;
  padding: 20px;
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: auto;
  transform: translate(-50%, -50%);
  max-height: 95%;
  width: 540px;
  height: 572px;
  background-color: white;
  border-radius: 20px;
  padding: 40px;
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: white;
`;

export const CloseSvg = styled(Close)`
  text-align: center;
  width: 16px;
  height: 16px;
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

export const AdminPageBtn = styled.button`
  width: 70px;
  padding: 5px;
  cursor: pointer;
`;
