import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { formActions } from '../../store/slices/formSlice'
import { ReactComponent as CheckedIcon } from '../../assets/icons/checkbox-checked.svg'

export const Answers = () => {
   const dispatch = useDispatch()
   const { forms } = useSelector((state) => state.form)
   const done = (id) => {
      dispatch(formActions.doneAnswer(id))
   }
   const chooseCorrectAnswer = (formId, answer) => {
      dispatch(formActions.chooseAnswer({ formId, answer }))
   }
   const setOptionPoints = (point, formId) => {
      dispatch(formActions.addPoint({ point, formId }))
   }
   const onChangeInputValue = (answer, formId) => {
      dispatch(formActions.chooseAnswer({ answer, formId }))
   }

   return (
      <Wrapper>
         {forms.map(
            (questionForm) =>
               questionForm.answer && (
                  <MainContainer key={questionForm.id}>
                     <>
                        <QuestionSection>
                           <CheckedIcon />
                           <p>Выберите верные вариaнты:</p>
                        </QuestionSection>
                        <div>
                           <Container>
                              <p>{questionForm.questionText}</p>
                              <div>
                                 <input
                                    type="number"
                                    className="points"
                                    min="0"
                                    step="1"
                                    placeholder="0"
                                    onClick={(e) =>
                                       setOptionPoints(
                                          e.target.value,
                                          questionForm.id
                                       )
                                    }
                                 />
                              </div>
                           </Container>
                           {questionForm.options.map((option) => (
                              <WrapperDiv
                                 key={option.id}
                                 onClick={() => {
                                    chooseCorrectAnswer(
                                       questionForm.id,
                                       option.optionText
                                    )
                                 }}
                              >
                                 {questionForm.questionType !== 'text' ? (
                                    <>
                                       <input
                                          type={questionForm.questionType}
                                       />
                                       <p>{option.optionText}</p>
                                    </>
                                 ) : (
                                    <StyledInput
                                       onChange={(e) =>
                                          onChangeInputValue(
                                             e.target.value,
                                             questionForm.id
                                          )
                                       }
                                    />
                                 )}
                              </WrapperDiv>
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
               )
         )}
      </Wrapper>
   )
}

const Wrapper = styled.div`
   margin: 20px auto;
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
   border-bottom: 1px solid gray;
   padding-bottom: 20px;
   align-items: center;
   & p {
      margin-left: 10px;
      font-size: 18px;
   }
`

const Container = styled.div`
   padding: 20px 10px 0px 10px;
   display: flex;
   width: 680px;
   justify-content: space-between;
   cursor: pointer;
   & p {
      font-family: 'Google Sans', Roboto, Arial, sans-serif;
      font-size: 16px;
      letter-spacing: 0.1px;
      color: #1a73e8;
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
const WrapperDiv = styled.div`
   display: flex;
   align-items: center;
   height: 40px;
   & p {
      margin-left: 10px;
      font-family: Roboto, Arial, sans-serif;
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 20px;
      color: #102155;
   }
`
const Footer = styled.div`
   padding-top: 13px;
   display: flex;
   justify-content: end;
   & button {
      width: 100px;
      color: #1a73e8;
      background-color: white;
      border: 1px #dadce0 solid;
      border-radius: 5px;
      font-size: 17px;
      font-weight: 600;
      cursor: pointer;
      padding: 7px;
   }
`
const StyledInput = styled.input`
   font-size: 17px;
   width: 300px;
   border: none;
   outline: none;
   padding-left: 10px;
   border-bottom: 1px dotted gray;
`
