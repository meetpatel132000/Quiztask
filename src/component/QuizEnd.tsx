import { useState, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../App.css";

const QuizEnd = () => {
  let scoreByExpert = useAppSelector((state) => state.counter.score);
  const finalObj = useAppSelector((state) => state.counter.loadData);
  const percentage = (Number(scoreByExpert) * 100) / 20;

  return (
    <div>
      <h1>End of Quiz</h1>
      <h2>Your score is {percentage}%</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="row-head">
              <TableCell>
                <h2 className="header">Questions</h2>
              </TableCell>
              <TableCell>
                <h2 className="header">Correct Answers</h2>
              </TableCell>
              <TableCell>
                <h2 className="header">Your Answers</h2>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalObj.map((user) => (
              <TableRow
                className={user.ans === user.click ? "bg-green" : "bg-red"}
              >
                <TableCell>{user.question}</TableCell>
                <TableCell>{user.ans}</TableCell>
                <TableCell>{user.click}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default QuizEnd;
function allQuestions(arg0: string, allQuestions: any) {
  throw new Error("Function not implemented.");
}
