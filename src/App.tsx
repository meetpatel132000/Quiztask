import "./App.css";

// components
import Quiz from "./component/Quiz";
import QuizEnd from "./component/QuizEnd";

// **** New Redux Practice ****
// import { useAppDispatch, useAppSelector } from "./redux/hooks";
// import { questionsToAsked, addingData } from "./redux/CounterSlice";

function App() {
  

  return (
    <div className="App">
      <Quiz />
      <QuizEnd />
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
