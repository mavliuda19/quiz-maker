import { createSlice } from '@reduxjs/toolkit'
const initState = {
   forms: [
      {
         questionText: 'Вопрос без заголовка',
         answer: false,
         answerKey: '',
         questionType: '',
         options: [{ optionText: 'Вариант 1', id: '1jlk2' }],
         open: true,
         required: false,
         id: '3l122',
      },
   ],
}

export const formSlice = createSlice({
   name: 'form',
   initialState: initState,
   reducers: {
      addForm(state, action) {
         state.forms.push({
            questionText: 'Вопрос без заголовка',
            answer: false,
            answerKey: '',
            questionType: '',
            options: [{ optionText: 'Вариант 1', id: '123' }],
            open: true,
            required: false,
            id: action.payload.id,
         })
      },
      removeForm(state, action) {
         const { id } = action.payload
         state.forms = state.forms.filter((form) => form.id !== id)
      },
      copyQuestion(state, action) {
         const { id } = action.payload
         const copy = state.forms.find((form) => form.id === id)
         state.forms.push(copy)
      },
      addOptionText(state, action) {
         const { data, formId } = action.payload
         state.forms.map((form) => {
            if (form.id === formId) {
               form.options.push({
                  optionText: data.optionText,
                  id: data.id,
               })
            }
         })
      },
      removeOptionText(state, action) {
         state.forms.map(
            (form) =>
               (form.options = form.options.filter((optionText) => {
                  return optionText.id !== action.payload
               }))
         )
      },
      changeOptionValue(state, action) {
         const { text, formId, id } = action.payload
         const currentQuestionForm = state.forms.find((form) => {
            return form.id === formId
         })

         const ques = currentQuestionForm.options.find(
            (option) => option.id === id
         )

         if (ques) {
            ques.optionText = text
         }
      },
      changeType(state, action) {
         const { id, type } = action.payload
         const questionsType = state.forms.find((form) => form.id === id)
         if (questionsType) {
            questionsType.questionType = type
         } else {
            questionsType.questionType = 'text'
         }
      },
      // openForm(state, action) {
      //    const { id } = action.payload

      //    const questionFormOpen = state.forms.find((form) => form.id === id)
      //    if (questionFormOpen) {
      //       questionFormOpen.open = true
      //    }
      // },
      // closeForm(state, action) {
      //    const { id } = action.payload
      //    const questionFormOpen = state.forms.find((form) => form.id === id)
      //    if (questionFormOpen) {
      //       questionFormOpen.open = false
      //    }
      // },
      changeQuestionText(state, action) {
         const { text, id } = action.payload
         const newquestionText = state.forms.find((form) => form.id === id)
         if (newquestionText) {
            newquestionText.questionText = text
         }
      },
      requiredQuestion(state, action) {
         const { id } = action.payload
         const currentQuestionForm = state.forms.find((form) => form.id === id)
         if (currentQuestionForm) {
            currentQuestionForm.required = !currentQuestionForm.required
         }
      },
   },
})

export const formActions = formSlice.actions
