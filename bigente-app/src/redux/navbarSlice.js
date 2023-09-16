import { createSlice } from '@reduxjs/toolkit';

const navbarSlice = createSlice({
  name: 'navbar',
  initialState: '',
  reducers: {
    setButtonName: (state, action) => action.payload,
  },
});

export const { setButtonName } = navbarSlice.actions;

export default navbarSlice.reducer;