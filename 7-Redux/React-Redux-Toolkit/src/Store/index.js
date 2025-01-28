import { configureStore } from "@reduxjs/toolkit";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterSlice = createSlice(
  //we can create the slices of the store using createSlice(), instead of useSelector to get a slice of a store
  {
    name: "counter",
    initialState: { counterVal: 0 },
    reducer: {
      increment: (state, action) => {},
      decrement: (state, action) => {},
      add: (state, action) => {},
      substract: (state, action) => {},
    },
  }
);

const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    //return{counter: store.counter + 1, privacy: store.privacy};
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { ...store, counter: store.counter + Number(action.payload.num) }; //to convert string value to number
  } else if (action.type === "SUBSTRACT") {
    return { ...store, counter: store.counter - Number(action.payload.num) }; //to convert string value to number
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy }; //...store to persist the value of counter even if the counter is private
  }

  return store;
};

const counterStore = configureStore({     // Map/combine the different reducer function
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default counterStore;
