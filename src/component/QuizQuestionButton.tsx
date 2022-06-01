import { useEffect, useState } from "react";
import "../App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { incremented, scoreCounted, finalData } from "../redux/CounterSlice";
import { Button, Box, Alert, AlertTitle } from "@mui/material";
const QuizQuestionButton = () => {
  // Initial state
  const value: number = useAppSelector((state) => state.counter.value);
  const questions: any = useAppSelector((state) => state.counter.question);
  const askQuestionNumber: any = useAppSelector(
    (state) => state.counter.selectedQuestion
  );

  const dispatch = useAppDispatch();
  const count: number = 10;
  const [key, setKey] = useState(0);
  const [allQuestions, setAllQuestions] = useState([
    { options: [" "], questionAns: "", questionText: "" },
  ]);
  const [foralert, setForAlert] = useState(false);

  // Transfering options
  useEffect(() => {
    let askedQuestion: any = [];
    askQuestionNumber.map((item: string | number) => {
      return askedQuestion.push(questions[item]);
    });
    setAllQuestions(askedQuestion);
  }, [questions, askQuestionNumber]);

  // Object to modified data
  let objForData: any = {
    question: "s",
    ans: "a",
    click: "c",
  };

  //   onclick function
  const handleChange = (item: any) => {
    item === allQuestions[value].questionAns
      ? dispatch(scoreCounted())
      : setForAlert(true);
    objForData.question = allQuestions[value].questionText;
    objForData.ans = allQuestions[value].questionAns;
    objForData.click = item;
    // Storing object in array
    dispatch(finalData(objForData));
    dispatch(incremented());
    setKey((prevKey) => prevKey + 1);
  };

  // onupdate function
  const handleUpdate = (remainingTime: any) => {
    if (remainingTime === 0) {
      objForData.question = allQuestions[value].questionText;
      objForData.ans = allQuestions[value].questionAns;
      objForData.click = "Blank";
      dispatch(finalData(objForData));
      dispatch(incremented());
    }
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
          onUpdate={(remainingTime) => handleUpdate(remainingTime)}
          onComplete={() => {
            // For repeat and timing
            return { shouldRepeat: true, delay: 0.5 };
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
