import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


//  Login
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/api/user/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({ email, token: data.token })
        );
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);


// signup
export const signup = createAsyncThunk(
  "auth/signup",
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      let data = await response.json();
      console.log("response", data);
      if (response.status === 200) {
        localStorage.setItem(
          "user",
          JSON.stringify({ email, token: data.token })
        );
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const initialState = {
  email: null,
  isLogged: false,
  isLoading: false,
  isError: false,
};

//  Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, actions) => {
      // console.log(actions.payload)
      state.email = actions.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.email = null;
      state.isLogged = false;
      localStorage.clear();
    },
  },
  extraReducers: {

    // Login
    [login.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [login.fulfilled]: (state, actions) => {
      state.email = actions.payload.email;
      state.isLoading = false;
      state.isLogged = true;
      state.isError = false;
    },
    [login.rejected]: (state, actions) => {
      state.isError = actions.payload.error;
      state.isLoading = false;
    },

    // SignUp
    [signup.pending]: (state, actions) => {
      state.isLoading = true;
    },
    [signup.fulfilled]: (state, actions) => {
      state.email = actions.payload.email;
      state.isLoading = false;
      state.isLogged = true;
      state.isError = false;
    },
    [signup.rejected]: (state, actions) => {
      state.isError = actions.payload.error;
      state.isLoading = false;
    },
  },
});

export const { loggedIn, logout } = authSlice.actions;
export default authSlice.reducer;
