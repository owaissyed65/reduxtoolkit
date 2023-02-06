import { createSlice } from "@reduxjs/toolkit";

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
        deleteUser(state, action) {
            return []
        }
    }
})
export default userSlice;
export const { addUser, removeUser, deleteUser } = userSlice.actions;