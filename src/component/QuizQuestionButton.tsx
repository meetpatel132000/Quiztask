import React, { useEffect, useState } from "react";
import "../App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import {
  incremented,
  scoreCounted,
  addingData,
  finalData,
} from "../redux/CounterSlice";
import { Button, Box, Alert, AlertTitle } from "@mui/material";
const QuizQuestionButton = () => {
  // Initial state
  const value = useAppSelector((state) => state.counter.value);
  const questions: any = useAppSelector((state) => state.counter.question);
  const ask: any = useAppSelector((state) => state.counter.selectedQuestion);

  const dispatch = useAppDispatch();
  const [count, setCount] = useState(10);
  const [key, setKey] = useState(0);
  const [allQuestions, setAllQuestions] = useState([
    { options: [" "], questionAns: "", questionText: "" },
  ]);
  const [countScore, setCountScore] = useState(0);
  const [foralert, setForAlert] = useState(false);

  // Transfering options
  useEffect(() => {
    let askedQuestion: any = [];
    ask.map((item: string | number) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      askedQuestion.push(questions[item]),
        dispatch(addingData(questions[item]));
    });
    setAllQuestions(askedQuestion);
  }, [questions, ask]);

  let m3 = {
    question: "s",
    ans: "a",
    click: "c",
  };

  //   onclick function
  const handleChange = (item: any) => {
    item === allQuestions[value].questionAns
      ? dispatch(scoreCounted())
      : setForAlert(true);
    m3.question = allQuestions[value].questionText;
    m3.ans = allQuestions[value].questionAns;
    m3.click = item;
    console.log(m3);
    dispatch(finalData(m3));
    dispatch(incremented());
    setKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <h3>Options :- </h3>
      <Box>
        {allQuestions[value].options.map((item) => {
          return (
            <Button
              variant="contained"
              className="btn"
              value={item}
              onClick={() => handleChange(item)}
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              {item}
            </Button>
          );
        })}
      </Box>
      <div className="counter">
        <CountdownCircleTimer
          key={key}
          isPlaying
          duration={count}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 5, 2, 0]}
          onUpdate={(remainingTime) => {
            // console.log("Counter is ", count);
            // console.log("Remaining time is ", remainingTime);
            if (remainingTime === 0) {
              m3.question = allQuestions[value].questionText;
              m3.ans = allQuestions[value].questionAns;
              m3.click = "Blank";
              dispatch(finalData(m3));
              dispatch(incremented());
            }
          }}
          onComplete={() => {
            // do your stuff here
            return { shouldRepeat: true, delay: 0.5 }; // repeat animation in 1.5 seconds
          }}
        >
          {({ remainingTime }) => (
            <div>
              <div> Remaining </div>
              <h3> {remainingTime} </h3>
              <div> seconds </div>
            </div>
          )}
        </CountdownCircleTimer>
      </div>
      <div>
        {foralert && (
          <Alert
            severity="error"
            onClose={() => {
              setForAlert(false);
            }}
          >
            <AlertTitle>Wrong Answer</AlertTitle>
            You choose wrong answer —
          </Alert>
        )}
      </div>
    </div>
  );
};

export default QuizQuestionButton;
