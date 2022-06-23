import React, { useState, useEffect } from "react";
import { loadJugadores } from "../../utils/loaders";

export default function Partidos() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    loadJugadores(setJugadores);
  }, []);

  return (
    <div>
      <ul>
        {jugadores.map((jugador) => (
          <li> {jugador.nombre}</li>
        ))}
      </ul>
    </div>
  );
}