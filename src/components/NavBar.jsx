import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = () => {
   return (
      <Wrapper>
         <Container>
            <NavLink
               to="/quiz"
               style={({ isActive }) =>
                  isActive
                     ? {
                          textDecoration: 'none',
                          color: 'rgb(103, 58, 183)',
                          borderBottom: '3px solid rgb(103, 58, 183)',
                       }
                     : {
                          color: '#3C4043',
                          textDecoration: 'none',
                       }
               }
            >
               <div>
                  <p>Вопросы</p>
               </div>
            </NavLink>

            <NavLink
               to="/tests"
               style={({ isActive }) =>
                  isActive
                     ? {
                          color: 'rgb(103, 58, 183)',
                          textDecoration: 'none',
                          borderBottom: '3px solid rgb(103, 58, 183)',
                       }
                     : {
                          color: '#3C4043',
                          textDecoration: 'none',
                       }
               }
            >
               <div>
                  <p>Тесты</p>
               </div>
            </NavLink>
         </Container>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   width: 100%;
   border-bottom: 1.3px solid lightgray;
   background-color: #fff;
`
const Container = styled.div`
   width: 270px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   & div {
      width: 90px;
      padding: 10px;
   }
   & p {
      font-weight: 500;
      font-family: Google Sans, Roboto, Arial, sans-serif;
      cursor: pointer;
      text-align: center;
      font-size: 17px;
      text-transform: none;
   }
`
