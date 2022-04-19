import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { AllQuestions } from './AllQuestions'
import { Answers } from './Answers'
import { QuestionCard } from './QuestionCard'

export const Questions = () => {
   const { forms } = useSelector((state) => state.form)

   return (
      <>
         {forms.map((form) => {
            return form.answers ? (
               <Answers key={form.id} />
            ) : (
               <Wrapper key={form.id}>
                  <AllQuestions />
                  <QuestionCard />
               </Wrapper>
            )
         })}
      </>
   )
}

const Wrapper = styled.div`
   display: flex;
   margin: 2rem auto;
   width: 770px;
`
