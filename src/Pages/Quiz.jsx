import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Quizzes } from '../components/Quizzes/Quizzes'
import { Result } from '../components/ui/Result'
import { formActions } from '../store/slices/formSlice'

export const Quiz = () => {
   const dispatch = useDispatch()
   const form = useSelector((state) => state.form.question)
   const forms = useSelector((state) => state.form.question.questions)

   const [questionIndex, setQuestionIndex] = useState(0)
   const [modalIsVisible, setModalIsVisible] = useState(false)
   const [inputValue, setInputValue] = useState('')
   const [message, setMessage] = useState('')
   const [title, setTitle] = useState('')

   const moveNextQuestion = () => {
      if (questionIndex !== forms.length - 1) {
         setQuestionIndex(questionIndex + 1)
      } else {
         setModalIsVisible(true)
      }
      if (inputValue !== '') {
         dispatch(formActions.checkAnswer())
         setInputValue('')
      }
   }
   const openModalHandler = () => {
      setModalIsVisible(true)
      setTitle(form.title)
      setMessage('Ответ записан.')
   }
   const changeInputValueHandler = (value) => {
      setInputValue(value)
   }
   // const resultOfQuiz = `${form.score} из ${forms.length}`
   const numberOfQuestions = `${questionIndex + 1}/${forms.length}`

   return (
      <>
         <Wrapper>
            <div>
               <h1>{form.title}</h1>
               <p>{form.description}</p>
            </div>
         </Wrapper>

         <div>
            <Container>
               <TextWrapper>
                  <p>{forms[questionIndex].questionText}</p>
                  <h4>{numberOfQuestions}</h4>
               </TextWrapper>

               <Quizzes
                  options={forms[questionIndex].options}
                  questionType={forms[questionIndex].questionType}
                  formId={forms[questionIndex].id}
                  required={forms[questionIndex].required}
                  correctAnswer={forms[questionIndex].correctAnswer}
                  inputValue={inputValue}
                  changeInputValueHandler={changeInputValueHandler}
               />
            </Container>
         </div>

         <ButtonWrapper>
            <div>
               {questionIndex > 0 ? (
                  <button
                     onClick={() => setQuestionIndex(questionIndex - 1)}
                     type="button"
                  >
                     Предыдущий вопрос
                  </button>
               ) : (
                  ''
               )}
            </div>
            <div>
               {forms.length - 1 === questionIndex ? (
                  <button type="button" onClick={openModalHandler}>
                     Завершить тест
                  </button>
               ) : (
                  <button type="button" onClick={moveNextQuestion}>
                     Следующий вопрос
                  </button>
               )}
            </div>
         </ButtonWrapper>
         {modalIsVisible && (
            <Result
               setModalIsVisible={setModalIsVisible}
               title={title}
               message={message}
               // result={resultOfQuiz}
            />
         )}
      </>
   )
}

const Wrapper = styled.div`
   width: 770px;
   margin: 30px auto;
   background-color: white;
   border-radius: 8px;
   box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%),
      0 1px 3px 0 rgb(0 0 0 / 12%);
   & div {
      text-transform: capitalize;
      border-radius: 8px;
      width: 770px;
      border-top: 9px solid rgb(103, 58, 183);
      padding: 25px 35px;
   }
   & h1 {
      margin: 5px;
      color: #202124;
   }
   & p {
      margin: 5px;
      margin-top: 10px;
   }
`
const Container = styled.div`
   border-radius: 8px;
   padding: 20px;
   width: 770px;
   margin: 30px auto;
   margin-top: 20px;
   background-color: white;
   display: flex;
   flex-direction: column;
   color: #202124;
   border: 1px solid rgb(208, 191, 237);
`
const ButtonWrapper = styled.div`
   width: 770px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   & div {
      width: 200px;
      height: 30px;
      display: flex;
      justify-content: end;
   }
   & button {
      padding: 7px 19px;
      height: 38px;
      font-size: 16px;
      color: white;
      border-radius: 5px;
      background-color: rgb(103, 58, 183);
      cursor: pointer;

      &:hover {
         animation: shake 0.99s cubic-bezier(0.36, 0.07, 0.19, 0.97);
         width: 200px;
         height: 40px;
      }
   }

   @keyframes shake {
      0% {
         transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
         transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
         transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
         transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
         transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
         transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
         transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
         transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
         transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
         transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
         transform: translate(1px, -2px) rotate(-1deg);
      }
   }
`
const TextWrapper = styled.div`
   font-size: 20px;
   margin-left: 10px;
   width: 710px;
   display: flex;
   justify-content: space-between;
   margin-top: 10px;
   & h4 {
      color: rgb(103, 58, 183);
   }
`
