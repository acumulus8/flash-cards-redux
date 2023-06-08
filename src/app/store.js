import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "../features/cards/cardsSlice";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import topicsReducer from "../features/topics/topicsSlice";

export default configureStore({
	reducer: {
		cards: cardsReducer,
		quizzes: quizzesReducer,
		topics: topicsReducer,
	},
});

