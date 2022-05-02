import { createSlice } from '@reduxjs/toolkit';
import { login, logout, register } from './async';

const initialState: UserState = {
  status: undefined,
  user: undefined,
  message: undefined,
};

// TODO login and logout thunk

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    init: (state, action) => {
      state.status = 'success';
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = action.payload.status;
      state.user = action.payload.user;
      state.message = action.payload.message;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = 'error';
      state.user = undefined;
      state.message = action.payload;
    });

    // Register
    builder.addCase(register.fulfilled, (state, action) => {
      state.status = action.payload.status;
      state.user = action.payload.user;
      state.message = action.payload.message;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = 'error';
      state.user = undefined;
      state.message = action.payload;
    });

    // Logout
    builder.addCase(logout.fulfilled, (state, action) => {
      state.status = 'success';
      state.user = undefined;
      state.message = action.payload;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.status = 'error';
      state.user = undefined;
      state.message = action.payload;
    });
  },
});

export const { init } = authSlice.actions;
export default authSlice.reducer;
