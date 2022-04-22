import React from 'react'
import styled from 'styled-components'

export const Quiz = () => {
   return (
      <>
         <Wrapper>
            <div>
               <h1>title</h1>
               <p>dexcription</p>
            </div>
         </Wrapper>
         <Container>
            <div>Question Title</div>
            <div>
               <input />
               <p>option</p>
            </div>
         </Container>
         <ButtonWrapper>
            <button type="button">Следующий вопрос</button>
         </ButtonWrapper>
      </>
   )
}

const Wrapper = styled.div`
   width: 770px;
   margin: 30px auto;
   display: flex;
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
   width: 770px;
   margin: 30px auto;
   background-color: white;
   border-radius: 8px;
   padding: 20px;
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