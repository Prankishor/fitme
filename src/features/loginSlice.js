import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    user: localStorage.getItem("user") ?
        localStorage.getItem("user") :
        false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        logUserIn(state, action) {
            state.user = true;
            toast.success(`Logged in Successfully`,
                {
                    position: "bottom-left",
                })
            localStorage.setItem("user", true)
        },

        logUserOut(state, action) {
            state.user = false;
            toast.error(`Logged out successfully`,
                {
                    position: "bottom-left",
                })
            localStorage.setItem("user", true)
        },
    },
})

export const { logUserIn, logUserOut } = loginSlice.actions

export default loginSlice.reducer