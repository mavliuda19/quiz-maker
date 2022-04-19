import styled from 'styled-components'
import { AllQuestions } from './AllQuestions'
import { Answers } from './Answers'
import { QuestionCard } from './QuestionCard'

export const Questions = () => {
   return (
      <>
         <Wrapper>
            <AllQuestions />
            <QuestionCard />
         </Wrapper>
         <Answers />
      </>
   )
}

const Wrapper = styled.div`
   display: flex;
   margin: 28px auto;
   margin-bottom: 10px;
   width: 770px;
`
