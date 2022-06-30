import { createSlice } from '@reduxjs/toolkit';

export const nameUserSlice = createSlice({
    name: 'nameUser',
    initialState: '',
    reducers: {
        setNameUser: (state, action) => action.payload
    }
})

export const { setNameUser } = nameUserSlice.actions

export default nameUserSlice.reducer;
