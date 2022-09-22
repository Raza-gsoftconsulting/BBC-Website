const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];
console.log("Reducer is Working");
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
});

export default homeSlice.reducer;
