import "../App.css";

// Components
import QuizQuestion from "./QuizQuestion";
import QuizQuestionButton from "./QuizQuestionButton";

// **** New Redux Practice ****
import { useAppSelector } from "../redux/hooks";


const Quiz = () => {
  const value: any = useAppSelector((state) => state.counter.value);


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
