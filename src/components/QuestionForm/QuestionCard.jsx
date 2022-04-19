import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'

export const QuestionCard = () => {
   const dispatch = useDispatch()
   const addFormhandler = () => {
      dispatch(
         formActions.addQuestionField({
            id: Math.random().toString(),
         })
      )
   }
   return (
      <StyledContainer>
         <StyledSpan onClick={() => addFormhandler()}>
            <img
               src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/344/external-plus-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
               alt=""
            />
         </StyledSpan>
         <StyledSpan>
            <img src="https://www.svgrepo.com/show/164170/import.svg" alt="" />
         </StyledSpan>
         <StyledSpan>
            <img
               src="https://www.svgrepo.com/show/336640/add-text.svg"
               alt=""
            />
         </StyledSpan>
         <StyledSpan>
            <img
               src="https://cdn-icons.flaticon.com/png/128/696/premium/696755.png?token=exp=1650003851~hmac=156c19a52bea93e04ff164960514b879"
               alt=""
            />
         </StyledSpan>
         <StyledSpan>
            <img src="https://www.svgrepo.com/show/347882/video.svg" alt="" />
         </StyledSpan>
      </StyledContainer>
   )
}

const StyledContainer = styled.div`
   display: flex;
   position: fixed;
   left: 1175px;
   flex-direction: column;
   padding: 4px;
   border-radius: 3px;
   height: 230px;
   width: 45px;
   cursor: pointer;
   background-color: #fff;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`

const StyledSpan = styled.span`
   color: #5f6368;
   padding: 8px 5px;
   & img {
      width: 25px;
   }
`
