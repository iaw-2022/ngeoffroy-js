import React, { useState, useEffect } from "react";
import { loadJugadores } from "../../utils/loaders";
import { Row } from "react-bootstrap";
import JugadorCard from "../cards/JugadorCard";

export default function Partidos() {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    loadJugadores(setJugadores);
  }, []);

  return (
    <div class="Component__content">
      <Row>
        {jugadores.map((jugador) => (
          <JugadorCard
            nombre={jugador.nombre}
            apellido={jugador.apellido}
            dni={jugador.dni}
            sexo={jugador.sexo}
            puesto={jugador.puesto}
            fecha_nac={jugador.fecha_nac}
          />
        ))}
      </Row>
    </div>
  );
}
