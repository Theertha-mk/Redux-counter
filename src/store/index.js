import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialCounterState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    incrementByNum(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})


// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'INCREMENT') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'DECREMENT') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     }
//   }
//   if (action.type === 'INCREMENTBYNUM') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     }
//   }

//   if (action.type === 'TOGGLE') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     }
//   }

//   return state
// }

const store = configureStore({
  reducer: counterSlice.reducer,
})
export const counterActions = counterSlice.actions
export default store
