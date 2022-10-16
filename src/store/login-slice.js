import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    key: -1,
    photoURL: -1,
    displayName: -1,
    UID: -1,
    email: -1,
  },
  reducers: {
    addLogin(state, action) {
      state.key = action.payload.key;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
      state.UID = action.payload.UID;
      state.email = action.payload.email;
      // console.log(action.payload.loginRedux);
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice;
