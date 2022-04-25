import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as FormIcon } from '../assets/icons/document.svg'
import { ReactComponent as EyeIcon } from '../assets/icons/eye.svg'
import { ReactComponent as Avatar } from '../assets/icons/avatar.svg'
import { formActions } from '../store/slices/formSlice'
import { NavBar } from './NavBar'

export const Header = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const question = useSelector((state) => state.form)

   const onChangeQuestionTitleHandler = (title) => {
      dispatch(formActions.changeQuestionTitle(title))
   }

   const saveQuestionsHandler = () => {
      dispatch(formActions.clearForm())
      return navigate('/tests')
   }
   return (
      <>
         <HeaderWrapper>
            <Wrapper>
               <FormIcon />
               <input
                  placeholder="Новая форма"
                  value={question.questionTile}
                  onChange={(e) => onChangeQuestionTitleHandler(e.target.value)}
               />
            </Wrapper>
            <Container>
               <EyeIcon />
               <button
                  type="button"
                  onClick={saveQuestionsHandler}
                  disabled={question.forms.length === 0}
               >
                  Сохранить
               </button>
               <Avatar />
            </Container>
         </HeaderWrapper>
         <NavBar />
      </>
   )
}

const HeaderWrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px 18px 5px 18px;
   background-color: #fff;
`
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-left: 5px;
   cursor: pointer;
   & input {
      border: none;
      outline: none;
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 18px;
      font-weight: 400;
      line-height: 24px;
      margin-left: 15px;
      color: #202124;
      width: 120px;
      &:focus {
         border-bottom: 2px solid rgb(103, 58, 183);
      }
      &::placeholder {
         color: #202124;
      }
   }
`
const Container = styled.div`
   display: flex;
   width: 259px;
   align-items: center;
   justify-content: space-between;
   cursor: pointer;
   & button {
      width: 120px;
      margin: 0px 40px;
      height: 35px;
      border: none;
      border-radius: 5px;
      background-color: rgb(103, 58, 183);
      color: white;
      font-size: 16px;
      padding: 5px 13px;
      cursor: pointer;
      /* transition: 0.3s; */
      &:hover {
         animation: pulse 1s infinite;
         transition: 0.8s;
         box-shadow: 0 0 10px 0 #cfa5e0 inset, 0 0 20px 2px #ce82ef;
      }
   }
   @keyframes pulse {
      10% {
         transform: scale(1);
      }
      60% {
         transform: scale(0.9);
      }
      100% {
         transform: scale(1);
      }
   }
`
