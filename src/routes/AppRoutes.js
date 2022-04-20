import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { QuestionForm } from '../Pages/QuestionForm'
import { AllQuize } from '../Pages/AllQuizes'
import { Header } from '../layout/Header'
import { Quize } from '../Pages/Quize'

export const AppRoutes = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route exact path="/" element={<Navigate replace to="/quiz" />} />
            <Route exact path="/quiz" element={<QuestionForm />} />
            <Route exact path="/tests" element={<AllQuize />} />
            <Route exact path="/quizes/:quizeId" element={<Quize />} />
         </Routes>
      </div>
   )
}
