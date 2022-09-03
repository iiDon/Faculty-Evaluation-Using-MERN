import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFaculties = createAsyncThunk(
  "faculties/getFaculties",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/api/faculty");
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const facultiesSlice = createSlice({
  name: "faculties",
  initialState: { faculties: null, isLoading: false },
  extraReducers: {
    // Get All Faculties
    [getFaculties.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [getFaculties.fulfilled]: (state, actions) => {
      state.faculties = actions.payload;
      state.isLoading = false;
    },
    [getFaculties.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

// export const {} = counterSlice.actions;

export default facultiesSlice.reducer;
