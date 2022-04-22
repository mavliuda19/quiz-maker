import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Quizzes } from '../components/Quizzes/Quizzes'

export const Quiz = () => {
   const form = useSelector((state) => state.form)
   return (
      <>
         <Wrapper>
            <div>
               <h1>{form.questionTitle}</h1>
               <p>{form.questionDescription}</p>
            </div>
         </Wrapper>
         {form.forms.map((form) => {
            return (
               <div key={form.id}>
                  <Container>
                     <TextWrapper>{form.questionText}</TextWrapper>
                     <Quizzes
                        options={form.options}
                        questionType={form.questionType}
                     />
                  </Container>
               </div>
            )
         })}

         <ButtonWrapper>
            <button type="button">Следующий вопрос</button>
         </ButtonWrapper>
      </>
   )
}

const Wrapper = styled.div`
   width: 770px;
   margin: 30px auto;
   background-color: white;
   border-radius: 8px;
   & div {
      text-transform: capitalize;
      border-radius: 8px;
      width: 770px;
      border-top: 8px solid rgb(103, 58, 183);
      padding: 25px 35px;
   }
   & h1 {
      margin: 5px;
      color: gray;
   }
   & p {
      margin: 5px;
      margin-top: 10px;
   }
`
const Container = styled.div`
   border-radius: 8px;
   padding: 20px;
   width: 770px;
   margin: 30px auto;
   margin-top: 20px;
   background-color: white;
   display: flex;
   flex-direction: column;
   color: #202124;
`
const ButtonWrapper = styled.div`
   width: 770px;
   margin: 0 auto;
   display: flex;
   justify-content: end;
   & button {
      padding: 7px 19px;
      font-size: 16px;
      color: white;
      border-radius: 5px;
      background-color: rgb(103, 58, 183);
      cursor: pointer;
   }
`
const TextWrapper = styled.p`
   font-size: 20px;
`
