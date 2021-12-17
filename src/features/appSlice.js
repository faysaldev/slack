import { createSlice } from '@reduxjs/toolkit';


export const appSlice = createSlice({
  name: 'app',
  initialState: {
    roomId:"VojxQIvDRabt8Z0zzo8X",
  },
  reducers: {
    enterRoom: (state,action) => {
      state.roomId= action.payload.roomId
    },
  },
});

export const { enterRoom } = appSlice.actions;

export const selectRoom = (state) => state.app.roomId;


export default appSlice.reducer;
