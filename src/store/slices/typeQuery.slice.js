import { createSlice } from '@reduxjs/toolkit';

export const typeQuery = createSlice({
    name: 'typeSelected',
    initialState: 'ALL POKEMON',
    reducers: {
        SetTypeSelected: (state, action) => action.payload 
    }
})

export const { SetTypeSelected } = typeQuery.actions;

export default typeQuery.reducer;
