import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { QuestionForm } from '../components/QuestionForm/QuestionForm'
import { Tests } from '../components/createdTest/Tests'

export const AppRoutes = () => {
   return (
      <div>
         <Routes>
            <Route exact path="/" element={<Navigate replace to="/quiz" />} />
            <Route exact path="/quiz" element={<QuestionForm />} />
            <Route exact path="/tests" element={<Tests />} />
         </Routes>
      </div>
   )
}
