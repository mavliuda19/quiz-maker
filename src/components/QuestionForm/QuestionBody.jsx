import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { formActions } from '../../store/slices/formSlice'

export const QuestionBody = ({ questionType, options, formId }) => {
   const dispatch = useDispatch()
   console.log(questionType)
   const changeOptionValueHandler = (text, formId, id) => {
      console.log(id)
      dispatch(formActions.changeOptionValue({ text, formId, id }))
   }

   const addQuestionVariantHandler = (formId) => {
      if (options.length < 5) {
         const data = {
            optionText: `Вариант ${Number(options.length + 1)}`,
            id: Math.random().toString(),
         }
         dispatch(formActions.addOptionText({ data, formId }))
      }
   }

   const removeOptionHandler = (formId, id) => {
      console.log(formId)
      console.log(id)
      dispatch(formActions.removeOptionText({ formId, id }))
   }
   let content
   // eslint-disable-next-line no-constant-condition
   if (questionType === 'checkbox' || 'radio') {
      content = (
         <>
            {options.map((option) => {
               return (
                  <Wrapper key={option.id}>
                     <>
                        <RadioIcon>
                           <input type={questionType} />
                        </RadioIcon>
                        <Text>
                           <input
                              onChange={(e) =>
                                 changeOptionValueHandler(
                                    e.target.value,
                                    formId,
                                    option.id
                                 )
                              }
                              type="text"
                              value={option.optionText}
                              placeholder="Вариант"
                           />
                        </Text>
                     </>

                     <RadioIcon
                        onClick={() => removeOptionHandler(formId, option.id)}
                     >
                        <img
                           src="https://www.svgrepo.com/show/389515/x.svg"
                           alt=""
                        />
                     </RadioIcon>
                  </Wrapper>
               )
            })}
            <Container>
               <RadioIcon>
                  <div />
               </RadioIcon>
               <WrapperQuestion>
                  <button
                     type="button"
                     onClick={() => addQuestionVariantHandler(formId)}
                  >
                     <input type="text" placeholder="Добавить вариант" />
                  </button>
                  <span>или </span>
                  <div>
                     <span>Добавить вариант &quot;Другое&quot;</span>
                  </div>
               </WrapperQuestion>
            </Container>
         </>
      )
   }
   if (questionType === 'text') {
      content = (
         <WrapperText>
            <input placeholder="Краткий ответ" disabled />
         </WrapperText>
      )
   }
   if (questionType === 'date') {
      content = (
         <WrapperText>
            <input placeholder="Краткий ответ" type={questionType} disabled />
         </WrapperText>
      )
   }
   return <QuestionSection>{content}</QuestionSection>
}

const QuestionSection = styled.div`
   margin-top: 10px;
   padding-bottom: 24px;
   border-bottom: 2px solid #dadce0;
`
const Wrapper = styled.div`
   width: 750px;
   text-align: start;
   padding: 5px;
   display: flex;
`
const RadioIcon = styled.div`
   height: 40px;
   display: flex;
   width: 25px;
   align-items: center;
   margin-right: 10px;
   cursor: pointer;
`
const Text = styled.div`
   height: 40px;
   display: flex;
   align-items: center;
   & input {
      border: none;
      width: 640px;
      height: 40px;
      font-size: 17px;
      outline: none;
      &:focus {
         border-bottom: 1px solid gray;
      }
   }
`
const Container = styled.div`
   width: 700px;
   text-align: start;
   padding: 5px;
   display: flex;
`
const WrapperQuestion = styled.div`
   height: 40px;
   display: flex;
   align-items: center;
   font-size: 17px;
   & input {
      border: none;
      width: 150px;
      height: 40px;
      font-size: 16px;
      outline: none;
   }
   & div {
      margin-left: 13px;
      color: blue;
      cursor: pointer;
   }
   & button {
      border: none;
      outline: none;
   }
`
const WrapperText = styled.div`
   padding: 15px 10px 5px 10px;
   width: 400px;
   border-bottom: 1px dotted rgba(0, 0, 0, 0.38);
   & input {
      border: none;
      width: 400px;
      font-size: 16px;
   }
`
