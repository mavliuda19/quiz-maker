import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import { ReactComponent as RemoveIcon } from '../../assets/icons/x.svg'
import {
   CHECKBOX,
   DATE,
   EMAIL,
   NUMBER,
   RADIO,
   TEXT,
} from '../../utils/constants'

export const QuestionBody = ({ questionType, options, formId }) => {
   const dispatch = useDispatch()

   const changeOptionValueHandler = (text, formId, id) => {
      dispatch(formActions.changeOptionValue({ text, formId, id }))
   }

   const addQuestionOptionHandler = (formId) => {
      if (options.length < 5) {
         const data = {
            optionText: `Вариант ${Number(options.length + 1)}`,
            id: Date.now().toString(),
         }
         dispatch(formActions.addOptionText({ data, formId }))
      }
   }

   const removeOptionHandler = (formId, id) => {
      dispatch(formActions.removeOptionText({ formId, id }))
   }
   const selectCorrectAnswer = (answer, formId) => {
      dispatch(formActions.chooseCorrectAnswer({ answer, formId }))
   }

   let content

   switch (questionType) {
      case TEXT:
         content = (
            <WrapperText>
               <input placeholder="Краткий ответ" disabled />
            </WrapperText>
         )
         break
      case DATE:
         content = (
            <WrapperText>
               <input
                  placeholder="Краткий ответ"
                  type={questionType}
                  disabled
               />
            </WrapperText>
         )
         break
      case RADIO:
      case CHECKBOX:
         content = (
            <>
               {options.map((option) => {
                  return (
                     <Wrapper key={option.id}>
                        <>
                           <IconWrapper>
                              <input
                                 value={option.optionText}
                                 type={questionType}
                                 name="quiz"
                                 onChange={(e) =>
                                    selectCorrectAnswer(e.target.value, formId)
                                 }
                              />
                           </IconWrapper>
                           <TextWrapper>
                              <input
                                 onChange={(e) =>
                                    changeOptionValueHandler(
                                       e.target.value,
                                       formId,
                                       option.id
                                    )
                                 }
                                 type="text"
                                 value={option.optionText}
                                 placeholder="Вариант"
                              />
                              {content}
                           </TextWrapper>
                        </>

                        <IconWrapper
                           onClick={() =>
                              removeOptionHandler(formId, option.id)
                           }
                        >
                           <RemoveIcon />
                        </IconWrapper>
                     </Wrapper>
                  )
               })}
               <Container>
                  <IconWrapper>
                     <div />
                  </IconWrapper>
                  <OptionWrapper>
                     <button
                        type="button"
                        onClick={() => addQuestionOptionHandler(formId)}
                     >
                        Добавить вариант
                     </button>
                  </OptionWrapper>
               </Container>
            </>
         )
         break
      case EMAIL:
         content = (
            <WrapperText>
               <input
                  placeholder="Краткий ответ"
                  type={questionType}
                  disabled
                  required
               />
            </WrapperText>
         )
         break
      case NUMBER:
         content = (
            <WrapperText>
               <input placeholder="Краткий ответ" type="number" disabled />
            </WrapperText>
         )
         break
      default:
   }

   return <MainContainer>{content}</MainContainer>
}

const MainContainer = styled.div`
   margin-top: 10px;
   padding-bottom: 24px;
   border-bottom: 2px solid #dadce0;
`
const Wrapper = styled.div`
   width: 750px;
   text-align: start;
   padding: 5px;
   display: flex;
`
const IconWrapper = styled.div`
   height: 40px;
   display: flex;
   width: 25px;
   align-items: center;
   margin-right: 10px;
   cursor: pointer;
`
const TextWrapper = styled.div`
   height: 40px;
   display: flex;
   align-items: center;
   & input {
      border: none;
      width: 640px;
      height: 40px;
      font-size: 17px;
      outline: none;
      &:focus {
         border-bottom: 1px solid gray;
      }
   }
`
const Container = styled.div`
   width: 700px;
   text-align: start;
   padding: 5px;
   display: flex;
`
const OptionWrapper = styled.div`
   height: 40px;
   display: flex;
   align-items: center;
   font-size: 17px;
   & input {
      border: none;
      width: 150px;
      height: 40px;
      font-size: 16px;
      outline: none;
   }
   & div {
      margin-left: 13px;
      color: blue;
      cursor: pointer;
   }
   & button {
      border: none;
      outline: none;
      background: none;
      height: 20px;
      display: flex;
      align-items: center;
      margin: 5px 15px 0 0;
      font-size: 16px;
      cursor: pointer;
   }
`
const WrapperText = styled.div`
   padding: 15px 10px 5px 10px;
   width: 400px;
   border-bottom: 1px dotted rgba(0, 0, 0, 0.38);
   & input {
      border: none;
      width: 400px;
      font-size: 16px;
   }
`
