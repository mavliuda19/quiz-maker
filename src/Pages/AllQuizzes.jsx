import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const AllQuizzes = () => {
   const store = useSelector((state) => state.form)
   return (
      <Wrapper>
         <MainContainer>
            <p>{store.questionTile}</p>
         </MainContainer>
         <Container>
            <NavLink to={`/quizes/${store.id}`}>
               <button type="button">Пройти тест</button>
            </NavLink>
         </Container>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   margin: 2rem auto;
   background-color: #fff;
   border-radius: 8px;
   width: 770px;
   padding: 25px 25px;
   margin-bottom: 20px;
   flex-direction: column;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`
const MainContainer = styled.div`
   display: flex;
   width: 715px;
   justify-content: space-between;
   padding-left: 10px;
   & p {
      font-size: 20px;
   }
`
const Container = styled.div`
   display: flex;
   justify-content: end;
   & button {
      padding: 7px 11px;
      font-size: 16px;
      color: white;
      border-radius: 5px;
      background-color: rgb(103, 58, 183);
      cursor: pointer;
      &:hover {
         width: 122px;
         height: 37px;
      }
   }
`