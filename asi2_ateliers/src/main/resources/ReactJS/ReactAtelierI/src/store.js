import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './slices/CardSlice.js';
import userReducer from './slices/UserSlice.js';

export default configureStore({
    reducer: {
        cardReducer: cardReducer,
        userReducer: userReducer,
    },
})
