import "./App.css";
import { useEffect } from "react";
// components
import Quiz from "./component/Quiz";
import QuizEnd from "./component/QuizEnd";

// **** New Redux Practice ****
import { useAppDispatch } from "./redux/hooks";
import { questionsToAsked } from "./redux/CounterSlice";

function App() {
  // Getting array of random numbers
  const ARRAY_LENGTH: number = 20;
  let arrayOfRandomNumbers: any = Array.from(Array(ARRAY_LENGTH)).map((x) =>
    Math.floor(Math.random() * 100)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    // storing the array of random numbers
    dispatch(questionsToAsked(arrayOfRandomNumbers));
  }, [arrayOfRandomNumbers, dispatch]);

  return (
    <div className="App">
      <Quiz />
      <QuizEnd />
    </div>
  );
}

export default App;
