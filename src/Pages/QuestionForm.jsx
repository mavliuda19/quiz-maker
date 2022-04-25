import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../store/slices/formSlice'
import { Questions } from '../components/Questions/Questions'
import { Toolbar } from '../components/Toolbar/Toolbar'

export const QuestionForm = () => {
   const dispatch = useDispatch()

   const question = useSelector((state) => state.form)

   const onChangeQuestionTitleHandler = (title) => {
      dispatch(formActions.changeQuestionTitle(title))
   }
   const onChangeQuestionDescriptionHandler = (description) => {
      dispatch(formActions.changeQuestionDescription(description))
   }

   return (
      <Wrapper>
         <br />
         <Container>
            <div>
               <StyledForm>
                  <div>
                     <TitleWrapper
                        placeholder="Новая форма"
                        onChange={(e) =>
                           onChangeQuestionTitleHandler(e.target.value)
                        }
                        value={question.questionTile}
                     />
                     <span />
                     <DescriptionWrapper
                        placeholder="Описание"
                        onChange={(e) =>
                           onChangeQuestionDescriptionHandler(e.target.value)
                        }
                     />
                  </div>
               </StyledForm>
            </div>
         </Container>
         {question.forms.length === 0 ? <h4>Let&apos;s create a QUIZ!</h4> : ''}
         <Questions />
         <Toolbar />
      </Wrapper>
   )
}

const Wrapper = styled.div`
   height: 100%;
   padding-bottom: 30px;
   & h4 {
      text-align: center;
      font-weight: 500;
      font-size: 20px;
      margin-top: 20px;
   }
`
const Container = styled.div`
   margin: auto;
   width: 770px;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`
const StyledForm = styled.div`
   display: flex;
   background-color: white;
   border-top: 9px solid rgb(103, 58, 183);
   border-radius: 8px;
   text-transform: capitalize;
   & div {
      padding: 30px 25px;
   }
`
const TitleWrapper = styled.input`
   font-family: 'Google Sans', Roboto, Arial, Helvetica, sans-serif, sans-serif;
   font-size: 32px;
   font-weight: 400;
   line-height: 40px;
   line-height: 135%;
   width: 100%;
   border: none;
   border-bottom: 1px solid #f4f4f9;
   color: black;
   height: 35px;
   outline: none;
   &:focus {
      border-bottom: 2px solid rgb(103, 58, 183);
   }
   &::placeholder {
      color: #202124;
   }
`

const DescriptionWrapper = styled.input`
   margin-top: 10px;
   font-family: 'Google Sans', Roboto, Arial, sans-serif;
   font-size: 13px;
   font-weight: 400;
   line-height: 40px;
   width: 100%;
   border: none;
   outline: none;
   border-bottom: 1px solid #f4f4f9;
   color: black;
   height: 20px;
   &:focus {
      border-bottom: 2px solid rgb(103, 58, 183);
   }
   &::placeholder {
      color: #202124;
   }
`
