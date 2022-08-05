import { createSlice } from "@reduxjs/toolkit";

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

export type UserState = {
  readonly currentUser: UserData | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
