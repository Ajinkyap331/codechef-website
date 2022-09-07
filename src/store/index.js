import {configureStore} from "@reduxjs/toolkit";
import eventSlice from './event-slice';

const store = configureStore({
    reducer: {event: eventSlice.reducer},
});

export default store;