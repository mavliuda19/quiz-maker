import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { QuestionForm } from './components/QuestionForm/QuestionForm'
import { Tests } from './components/createdTest/Tests'
import { Forms } from './Pages/Forms'

function App() {
	return (
		<div>
			<Forms />
			<Routes>
				<Route
					exact
					path='/'
					element={<Navigate replace to='/quiz' />}
				/>
				<Route exact path='/quiz' element={<QuestionForm />} />
				<Route exact path='/tests' element={<Tests />} />
			</Routes>
		</div>
	)
}

export default App
