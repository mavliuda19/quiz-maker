import { createSlice } from '@reduxjs/toolkit'

const initState = { modalIsVisible: false }
export const uiSlice = createSlice({
   name: 'ui',
   initialState: initState,
   reducers: {
      toogle(state) {
         state.modalIsVisible = !state.modalIsVisible
      },
      cancel(state) {
         console.log('hello ')
         state.modalIsVisible = !false
      },
   },
})

export const uiSliceActions = uiSlice.actions
