import React, { useState, useEffect } from "react";
import { loadJugadores } from "../../utils/loaders";
import { Row, Button } from "react-bootstrap";
import JugadorCard from "../cards/JugadorCard";

export default function Jugadores() {
  const [jugadores, setJugadores] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [jugadoresFiltrados, setJugadoresFiltrados] = useState([]);
  const [botonRestablecer, setBotonRestablecer] = useState(false);

  useEffect(() => {
    loadJugadores(setJugadores);
  }, [jugadoresFiltrados]);

  const transformInput = (input) => {
    const splitStr = input.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  };

  const handleRestablecerFiltro = () => {
    setBotonRestablecer(false);
    setJugadoresFiltrados([]);
  };

  const handleFiltrarJugadores = () => {
    const dataTransform = transformInput(inputBuscar);
    const dniInput = parseInt(inputBuscar);
    let dataJugadores = jugadores.filter(
      (jugador) =>
        jugador.nombre === dataTransform ||
        jugador.apellido === dataTransform ||
        jugador.dni === dniInput ||
        jugador.sexo === inputBuscar.toLowerCase() ||
        jugador.puesto === dataTransform ||
        jugador.fecha_nac === inputBuscar ||
        jugador.equipo_nombre === dataTransform
    );
    setJugadoresFiltrados(dataJugadores);
    setBotonRestablecer(true);
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
          onChange={(e) => setInputBuscar(e.target.value)}
        ></input>
        {!botonRestablecer && (
          <Button variant="btn btn-info" onClick={handleFiltrarJugadores}>
            {" "}
            Buscar{" "}
          </Button>
        )}
        {botonRestablecer && (
          <Button
            variant="btn btn-success"
            onClick={handleRestablecerFiltro}
            style={{ marginLeft: "1em" }}
          >
            {" "}
            Restablecer filtros{" "}
          </Button>
        )}
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
              equipo_nombre={jugador.equipo_nombre}
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
              equipo_nombre={jugador.equipo_nombre}
            />
          ))}
      </Row>
    </div>
  );
}
