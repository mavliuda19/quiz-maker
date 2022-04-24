import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'
import { ReactComponent as PlusIcon } from '../../assets/icons/plus.svg'
import { ReactComponent as ImportIcon } from '../../assets/icons/import.svg'
import { ReactComponent as TextIcon } from '../../assets/icons/text.svg'
import { ReactComponent as VideoIcon } from '../../assets/icons/video.svg'
import { ReactComponent as ImageIcon } from '../../assets/icons/image.svg'

export const Toolbar = () => {
   const dispatch = useDispatch()

   const addFormhandler = () => {
      dispatch(
         formActions.addQuestionField({
            id: Date.now().toString(),
         })
      )
   }

   return (
      <Wrapper>
         <Container onClick={() => addFormhandler()}>
            <PlusIcon />
         </Container>
         <Container>
            <ImportIcon />
         </Container>
         <Container>
            <TextIcon />
         </Container>
         <Container>
            <VideoIcon />
         </Container>
         <Container>
            <ImageIcon />
         </Container>
      </Wrapper>
   )
}

const Wrapper = styled.div`
   display: flex;
   position: fixed;
   left: 1175px;
   top: 300px;
   flex-direction: column;
   padding: 4px;
   height: 248px;
   border-radius: 3px;
   width: 45px;
   cursor: pointer;
   background-color: #fff;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`

const Container = styled.span`
   color: #5f6368;
   padding: 8px 5px;
   & img {
      width: 25px;
   }
`
