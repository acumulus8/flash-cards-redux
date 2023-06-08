import { createSlice } from "@reduxjs/toolkit";

// {topics: {
//     topics: {
//       '123': {
//         id: '123',
//         name: 'example topic',
//         icon: 'icon url',
//         quizIds: ['456']
//       }
//     }
//   }}

const initialState = {
  topics: {}
};
const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      const newTopic = { id, name, icon, quizIds: [] };
      return { ...state, topics: { ...state.topics, [id]: newTopic } };
    },
    addQuizId: (state, action) => {
      const { topicId, quizId } = action.payload;
      const topic = state.topics[topicId];
      return {
        ...state,
        topics: {
          ...state.topics,
          [topicId]: { ...topic, quizIds: [...topic.quizIds, quizId] }
        }
      };
    }
  }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
