import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getEvaluations = createAsyncThunk(
  "evaluations/getEvaluations",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/api/evaluation");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const evaluationsSlice = createSlice({
  name: "evaluations",
  initialState: { evaluations: null, isLoading: false },
  extraReducers: {
    [getEvaluations.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [getEvaluations.fulfilled]: (state, actions) => {
      state.evaluations = actions.payload;
      state.isLoading = false;
    },
    [getEvaluations.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

// export const {} = counterSlice.actions;

export default evaluationsSlice.reducer;
