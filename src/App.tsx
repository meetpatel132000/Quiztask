import React, { useEffect } from "react";
import "./App.css";

// components
import Quiz from "./component/Quiz";
import QuizEnd from "./component/QuizEnd";

// **** New Redux Practice ****
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { questionsToAsked } from "./redux/CounterSlice";

function App() {
  const value = useAppSelector((state) => state.counter.value);
  let arr: number[] = [];
  useEffect(() => {
    while (arr.length < 20) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
  }, []);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(questionsToAsked(arr));
  }, []);

  return (
    <div className="App">
      {value < 20 ? <Quiz /> : <QuizEnd />}
      {/* {value > 20 ?  : <></>} */}
    </div>
  );
}

export default App;

// **** New Redux Practice ****
// const value = useAppSelector((state) => state.counter.value);
// const dispatch = useAppDispatch();
// useEffect(() => {
//   dispatch(questionsToAsked(arr));
// }, []);
// const handleChange = () => {
//   dispatch(fixedAmountIncrement(3));
// };

// return (
//   <div className="App">

//     {/*  for practice of new redux */}
//     {/* <button onClick={handleChange}>count is {value}</button> */}
//   </div>
// );
