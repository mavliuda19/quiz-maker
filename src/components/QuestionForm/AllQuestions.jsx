import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import { uiSliceActions } from '../../store/slices/uiSlice'
import { Modal } from '../ui/Modal'
import { QuestionBody } from './QuestionBody'
import { QuestionFooter } from './QuestionFooter'

export const AllQuestions = () => {
   const dispatch = useDispatch()

   const modalIsVisible = useSelector((state) => state.ui.modalIsVisible)
   const { forms } = useSelector((state) => state.form)
   const [value, setValue] = useState('checkbox')
   console.log(forms)
   const changeQuestionText = (title, id) => {
      dispatch(formActions.changeQuestionText({ title, id }))
   }
   const getQuestionType = (value) => {
      setValue(value)
   }
   const onClickHandler = () => {
      dispatch(uiSliceActions.toogle())
   }

   return (
      <div>
         {forms.map(
            (questionForm) =>
               !questionForm.answer && (
                  <MainContainer key={questionForm.id}>
                     <>
                        <QuestionSection>
                           <TitleQuestion>
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
                           </TitleQuestion>
                           <WrapperSelect onClick={onClickHandler}>
                              {modalIsVisible && (
                                 <Modal
                                    getQuestionType={getQuestionType}
                                    id={questionForm.id}
                                 />
                              )}
                              <SelectTitle>{value}</SelectTitle>
                              <SelectOne> ▾</SelectOne>
                           </WrapperSelect>
                        </QuestionSection>
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
      </div>
   )
}

const MainContainer = styled.div`
   background-color: #fff;
   border-radius: 8px;
   width: 770px;
   padding: 25px 25px;
   margin-bottom: 20px;
   flex-direction: column;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`
const QuestionSection = styled.div`
   display: flex;
   width: 715px;
   justify-content: space-between;
`
const TitleQuestion = styled.div`
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
const WrapperSelect = styled.div`
   width: 315px;
   height: 53px;
   border: 1px solid #dadce0;
   border-radius: 4px;
   padding: 10px 15px;
   margin-right: 0;
   display: flex;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
`
const SelectOne = styled.span`
   width: 20px;
   font-size: 30px;
`
const SelectTitle = styled.span`
   width: 200px;
   text-align: start;
`
