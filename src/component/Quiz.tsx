import "../App.css";
import { useEffect } from "react";
// Components
import QuizQuestion from "./QuizQuestion";
import QuizQuestionButton from "./QuizQuestionButton";

// **** New Redux Practice ****
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { questionsToAsked } from "../redux/CounterSlice";

const Quiz = () => {
  const value: any = useAppSelector((state) => state.counter.value);

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
    <div>
      {value < 20 ? (
        <div>
          <h2>You are on {value + 1}/20</h2>
          <QuizQuestion />
          <QuizQuestionButton />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
