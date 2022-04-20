import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import { uiSliceActions } from '../../store/slices/uiSlice'
import { Modal } from '../ui/Modal'
import { QuestionBody } from './QuestionBody'
import { QuestionFooter } from './QuestionFooter'
import { Answers } from './Answers'

export const Questions = () => {
   const dispatch = useDispatch()

   const modalIsVisible = useSelector((state) => state.ui.modalIsVisible)
   const { forms } = useSelector((state) => state.form)
   const [questionType, setQuestionType] = useState('checkbox')

   const changeQuestionText = (title, id) => {
      dispatch(formActions.changeQuestionText({ title, id }))
   }
   const getQuestionType = (value) => {
      setQuestionType(value)
   }
   const toogleHandler = () => {
      dispatch(uiSliceActions.toogle())
   }

   return (
      <div>
         {forms.map(
            (questionForm) =>
               !questionForm.answer && (
                  <MainContainer key={questionForm.id}>
                     <>
                        <Container>
                           <TitleWrapper>
                              <input
                                 onChange={(e) =>
                                    changeQuestionText(
                                       e.target.value,
                                       questionForm.id
                                    )
                                 }
                                 value={questionForm.questionText}
                                 placeholder="Вопрос"
                              />
                           </TitleWrapper>
                           <SelectWrapper onClick={toogleHandler}>
                              {modalIsVisible && (
                                 <Modal
                                    getQuestionType={getQuestionType}
                                    id={questionForm.id}
                                 />
                              )}
                              <p>{questionType}</p>
                              <span> ▾</span>
                           </SelectWrapper>
                        </Container>
                        <QuestionBody
                           questionType={questionForm.questionType}
                           options={questionForm.options}
                           formId={questionForm.id}
                        />
                        <QuestionFooter
                           id={questionForm.id}
                           forms={forms}
                           requireds={questionForm.required}
                        />
                     </>
                  </MainContainer>
               )
         )}
         <Answers />
      </div>
   )
}

const MainContainer = styled.div`
   background-color: #fff;
   border-radius: 8px;
   width: 770px;
   margin: 20px auto;
   padding: 25px 25px;
   margin-bottom: 20px;
   flex-direction: column;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`
const Container = styled.div`
   display: flex;
   width: 715px;
   justify-content: space-between;
`
const TitleWrapper = styled.div`
   background-color: #f8f9fa;
   display: flex;
   border-bottom: 1px solid gray;
   color: black;
   & input {
      background-color: #f8f9fa;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 15px;
      font-weight: 400;
      flex: 1;
      line-height: 40px;
      border: none;
      outline: none;
      border-bottom: 1 px solid #dadce0;
      color: black;
      height: 60px;
      width: 320px;
      margin-right: 10px;
      padding: 20px;
      &:focus {
         border-bottom: 1.5px solid rgb(103, 58, 183);
      }
   }
`
const SelectWrapper = styled.div`
   width: 315px;
   height: 53px;
   border: 1px solid #dadce0;
   border-radius: 4px;
   padding: 10px 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   & span {
      width: 20px;
      font-size: 30px;
   }
   & p {
      width: 200px;
      text-align: start;
   }
`
