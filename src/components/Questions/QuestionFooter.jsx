import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import { ReactComponent as CheckIcon } from '../../assets/icons/check.svg'
import { ReactComponent as CopyIcon } from '../../assets/icons/copyy.svg'
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg'

export const QuestionFooter = ({ id }) => {
   const dispatch = useDispatch()

   const removeFormHandler = (id) => {
      dispatch(formActions.removeQuestionField(id))
   }
   const copyQuestionHandler = (id) => {
      dispatch(formActions.copyQuestionField(id))
   }

   const requiredQuestion = (id) => {
      dispatch(formActions.requiredQuestion(id))
   }
   const markCorrectAnswer = (id) => {
      dispatch(formActions.addAnswer(id))
   }

   return (
      <Wrapper>
         <Container>
            <CheckIcon />
            <button type="button" onClick={() => markCorrectAnswer(id)}>
               <p>Ответы</p>
            </button>
         </Container>
         <DivContainer>
            <IconWrapper onClick={() => copyQuestionHandler(id)}>
               <CopyIcon />
            </IconWrapper>
            <IconWrapper onClick={() => removeFormHandler(id)}>
               <TrashIcon />
            </IconWrapper>
            <RequiredQuestion>
               <span>Обязательный вопрос</span>
               <SwitchInput
                  id={id}
                  type="checkbox"
                  onChange={() => requiredQuestion(id)}
               />
               <SwitchLabel className="switch-label" htmlFor={id}>
                  <SwitchButton className="switch-button" />
               </SwitchLabel>
            </RequiredQuestion>
         </DivContainer>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   justify-content: space-between;
   padding-top: 20px;
   align-items: center;
`

const RequiredQuestion = styled.div`
   display: flex;
   width: 250px;
   margin-left: 10px;
   align-items: center;
   cursor: pointer;
   & span {
      margin-right: 10px;
   }
`
const DivContainer = styled.div`
   display: flex;
   width: 380px;
   justify-content: space-between;
`
const Container = styled.div`
   width: 300px;
   display: flex;
   padding-top: 5px;
   & button {
      margin-left: 10px;
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
const IconWrapper = styled.div`
   width: 27px;
   display: flex;
   align-items: center;
   margin: 5px;
   margin-left: 10px;
   cursor: pointer;
`

const SwitchInput = styled.input`
   height: 0;
   width: 0;
   visibility: hidden;
`

const SwitchLabel = styled.label`
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   width: 60px;
   height: 30px;
   border-radius: 100px;
   border: 2px solid rgb(103, 58, 183);
   position: relative;
   transition: background-color 0.1s;
`

const SwitchButton = styled.span`
   content: '';
   position: absolute;
   top: 2px;
   left: 2px;
   width: 25px;
   height: 22px;
   border-radius: 45px;
   transition: 0.1s;
   background: rgb(103, 58, 183);
   box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
   ${SwitchInput}:checked + ${SwitchLabel} & {
      left: calc(100% - 1px);
      transform: translateX(-100%);
   }

   ${SwitchLabel}:active & {
      width: 29px;
   }
`
