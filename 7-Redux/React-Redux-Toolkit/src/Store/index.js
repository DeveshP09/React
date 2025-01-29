import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
  //we can create the slices of the store using createSlice(), instead of useSelector to get a slice of a store
  {
    name: "counter",
    initialState: { counterVal: 0 },
    reducers: {
      increment: (state) => {
        state.counterVal++;
      },
      decrement: (state) => {
        state.counterVal--;
      },
      add: (state, action) => {
        state.counterVal += Number(action.payload.num);
      },
      substract: (state, action) => {
        state.counterVal -= Number(action.payload.num);
      },
    },
  }
);

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    toggle: (state) => {
      return state != state;
    },
  },
});

const counterStore = configureStore({
  // Map/combine the different reducer function
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

export const privacyAction = privacySlice.actions; //export the action i.e function in reducers
export const counterAction = counterSlice.actions;
export default counterStore;
