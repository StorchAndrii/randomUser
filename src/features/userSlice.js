import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import baseService from "../baseService";

const initialState = {
  valueLike: 0,
  valueDislike: 0,
  user: [],
  likeUser: [],
  disLikeUser: [],
};

export const getUser = createAsyncThunk("userSlice/getUser", async () => {
  const { data } = await baseService.get("/api/");
  return data.results;
});

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    likeUser: (state, user) => {
      state.likeUser.push(user.payload);
    },

    disLikeUser: (state, user) => {
      state.disLikeUser.push(user.payload);
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.valueLike += 1;
    },
    decrement: (state) => {
      state.valueDislike += 1;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, likeUser, disLikeUser } =
  userSlice.actions;

export default userSlice.reducer;
