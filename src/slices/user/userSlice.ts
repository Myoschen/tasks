import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  userData: Omit<IUser, 'password'> | null;
  isAuthorized: boolean;
}

const initialState: UserState = {
  userData: {
    username: '',
    email: '',
  },
  isAuthorized: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userData = action.payload.userData;
      state.isAuthorized = true;
    },
    setUserLogOutState: (state) => {
      state.userData = null;
      state.isAuthorized = false;
    },
  },
});

export const { setActiveUser, setUserLogOutState } = userSlice.actions;
export default userSlice.reducer;
