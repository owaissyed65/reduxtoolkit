import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "./Slice/userSlice";

const Store = configureStore({
    reducer: {
        userSlice: userSlice.reducer
    }
})
export default Store