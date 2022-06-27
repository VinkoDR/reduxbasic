import { createSlice } from "@reduxjs/toolkit";

export  const userSlice = createSlice({
    name:"user",
    initialState: {
        name: "vinko",
        email:"vinko.d.roditi@gmail.com"
    },
    reducers: {
        update: (state,action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        remove: (state)=> {
            state.name = "";
            state.email = "";
        }

    }
})
// export les actions pour utiliser dans update.js
export const { update,remove } = userSlice.actions
// export  reducers pour utiliser dans store
export default userSlice.reducer