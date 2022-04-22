import React from 'react'
import styled from 'styled-components'
import {
   CHECKBOX,
   DATE,
   EMAIL,
   NUMBER,
   RADIO,
   TEXT,
} from '../../utils/constants'

export const Quizzes = ({ options, questionType }) => {
   let content
   switch (questionType) {
      case TEXT:
         content = (
            <WrapperText>
               <input placeholder="Мой ответ" />
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
                        <div>
                           <input type={questionType} />
                           <p>{option.optionText}</p>
                        </div>
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
               <input placeholder="Мой ответ" type="number" />
            </WrapperText>
         )
         break
      default:
   }
   return <Wrapper>{content}</Wrapper>
}

const Wrapper = styled.div`
   width: 770px;
   margin: 30px auto;
`
const Container = styled.span`
   & div {
      display: flex;
      align-items: center;
      height: 30px;
      margin-bottom: 20px;
      & p {
         margin-left: 15px;
         font-family: Roboto, Arial, sans-serif;
         font-size: 17px;
         font-weight: 400;
         letter-spacing: 0.2px;
         line-height: 20px;
         color: #202124;
         min-width: 0;
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
