import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const profileUser = createAsyncThunk(
  "user/profileUser",

  async ({ token }, { rejectWithValue }) => {
    try {
      const request = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (request.status === 200) {
        const response = await request.json();
        return response;
      } else {
        const error = await request.json();
        console.error(error);
        return rejectWithValue(error);
      }
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  status: "void",
  firstName: "",
  lastName: "",
  userName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    userLogout: (state) => {
      state.status = "void";
      state.firstName = "";
      state.lastName = "";
      state.userName = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(profileUser.pending, (state) => {
        state.status = "pending";
        state.firstName = "";
        state.lastName = "";
        state.userName = "";
      })
      .addCase(profileUser.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.firstName = action.payload.body.firstName;
        state.lastName = action.payload.body.lastName;
        state.userName = action.payload.body.userName;
      })
      .addCase(profileUser.rejected, (state) => {
        state.status = "rejected";
        state.firstName = "";
        state.lastName = "";
        state.userName = "";
      });
  },
});

export const { userLogout } = userSlice.actions;
export default userSlice.reducer;
