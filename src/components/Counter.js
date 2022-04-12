import { Component } from 'react'
import { counterActions } from '../store'
import classes from './Counter.module.css'
import { useSelector, useDispatch, connect } from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch()
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const incrementByNumHandler = () => {
    dispatch(counterActions.incrementByNum(10))
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByNumHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  )
}
// * * * * * * * * * * * * * * * * * * * * * class based component * * * * * * * * * * * * * *

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment()
//   }

//   decrementHandler() {
//     this.props.decrement()
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return { counter: state.counter }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: 'INCREMENT' }),
//     decrement: () => dispatch({ type: 'DECREMENT' }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// * * * * * * * * * * * * * * * * * * * * *  * * * * * * * * * * * * * * * * * * * * *

export default Counter
