import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ReactComponent as FormIcon } from '../assets/icons/document.svg'
import { ReactComponent as EyeIcon } from '../assets/icons/eye.svg'
import { ReactComponent as Avatar } from '../assets/icons/avatar.svg'
import { formActions } from '../store/slices/formSlice'
import { NavBar } from '../components/NavBar'

export const Header = () => {
   const dispatch = useDispatch()
   const question = useSelector((state) => state.form)

   const onChangeQuestionTitleHandler = (title) => {
      dispatch(formActions.changeQuestionTitle(title))
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
               <button type="submit">Отправить</button>
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
      &:hover {
         width: 122px;
         height: 37px;
      }
   }
`
