import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { formActions, formSlice } from '../../store/slices/formSlice';

export const QuestionFooter = ({ id, forms }) => {
  const dispatch = useDispatch();

  const removeFormHandler = (id) => {
    if (forms.length > 1) {
      dispatch(formActions.removeForm({ id }));
    }
  };
  const copyQuestionHandler = (id) => {
    dispatch(formActions.copyQuestion({ id }));
  };

  const requiredQuestion = (id) => {
    dispatch(formActions.requiredQuestion({ id }));
  };
  return (
    <QuestionSection>
      <StyledDiv>
        <CopyIcon onClick={() => copyQuestionHandler(id)}>
          <img src="https://www.svgrepo.com/show/172093/copy.svg" />
        </CopyIcon>
        <TrashIcon onClick={() => removeFormHandler(id)}>
          <img src="https://www.svgrepo.com/show/66604/trash.svg" />
        </TrashIcon>
        <LineIcon>
          <img src="https://www.svgrepo.com/show/371377/line-v.svg" />
        </LineIcon>
        <RequiredQuestion>
          <span>Обязательный вопрос</span>
          <RequiredIcon>
            <CheckBoxWrapper>
              <CheckBox
                id="checkbox"
                type="checkbox"
                onClick={() => requiredQuestion(id)}
              />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </RequiredIcon>
          <MenuIcon>
            <img src="https://www.svgrepo.com/show/391274/menu-kebab.svg" />
          </MenuIcon>
        </RequiredQuestion>
      </StyledDiv>
    </QuestionSection>
  );
};

const QuestionSection = styled.div`
  display: flex;
  justify-content: end;
  padding-top: 20px;
`;

const RequiredQuestion = styled.div`
  display: flex;
  width: 280px;
  margin-left: 10px;
  align-items: center;
  cursor: pointer;
`;
const StyledDiv = styled.div`
  display: flex;
`;
const CopyIcon = styled.div`
  width: 27px;
  display: flex;
  align-items: center;
  margin: 5px;
  cursor: pointer;
  & img {
    width: 24px;
  }
`;
const TrashIcon = styled.div`
  width: 27px;
  display: flex;
  align-items: center;
  margin: 0 20px;
  cursor: pointer;
  & img {
    width: 24px;
  }
`;
const LineIcon = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  & img {
    height: 27px;
  }
`;
const RequiredIcon = styled.span`
  margin-left: 10px;
  display: flex;
  align-items: center;
  margin-top: 5px;
`;
const MenuIcon = styled.span`
  display: flex;
  align-items: center;
  margin-left: 30px;
  & img {
    height: 20px;
  }
`;
const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: rgb(103, 58, 183);
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
