import React from 'react'
import { useForm } from 'react-hook-form'
import { setNameUser } from '../../store/slices/nameUser.slice'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import pokedeximg from '../../assets/pokedex.png'

const Home = () => {

  const {handleSubmit, register} = useForm()

  const dispatch = useDispatch()

  const navigate = useNavigate()
  const submit = data => {
    dispatch(setNameUser(data.nameUser))
    navigate('/pokedex')
  }

  return (
    <section className='home'>
        <aside className='home-info'>
          <img className='home-img' src={pokedeximg} alt="pokedex" />
          <h2 className='home-title'>¡Hola Entrenador!</h2>
          <p className='home-p'>Para poder comenzar, dame tu nombre</p>
          <form className='home-form' onSubmit={handleSubmit(submit)}>
              <input className='home-input' type="text" placeholder='Tu nombre' {...register('nameUser')} />
              <button className='btn'>Comenzar</button>
          </form>
        </aside>
        {/* <footer className='footer'>
            <div className='red'></div>
            <div className="black"></div>
            <div className="circle"></div>
        </footer> */}
    </section>
  )
}

export default Home