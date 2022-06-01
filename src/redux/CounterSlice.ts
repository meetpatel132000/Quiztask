import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jsondata from "../api.json";

interface CounterState {
  value: number;
  score: number;
  question: Array<Object>;
  storedQuestion: Array<Object>;
  loadData: Array<any>;
  selectedQuestion: Array<Object>;
}

const initialState: CounterState = {
  value: 0,
  score: 0,
  question: jsondata,
  storedQuestion: [],
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
    addingData(state, action: PayloadAction<Array<Object>>) {
      state.storedQuestion = [...action.payload]
    },
    finalData(state, action: PayloadAction<Object>) {
      state.loadData.push(action.payload)
    }
  },
});

export const { incremented, questionsToAsked, scoreCounted, addingData, finalData } = counterSlice.actions;
export default counterSlice.reducer;

// redux practice

// interface CounterState {
//   value: number;
// }

// const initialState: CounterState = {
//   value: 0,
// };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState,
//   reducers: {
//     // inctremented
//     incremented(state) {
//       state.value++;
//     },
//     fixedAmountIncrement(state, action: PayloadAction<number>){
//       state.value += action.payload
//     }
//   },
// });

// export const { incremented, fixedAmountIncrement } = counterSlice.actions;
// export default counterSlice.reducer;
