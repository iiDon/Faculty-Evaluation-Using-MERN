import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/api/comment");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: { comments: null, isLoading: false },
  extraReducers: {
    [getComments.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [getComments.fulfilled]: (state, actions) => {
      state.comments = actions.payload;
      state.isLoading = false;
    },
    [getComments.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

// export const {} = counterSlice.actions;

export default commentsSlice.reducer;
