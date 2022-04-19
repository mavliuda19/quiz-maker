/* eslint-disable react/button-has-type */
import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'

export const QuestionFooter = ({ id, forms }) => {
   const dispatch = useDispatch()

   const removeFormHandler = (id) => {
      if (forms.length > 1) {
         dispatch(formActions.removeQuestionField({ id }))
      }
   }
   const copyQuestionHandler = (id) => {
      dispatch(formActions.copyQuestionField({ id }))
   }

   const requiredQuestion = (id) => {
      dispatch(formActions.requiredQuestion({ id }))
   }
   const markCorrectAnswer = (id) => {
      dispatch(formActions.addAnswer(id))
   }
   return (
      <QuestionSection>
         <CorrectAnswer>
            <button onClick={() => markCorrectAnswer(id)}>
               <img
                  src="https://icones.pro/wp-content/uploads/2021/02/icone-de-coche-bleue-1.png"
                  alt=""
               />
               <p>Ответы</p>
            </button>
         </CorrectAnswer>
         <StyledDiv>
            <CopyIcon onClick={() => copyQuestionHandler(id)}>
               <img src="https://www.svgrepo.com/show/172093/copy.svg" alt="" />
            </CopyIcon>
            <TrashIcon onClick={() => removeFormHandler(id)}>
               <img src="https://www.svgrepo.com/show/66604/trash.svg" alt="" />
            </TrashIcon>
            <LineIcon>
               <img
                  src="https://www.svgrepo.com/show/371377/line-v.svg"
                  alt=""
               />
            </LineIcon>
            <RequiredQuestion>
               <span>Обязательный вопрос</span>
               <RequiredIcon>
                  <CheckBoxWrapper>
                     <CheckBox
                        id="checkbox"
                        type="checkbox"
                        onChange={() => requiredQuestion(id)}
                     />
                     <CheckBoxLabel htmlFor="checkbox" />
                  </CheckBoxWrapper>
               </RequiredIcon>
               <MenuIcon>
                  <img
                     src="https://www.svgrepo.com/show/391274/menu-kebab.svg"
                     alt=""
                  />
               </MenuIcon>
            </RequiredQuestion>
         </StyledDiv>
      </QuestionSection>
   )
}

const QuestionSection = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 20px;
`

const RequiredQuestion = styled.div`
   display: flex;
   width: 280px;
   margin-left: 10px;
   align-items: center;
   cursor: pointer;
`
const StyledDiv = styled.div`
   display: flex;
`
const CorrectAnswer = styled.div`
   width: 300px;
   padding-top: 5px;
   & button {
      display: flex;
      align-items: center;
      color: blue;
      font-size: 17px;
      background-color: transparent;
      border: none;
      cursor: pointer;
   }
   & img {
      width: 20px;
      margin-right: 8px;
   }
`
const CopyIcon = styled.div`
   width: 27px;
   display: flex;
   align-items: center;
   margin: 5px;
   cursor: pointer;
   & img {
      width: 24px;
   }
`
const TrashIcon = styled.div`
   width: 27px;
   display: flex;
   align-items: center;
   margin: 0 20px;
   cursor: pointer;
   & img {
      width: 24px;
   }
`
const LineIcon = styled.span`
   display: flex;
   align-items: center;
   cursor: pointer;
   & img {
      height: 27px;
   }
`
const RequiredIcon = styled.span`
   margin-left: 10px;
   display: flex;
   align-items: center;
   margin-top: 5px;
`
const MenuIcon = styled.span`
   display: flex;
   align-items: center;
   margin-left: 30px;
   & img {
      height: 20px;
   }
`
const CheckBoxWrapper = styled.div`
   position: relative;
`
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
`
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
`
