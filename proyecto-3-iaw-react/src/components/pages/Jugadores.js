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

  const transformInput = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const handleFiltrarJugadores = (e) => {
    setInputBuscar(transformInput(e.target.value));
    const sexoInput = e.target.value;
    const numberInput = parseInt(e.target.value,10) 
    let dataJugadores = jugadores.filter(
      (jugador) =>
        jugador.nombre === inputBuscar ||
        jugador.apellido === inputBuscar ||
        jugador.dni === numberInput ||
        jugador.sexo === sexoInput ||
        jugador.puesto === inputBuscar ||
        jugador.fecha_nac === inputBuscar ||
        jugador.equipo_nombre === inputBuscar
    );
    setJugadoresFiltrados(dataJugadores);
  };

  return (
    <div class="Component__content">
      <div className="Buscar__div">
        <input
          type="text"
          className="Buscar-input"
          placeholder="Buscar jugadores."
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => handleFiltrarJugadores(e)}
        ></input>
        <Button variant="btn btn-info" onClick={handleFiltrarJugadores}>
          {" "}
          Buscar{" "}
        </Button>
      </div>
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
