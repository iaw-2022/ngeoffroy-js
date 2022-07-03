import React, { useState, useEffect } from "react";
import { loadJugadores } from "../../utils/loaders";
import { Row, Button } from "react-bootstrap";
import JugadorCard from "../cards/JugadorCard";

export default function Partidos() {
  const [jugadores, setJugadores] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [jugadoresFiltrados, setJugadoresFiltrados] = useState([]);

  useEffect(() => {
    loadJugadores(setJugadores);
  }, [jugadoresFiltrados]);

  const handleFiltrarJugadores = (e) => {
    setInputBuscar(e.target.value);
    let dataJugadores = jugadores.filter(
      (jugador) =>
        jugador.nombre === inputBuscar ||
        jugador.apellido === inputBuscar ||
        jugador.dni === inputBuscar ||
        jugador.sexo === inputBuscar ||
        jugador.puesto === inputBuscar ||
        jugador.fecha_nac === inputBuscar ||
        jugador.equipo_nombre === inputBuscar
    );
    setJugadoresFiltrados(dataJugadores);
  };

  return (
    <div class="Component__content">
      <input
        type="text"
        className="Buscar-input"
        placeholder="Buscar jugadores."
        aria-label=""
        aria-describedby="basic-addon1"
        onChange={(e) => handleFiltrarJugadores(e)}
      ></input>
      <Button variant="outline-info" onClick={handleFiltrarJugadores}>
        {" "}
        Buscar{" "}
      </Button>
      <Row>
        {jugadoresFiltrados.length > 0 &&
          jugadoresFiltrados.map((jugador) => (
            <JugadorCard
              key={jugador.id}
              nombre={jugador.nombre}
              apellido={jugador.apellido}
              dni={jugador.dni}
              sexo={jugador.sexo}
              puesto={jugador.puesto}
              fecha_nac={jugador.fecha_nac}
            />
          ))}

        {jugadoresFiltrados.length === 0 &&
          jugadores.map((jugador) => (
            <JugadorCard
              key={jugador.id}
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
