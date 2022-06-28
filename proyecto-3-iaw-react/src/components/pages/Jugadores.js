import React, { useState, useEffect } from "react";
import { loadJugadores } from "../../utils/loaders";
import Header from "../sections/header";

export default function Partidos() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    loadJugadores(setJugadores);
  }, []);

  return (
    <div>
      <Header />
      <ul>
        {jugadores.map((jugador, key) => (
          <li> {jugador.nombre}</li>
        ))}
      </ul>
    </div>
  );
}