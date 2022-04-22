import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { QuestionForm } from '../Pages/QuestionForm'
import { AllQuizzes } from '../Pages/AllQuizzes'
import { Header } from '../layout/Header'
import { Quiz } from '../Pages/Quiz'

export const AppRoutes = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route exact path="/" element={<Navigate replace to="/quiz" />} />
            <Route exact path="/quiz" element={<QuestionForm />} />
            <Route exact path="/tests" element={<AllQuizzes />} />
            <Route exact path="/quizes/:quizeId" element={<Quiz />} />
         </Routes>
      </div>
   )
}
