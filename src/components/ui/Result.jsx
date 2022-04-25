import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'

function Backdrop() {
   return <BackdropWrapper />
}

const ModalOverlay = ({ onConfirm, title, message, result }) => {
   return (
      <Wrapper>
         <Container>{title}</Container>
         <TextWrapper>
            <p>{message}</p>
            <h3>{result}</h3>
         </TextWrapper>
         <ButtonWrapper>
            <button type="button" onClick={onConfirm}>
               Ok
            </button>
         </ButtonWrapper>
      </Wrapper>
   )
}

export const Result = ({ setModalIsVisible, title, message, result }) => {
   const navigate = useNavigate()
   const closeModalHandler = () => {
      navigate('/quiz')
      setModalIsVisible(false)
   }
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop />,
            document.getElementById('backdrop')
         )}
         {ReactDOM.createPortal(
            <ModalOverlay
               onConfirm={closeModalHandler}
               title={title}
               message={message}
               result={result}
            />,
            document.getElementById('modal-root')
         )}
      </>
   )
}

const BackdropWrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background: #959595;
   opacity: 0.5;
`
const Wrapper = styled.div`
   width: 480px;
   height: 280px;
   border-radius: 4px;
   border: none;
   z-index: 10;
   position: fixed;
   background-color: white;
   top: 200px;
   left: 530px;
   box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
`
const Container = styled.div`
   width: 325px;
   height: 65px;
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 15px auto;
   font-size: 25px;
   border-bottom: 1px solid gray;
`
const TextWrapper = styled.div`
   text-align: center;
   padding: 20px;
   & p {
      font-size: 18px;
      margin-bottom: 35px;
   }
`
const ButtonWrapper = styled.div`
   text-align: end;
   padding-right: 30px;
   & button {
      font-size: 18px;
      cursor: pointer;
      width: 95px;
      height: 38px;
      border: none;
      color: white;
      border-radius: 5px;
      background-color: #544566;
   }
`
