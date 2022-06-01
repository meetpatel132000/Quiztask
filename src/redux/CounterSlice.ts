import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jsondata from "../api.json";

interface CounterState {
  value: number;
  score: number;
  question: Array<Object>;
  loadData: Array<any>;
  selectedQuestion: Array<Object>;
}

const initialState: CounterState = {
  value: 0,
  score: 0,
  question: jsondata,
  loadData: [],
  selectedQuestion: []
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // inctremented
    incremented(state) {
      state.value++;
    },
    scoreCounted(state) {
      state.score++;
    },
    questionsToAsked(state, action: PayloadAction<Array<Number>>) {
      for (let i = 0; i < 20; i++) {
        state.selectedQuestion.push(action.payload[i])
      }
    },
    finalData(state, action: PayloadAction<Object>) {
      state.loadData.push(action.payload)
    }
  },
});

export const { incremented, questionsToAsked, scoreCounted, finalData } = counterSlice.actions;
export default counterSlice.reducer;

