import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '../../store/slices/formSlice'

export const Answers = () => {
   const dispatch = useDispatch()
   const { forms } = useSelector((state) => state.form)
   const done = (id) => {
      dispatch(formActions.doneAnswer(id))
   }
   return (
      <Wrapper>
         {forms.map((questionForm) => (
            <MainContainer key={questionForm.id}>
               <>
                  <QuestionSection>
                     <TitleQuestion>
                        <img
                           src="https://startmeup.careers/wp-content/uploads/2020/09/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png"
                           alt=""
                        />
                        <p>Выберите верные вариaнты:</p>
                     </TitleQuestion>
                  </QuestionSection>
                  <div>
                     <Container>
                        <p>{questionForm.questionTitle}</p>
                        <div>
                           <input
                              type="number"
                              className="points"
                              min="0"
                              step="1"
                              placeholder="0"
                           />
                        </div>
                     </Container>
                     {questionForm.options.map((option) => (
                        <StyledDiv key={option.id}>
                           <input type="checkbox" />
                           <p>{option.optionText}</p>
                        </StyledDiv>
                     ))}
                  </div>
                  <Footer>
                     <div>
                        <button
                           type="submit"
                           onClick={() => done(questionForm.id)}
                        >
                           Готово
                        </button>
                     </div>
                  </Footer>
               </>
            </MainContainer>
         ))}
      </Wrapper>
   )
}

const Wrapper = styled.div`
   margin: 0 auto;
   width: 770px;
`
const MainContainer = styled.div`
   background-color: #fff;
   border-radius: 8px;
   width: 770px;
   padding: 25px 25px;
   margin-bottom: 20px;
   flex-direction: column;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
`
const QuestionSection = styled.div`
   display: flex;
   width: 715px;
   justify-content: space-between;
   border-bottom: 1px solid gray;
   padding-bottom: 20px;
`
const TitleQuestion = styled.div`
   width: 400px;
   display: flex;
   & img {
      width: 25px;
      margin-right: 10px;
   }
   font-family: 'Google Sans', Roboto, Arial, sans-serif;
   font-size: 18px;
   font-weight: 400;
   line-height: 24px;
   color: #202124;
`
const Container = styled.div`
   padding: 20px 10px;
   display: flex;
   width: 680px;
   justify-content: space-between;
   cursor: pointer;

   & p {
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 16px;
      letter-spacing: 0.1px;
      color: #202124;
      font-weight: 400;
   }
   & div {
      border-bottom: 1px solid gray;
      width: 40px;
      height: 30px;
   }
   & input {
      width: 40px;
      flex-shrink: 1;
      background-color: transparent;
      border: none;
      display: block;
      font: 400 16px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
      height: 24px;
      line-height: 24px;
      margin: 0;
      min-width: 0%;
      outline: none;
      padding: 0;
   }
`
const StyledDiv = styled.div`
   display: flex;
   align-items: center;
   border-bottom: 1px solid gray;
   padding-bottom: 20px;
   & input {
      font-size: 30px;
   }
   & p {
      margin-left: 10px;
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 20px;
      color: #202124;
   }
`
const Footer = styled.div`
   padding-top: 13px;
   display: flex;
   justify-content: end;
   & button {
      width: 100px;
      color: #1a73e8;
      height: 33px;
      background-color: white;
      border: 1px #dadce0 solid;
      border-radius: 5px;
      font-size: 17px;
      cursor: pointer;
   }
`
