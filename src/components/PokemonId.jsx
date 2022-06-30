import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonId = () => {
  const navigate = useNavigate();

  const [PokemonId, setPokemonId] = useState()

  const {id} = useParams()

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setPokemonId(res.data))
      .catch(err => console.log(err))
  })

  const toReturn = () => {
    navigate("/pokedex");
  };

  return (
    <section className="poke-id">
      <aside className="poke-head">
        <div className="gradient">
          <img src="" alt="" />
        </div>
        <h1 className="poke-id-text">#id</h1>
        <h2 className="poke-id-text"> Nombre</h2>
        <div className="poke-info-id">
          <p>peso </p>
          <p>altura</p>
          <span>40</span>
          <span>34</span>
        </div>
        <div className="poke-info-id-2">
          <p>tipo</p>
          <p>Habilidades</p>
          <p>Info</p>
          <p>Info</p>
          <p>Info</p>
          <p>Info</p>
        </div>
        <div className="stats">
          <h2>Stats</h2>
          <div className="head">
            <p>HP:</p>
            <p>30/150</p>
          </div>
            <div className="color-info"></div>
          <div className="head">
          <p>Ataque:</p>
          <p>45/150</p>
          </div>
            <div className="color-info"></div>
          <div className="head">
          <p>Defensa</p>
          <p>37/150</p>
          </div>
            <div className="color-info"></div>
          <div className="head">
          <p>Velocidad</p>
          <p>49/150</p>
          </div>
            <div className="color-info"></div>
        </div>
      </aside>
      <aside className="movements">
        <h2>Movements</h2>
        <div className="info">
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Info</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
          <button className="btn-info">Información</button>
        </div>

      </aside>
      <button className="btn" onClick={toReturn}>
        To Return
      </button>
    </section>
  );
};

export default PokemonId;
