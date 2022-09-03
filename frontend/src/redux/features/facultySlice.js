import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFaculty = createAsyncThunk(
  "faculties/getFaculty",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/api/faculty/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const facultySlice = createSlice({
  name: "faculty",
  initialState: { faculty: null, isLoading: false },
  extraReducers: {
    [getFaculty.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [getFaculty.fulfilled]: (state, actions) => {
      state.faculty = actions.payload;
      state.isLoading = false;
    },
    [getFaculty.rejected]: (state, actions) => {
      state.isLoading = false;
    },
  },
});

// export const {} = counterSlice.actions;

export default facultySlice.reducer;
