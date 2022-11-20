
import { createSlice } from "@reduxjs/toolkit";
 const userSlice = createSlice({
    name:"user",
    initialState:{
      
        id:[]
    },
    reducers:{
        reset: (state,payload)=>{
            state.id=payload.payload
        },
        images:(state,payload)=>{
            state.id =[...state.id,payload.payload]
        }
    }

})
export default userSlice.reducer;
export const {reset,images} = userSlice.actions;
