import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState: '',
    reducers: {
        setPokemonSlice: (state, action) => action.payload
    }
})

export const { setPokemonSlice } = pokemonSlice.actions;

const getPokemons = () => (dispatch) => {
   return axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
        .then(res =>setpoke(res.data))
}

export default pokemonSlice.reducer;
