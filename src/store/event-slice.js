import {createSlice} from '@reduxjs/toolkit';

const eventSlice = createSlice({
    name: "event",
    initialState:{
        events:undefined,
    },
    reducers: {
        addEvents(state,action){
            state.events = action.payload.events;
            console.log(action.payload.events);
        }
    }
})

export const eventAction = eventSlice.actions;
export default eventSlice;