
import { configureStore } from "@reduxjs/toolkit";
import ImgReducer from "./ImgSlice"

const store =configureStore({
reducer:{
  Imgs:ImgReducer
}
});
export default store;