import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user:null,
  },
  reducers: {
    userData: (state,action) => {
      state.user= action.payload
    },
    userlogout: (state,action) => {
        state.user= null;
      },
  },
});

export const { userData,userlogout } = userSlice.actions;

export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
