import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

// {quizzes: {
//     quizzes: {
//       '456': {
//         id: '456',
//         topicId: '123',
//         name: 'quiz for example topic',
//         cardIds: ['789', '101', '102']
//       }
//     }
//   }}

export const addQuizzThunk = createAsyncThunk(
  "quizzes/addQuizzThunk",
  async (arg, storeAPI) => {
    storeAPI.dispatch(addQuizz(arg));
    storeAPI.dispatch(addQuizId({ topicId: arg.topicId, quizId: arg.id }));
  }
);

const initialState = {
  quizzes: {}
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuizz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      const newQuiz = { id, name, topicId, cardIds };
      return { ...state, quizzes: { ...state.quizzes, [id]: newQuiz } };
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuizz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
