import React from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'
import { uiSliceActions } from '../../store/slices/uiSlice'
import { formActions } from '../../store/slices/formSlice'
import { options } from '../../utils/constants'

function Backdrop({ onConfirm }) {
   return <BackdropWrapper onClick={onConfirm} />
}

const ModalOverlay = (props) => {
   const dispatch = useDispatch()

   const addQuestionType = (id, text, type) => {
      dispatch(formActions.changeQuestionType({ id, text, type }))
   }

   return (
      <Wrapper>
         {options.map((option) => (
            <Container
               key={option.id}
               onClick={() =>
                  addQuestionType(props.id, option.text, option.type)
               }
            >
               <IconWrapper>
                  <img src={option.image} alt="" />
               </IconWrapper>
               <span>{option.text}</span>
            </Container>
         ))}
      </Wrapper>
   )
}
export const Modal = ({ id }) => {
   const dispatch = useDispatch()

   const cancelHandler = () => {
      dispatch(uiSliceActions.cancel())
   }
   return (
      <>
         {ReactDOM.createPortal(
            <Backdrop onConfirm={cancelHandler} />,
            document.getElementById('backdrop')
         )}
         {ReactDOM.createPortal(
            <ModalOverlay id={id} />,
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
   width: 330px;
   height: 455px;
   border-radius: 4px;
   border: none;
   z-index: 10;
   position: fixed;
   background-color: white;
   top: 20px;
   left: 790px;
   box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
   & :hover {
      background-color: lightgray;
   }
`
const Container = styled.div`
   width: 325px;
   height: 65px;
   display: flex;
   align-items: center;
   margin: auto;
   border-bottom: 1px solid gray;
   cursor: pointer;
`
const IconWrapper = styled.div`
   margin: 10px 8px 0 20px;
   & img {
      width: 30px;
   }
`
