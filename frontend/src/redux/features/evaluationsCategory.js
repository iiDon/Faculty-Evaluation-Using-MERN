import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEvaluationsCategory = createAsyncThunk(
  "evaluationsCategory/getEvaluationsCategory",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/api/evaluationcategory");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const evaluationsCategorySlice = createSlice({
  name: "evaluationsCategory",
  initialState: { category: null, isLoading: false },
  extraReducers: {
    [getEvaluationsCategory.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [getEvaluationsCategory.fulfilled]: (state, actions) => {
      state.category = actions.payload;
      state.isLoading = false;
    },
    [getEvaluationsCategory.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

// export const {} = counterSlice.actions;

export default evaluationsCategorySlice.reducer;
