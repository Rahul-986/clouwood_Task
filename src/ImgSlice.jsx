import { createSlice, current } from "@reduxjs/toolkit";

const initialState={
  currentIndex:0,
  Imgs:[
    "https://images.unsplash.com/photo-1720968905315-d284e37d46f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720924724655-392c822812a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8SnBnNktpZGwtSGt8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1720722790580-869fcb2b7341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1720679952780-635d5f380595?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1720637203193-9edfe61aef50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQzfEpwZzZLaWRsLUhrfHxlbnwwfHx8fHw%3D"
  ],
};

const ImgSlice=createSlice({
  name:"Imgs",
  initialState,
  reducers:{
    nextImage:(state)=>{
      state.currentIndex=(state.currentIndex+1) % state.Imgs.length;

    },
    prevImage:(state)=>{
      state.currentIndex=(state.currentIndex-1) % state.Imgs.length;
    }
  }
})

export const {nextImage,prevImage}=ImgSlice.actions;
export default ImgSlice.reducer;