import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState: initialState,
  reducers: {
    countUp(state) {
      state.value++;
    },
    reset(state) {
      state.value = 0;
    },
  },
});
