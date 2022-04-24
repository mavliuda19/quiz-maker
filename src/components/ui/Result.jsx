import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'

function Backdrop({ onConfirm }) {
   return <BackdropWrapper onClick={onConfirm} />
}

const ModalOverly = ({ onConfirm, title, message, result }) => {
   return (
      <Wrapper>
         <Container>{title}</Container>
         <TextWrapper>
            <p>{message}</p>
            <span>{result}</span>
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
   const cancelHandler = () => {
      setModalIsVisible(false)
   }
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop onConfirm={cancelHandler} />,
            document.getElementById('backdrop')
         )}
         {ReactDOM.createPortal(
            <ModalOverly
               onConfirm={cancelHandler}
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
`
const TextWrapper = styled.div`
   text-align: center;
   padding: 20px;
`
const ButtonWrapper = styled.div`
   text-align: end;
   padding: 20px;
`
