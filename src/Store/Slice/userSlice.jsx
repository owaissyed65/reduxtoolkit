import { createSlice } from "@reduxjs/toolkit";
import { deleteUser } from '../Actions/index'
const userSlice = createSlice({
    name: 'userSlice',
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            console.log("From Reducers")
            console.log(action.payload)
        },
        removeUser(state, action) {
            console.log(action.payload)
            state.splice(action.payload, 1)
        },
    },
    extraReducers(builder) {
        builder.addCase(deleteUser, () => {
            return []
        })
    }
})
export default userSlice;
export const { addUser, removeUser } = userSlice.actions;