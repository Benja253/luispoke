import './App.css'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Pokedex from './components/Pokedex'
import PokemonId from './components/PokemonId'
import pokedeximg from './assets/pokedex.png'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {


  return (
    <div className="App">
        <aside className='footer-app'>
            <div className='red'>
            <img className='home-img' src={pokedeximg} alt="poke" />
            </div>
            <div className="black"></div>
            {/* <div className="circle"></div> */}
        </aside>
    
        <Routes >
          <Route path='/' element={ <Home /> } />
          <Route element={<ProtectedRoutes />}>
            <Route path='pokedex' element={<Pokedex />} />
            <Route path='pokedex/:id' element={<PokemonId />} />
          </Route>
        </Routes>
    
    </div>
  )
}

export default App
