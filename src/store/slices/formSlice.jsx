import { createSlice } from '@reduxjs/toolkit'

const initState = JSON.parse(localStorage.getItem('quizzes')) || {
   questionTitle: 'Новая форма',
   questionDescription: '',
   id: Date.now().toString(),
   score: 0,
   question: [],
   forms: [],
}

export const formSlice = createSlice({
   name: 'form',
   initialState: initState,
   reducers: {
      changeQuestionTitle(state, action) {
         const title = action.payload
         state.questionTitle = title
      },
      changeQuestionDescription(state, action) {
         const description = action.payload
         state.questionDescription = description
      },
      addQuestionField(state, action) {
         state.forms.push({
            questionText: 'Вопрос без заголовка',
            questionType: 'checkbox',
            options: [{ optionText: 'Вариант 1', id: '123' }],
            selectedType: 'Несколько из списка',
            answer: false,
            correctAnswer: [],
            required: false,
            id: action.payload.id,
         })
      },
      removeQuestionField(state, action) {
         const id = action.payload
         const filteredQuestionField = state.forms.filter(
            (form) => form.id !== id
         )
         state.forms = filteredQuestionField
      },
      copyQuestionField(state, action) {
         const id = action.payload
         const currentQuestionField = state.forms.find((form) => form.id === id)
         state.forms.push({
            ...currentQuestionField,
            id: Date.now().toString(),
         })
      },
      changeQuestionText(state, action) {
         const { title, id } = action.payload
         const currentQuestionField = state.forms.find((form) => form.id === id)
         if (currentQuestionField) {
            currentQuestionField.questionText = title
         }
      },
      addOptionText(state, action) {
         const { data, formId } = action.payload
         state.forms.map((form) => {
            if (form.id === formId) {
               return form.options.push({
                  optionText: data.optionText,
                  id: data.id,
               })
            }
            return form
         })
      },
      removeOptionText(state, action) {
         const { formId, id } = action.payload
         const currentQuestionField = state.forms.find(
            (form) => form.id === formId
         )
         const currentOption = currentQuestionField.options.findIndex(
            (option) => option.id === id
         )
         currentQuestionField.options.splice(currentOption, 1)
      },
      changeOptionValue(state, action) {
         const { text, formId, id } = action.payload
         const currentQuestionField = state.forms.find((form) => {
            return form.id === formId
         })
         const currentOption = currentQuestionField.options.find(
            (option) => option.id === id
         )
         if (currentOption) {
            currentOption.optionText = text
         }
      },
      changeQuestionType(state, action) {
         const { id, type, text } = action.payload
         const questionsType = state.forms.find((form) => form.id === id)
         if (questionsType) {
            questionsType.questionType = type
            questionsType.selectedType = text
         } else {
            questionsType.questionType = 'text'
            questionsType.selectedType = 'Несколько из списка'
         }
      },

      requiredQuestion(state, action) {
         const id = action.payload
         const currentQuestionField = state.forms.find((form) => form.id === id)
         if (currentQuestionField) {
            currentQuestionField.required = !currentQuestionField.required
         }
      },
      chooseCorrectAnswer(state, action) {
         const { formId, answer } = action.payload
         const currentQuestionField = state.forms.find(
            (form) => form.id === formId
         )
         if (currentQuestionField) {
            currentQuestionField.correctAnswer.push(answer)
         }
      },
      addPoint(state, action) {
         const { formId, point } = action.payload
         const currentQuestionField = state.forms.find(
            (form) => form.id === formId
         )
         if (currentQuestionField) {
            currentQuestionField.points = point
         }
      },
      clearForm(state) {
         state.question = {
            title: state.questionTitle,
            description: state.questionDescription,
            id: state.id,
            score: state.score,
            questions: [...state.forms],
         }
         state.forms = []
         state.questionTitle = 'Новая форма'
         state.questionDescription = ''
         state.score = 0
      },
      checkAnswer(state) {
         state.question.score += 1
      },
   },
})

export const formActions = formSlice.actions
