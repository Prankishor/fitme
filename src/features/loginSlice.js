import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const initialState = {
    user: false,
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
        },

        logUserOut(state, action) {
            state.user = false;
            toast.error(`Logged out successfully`,
                {
                    position: "bottom-left",
                })
        },
    },
})

export const { logUserIn, logUserOut } = loginSlice.actions

export default loginSlice.reducer