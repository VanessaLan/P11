import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const editUser = createAsyncThunk(
  "user/editUser",

  async ({ token, userName }, { rejectWithValue }) => {
    try {
      const request = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
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
};

const editSlice = createSlice({
  name: "edit",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(editUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(editUser.fulfilled, (state) => {
        state.status = "fulfilled";
      })
      .addCase(editUser.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export default editSlice.reducer;
