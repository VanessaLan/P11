import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",

  async ({ email, password }, { rejectWithValue }) => {

    try {
      const request = await fetch(`http://localhost:3001/api/v1/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (request.status === 200) {
        const response = await request.json();
        const token = response.body.token;
        localStorage.setItem("token", token);
        return response;
      } else {
        const error = await request.json();
        console.error(error.message);
        alert(error.message);
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  status: "void",
  login: false,
  token: null,
  error: null,
};

const logSlice = createSlice({
  name: "log",
  initialState,

  reducers: {
    logout: (state) => {
      state.status = "void";
      state.login = false;
      state.token = null;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "pending";
        state.login = false;
        state.token = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.login = true;
        state.token = localStorage.getItem("token");
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "rejected";
        state.login = false;
        state.token = null;
        state.error = action.payload;
      });
  },
});

export const { logout } = logSlice.actions;
export default logSlice.reducer;
