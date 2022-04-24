import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import {
   CHECKBOX,
   DATE,
   EMAIL,
   NUMBER,
   RADIO,
   TEXT,
} from '../../utils/constants'

export const Quizzes = ({ options, questionType, formId, correctAnswer }) => {
   const dispatch = useDispatch()

   const checkAnswer = (answer) => {
      correctAnswer.map((correct) => {
         if (correct === answer) {
            dispatch(formActions.checkAnswer())
         }
         return true
      })
   }

   let content
   switch (questionType) {
      case TEXT:
         content = (
            <WrapperText>
               <input type="text" required placeholder="Мой ответ" />
            </WrapperText>
         )
         break
      case DATE:
         content = (
            <WrapperText>
               <input type={questionType} />
            </WrapperText>
         )
         break
      case RADIO:
      case CHECKBOX:
         content = (
            <>
               {options.map((option) => {
                  return (
                     <Container key={option.id}>
                        <span>
                           <input
                              type={questionType}
                              value={option.optionText}
                              name="answer"
                              id={option.id}
                              onChange={(e) =>
                                 checkAnswer(e.target.value, formId)
                              }
                           />
                           <label htmlFor={option.id}>
                              {option.optionText}
                           </label>
                        </span>
                     </Container>
                  )
               })}
            </>
         )
         break
      case EMAIL:
         content = (
            <WrapperText>
               <input
                  placeholder="Email address"
                  type={questionType}
                  required
               />
            </WrapperText>
         )
         break
      case NUMBER:
         content = (
            <WrapperText>
               <input placeholder="Мой ответ" />
            </WrapperText>
         )
         break
      default:
   }
   return <Wrapper>{content}</Wrapper>
}

const Wrapper = styled.div`
   width: 710px;
   margin: 30px auto;
`
const Container = styled.div`
   & span {
      width: 660px;
      padding: 8px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      margin-left: 10px;
      border-radius: 6px;
      & label {
         margin-left: 15px;
         font-size: 18px;
         color: #202124;
      }
      & input {
      }
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
      outline: none;
   }
`
