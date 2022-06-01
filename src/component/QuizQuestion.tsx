import React, { useEffect, useState } from "react";

import { useAppSelector } from "../redux/hooks";

const QuizQuestion = () => {
  // Initial state
  const value: number = useAppSelector((state) => state.counter.value);
  const questions: any = useAppSelector((state) => state.counter.question);
  const ask: any = useAppSelector((state) => state.counter.selectedQuestion);

  const [allQuestions, setAllQuestions] = useState([{ questionText: "" }]);

  // Transfering questions
  useEffect(() => {
    let askedQuestion: any = [];

    ask.map((item: string | number) => askedQuestion.push(questions[item]));
    setAllQuestions(askedQuestion);
  }, [questions, ask]);

  return (
    <div className="question">
      <div>
        <h1>
          Question :-{" "}
          {allQuestions.length > 0 ? allQuestions[value].questionText : ""}
        </h1>
      </div>
    </div>
  );
};

export default QuizQuestion;
