import { createSlice } from "@reduxjs/toolkit";

// {cards: {
//     cards: {
//       '789': {
//         id: '789',
//         front: 'front text',
//         back: 'back text'
//       },
//       '101': {
//         id: '101',
//         front: 'front text',
//         back: 'back text'
//       },
//       '102': {
//         id: '102',
//         front: 'front text',
//         back: 'back text'
//       },
//     }
//   }}

const initialState = {
  cards: {}
};
const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      const newCard = { id, front, back };
      return { ...state, cards: { ...state.cards, [id]: newCard } };
    }
  }
});

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
