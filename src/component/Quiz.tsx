import { useEffect, useState } from "react";

import "../App.css";
// Components
import QuizQuestion from "./QuizQuestion";
import QuizQuestionButton from "./QuizQuestionButton";
import { useAppSelector } from "../redux/hooks";

const Quiz = () => {
  let value = useAppSelector((state) => state.counter.value);

  const [z1, setz1] = useState(0);

  useEffect(() => {
    setz1(value + 1);
  }, [value]);

  return (
    <div>
      <h2>You are on {z1}/20</h2>
      <QuizQuestion />
      <QuizQuestionButton />
    </div>
  );
};

export default Quiz;
