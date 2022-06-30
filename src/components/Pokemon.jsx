import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Pokemon = ({url}) => {

    const [pokemon, setPokemon] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    },[])

    const navigate = useNavigate()
    const clinkPokemon = () => {
        navigate(`/pokedex/${pokemon.id}`)
    }

  return (
    <section onClick={clinkPokemon} className='pokemon'>
        <img className='pokemon-img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="pokemon" />
        <h2>{pokemon?.name.toUpperCase()} </h2>
        <p>{`${pokemon?.types[0].type.name} /`} </p>
    </section>
  )
}

export default Pokemon