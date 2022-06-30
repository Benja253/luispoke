import { configureStore } from "@reduxjs/toolkit";
import nameUser from "./slices/nameUser.slice";
import setPokemonSlice from './slices/pokemos.slice'
import typeSelected from './slices/typeQuery.slice'

export default configureStore ({
    reducer:{
        nameUser,
        setPokemonSlice,
        typeSelected
    }
})