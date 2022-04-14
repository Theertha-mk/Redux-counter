import counterReducer from './counter-slice'
import authReducer from './auth-slice'
import { configureStore} from '@reduxjs/toolkit'


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
  reducer: { counter: counterReducer, auth: authReducer },
})

export default store
