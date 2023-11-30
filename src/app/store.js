import { configureStore } from '@reduxjs/toolkit';
import todosSlice from '../features/todosSlice';
import backgroundSlice from '../features/backgroundSlice';
import quotesSlice from '../features/quotesSlice';



export const store = configureStore({
  reducer: {
    todos:todosSlice,
    background:backgroundSlice,
    quotes:quotesSlice

  }
});



