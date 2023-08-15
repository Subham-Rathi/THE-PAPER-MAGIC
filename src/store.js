// store.js
import { configureStore } from "@reduxjs/toolkit";
import rootRed from "./redux/reducers/main";

const store = configureStore({
  reducer: rootRed, // Pass your reducer directly to the 'reducer' option
  // Add any other configurations or middleware here if needed.
});

export default store;
