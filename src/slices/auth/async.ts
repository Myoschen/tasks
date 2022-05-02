import { createAsyncThunk } from '@reduxjs/toolkit';
import { authServices } from '../../firebase/services';

// Login thunk
const login = createAsyncThunk<UserState, Omit<UserLoginOrRegister, 'username'>, {rejectValue: string}>(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const { email, password } = user;
      const userCredential = await authServices.login(email, password);
      const userDetails = await userCredential.user;
      return {
        status: 'success',
        user: {
          username: userDetails.displayName as string,
          email: userDetails.email as string,
          emailVerified: userDetails.emailVerified as boolean,
          photoURL: userDetails.photoURL as string,
          creationTime: userDetails.metadata.creationTime as string,
        },
        message: 'Login successful.',
      };
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      throw error;
    }
  },
);

// Register Thunk
const register = createAsyncThunk<UserState, UserLoginOrRegister, { rejectValue: string }>(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const { username, email, password } = user;
      const userCredential = await authServices.register(email, password);
      const userDetails = await userCredential.user;
      await authServices.updateUser(userDetails, username); // Change username
      await authServices.verifyUserEmail(userDetails); // Verify user's email
      return {
        status: 'success',
        user: {
          username: userDetails.displayName as string,
          email: userDetails.email as string,
          emailVerified: userDetails.emailVerified as boolean,
          photoURL: userDetails.photoURL as string,
          creationTime: userDetails.metadata.creationTime as string,
        },
        message: 'Registration successful.',
      };
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      throw error;
    }
  },
);

// Logout Thunk
const logout = createAsyncThunk<string, void, { rejectValue: string }>(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await authServices.logout();
      return 'Logout successful.';
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
      throw error;
    }
  },
);

export { login, register, logout };
