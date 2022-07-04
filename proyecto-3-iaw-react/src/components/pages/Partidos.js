import React, { useState, useEffect } from "react";
import { loadPartidos } from "../../utils/loaders";
import { Row, Button } from "react-bootstrap";
import PartidoCard from "../cards/PartidoCard";

export default function Localidades() {
  const [partidos, setPartidos] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [partidosFiltrados, setPartidosFiltrados] = useState([]);
  const [botonRestablecer, setBotonRestablecer] = useState(false);

  useEffect(() => {
    loadPartidos(setPartidos);
  }, [partidosFiltrados]);

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
    setPartidosFiltrados([]);
  };

  const handleFiltrarPartidos = () => {
    const dataTransform = transformInput(inputBuscar);
    let dataPartidos = partidos.filter(
      (partido) =>
        partido.equipo_local === dataTransform ||
        partido.equipo_visitante === dataTransform ||
        partido.localidad_nombre === dataTransform ||
        partido.torneo_nombre === dataTransform ||
        partido.estado === inputBuscar.toUpperCase()
    );
    setPartidosFiltrados(dataPartidos);
    setBotonRestablecer(true);
  };

  return (
    <div class="Component__content">
      <div className="Buscar__div">
        <input
          type="text"
          className="Buscar-input"
          placeholder="Buscar torneos."
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => setInputBuscar(e.target.value)}
        ></input>
        {!botonRestablecer && (
          <Button variant="btn btn-info" onClick={handleFiltrarPartidos}>
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
        {partidosFiltrados.length > 0 &&
          partidosFiltrados.map((partido) => (
            <PartidoCard
              equipo_local={partido.equipo_local}
              equipo_visitante={partido.equipo_visitante}
              resultado_local={partido.resultado_local}
              resultado_visita={partido.resultado_visita}
              localidad_nombre={partido.localidad_nombre}
              torneo_nombre={partido.torneo_nombre}
              estado={partido.estado}
            />
          ))}

        {partidosFiltrados.length === 0 &&
          partidos.map((partido) => (
            <PartidoCard
              equipo_local={partido.equipo_local}
              equipo_visitante={partido.equipo_visitante}
              resultado_local={partido.resultado_local}
              resultado_visita={partido.resultado_visita}
              localidad_nombre={partido.localidad_nombre}
              torneo_nombre={partido.torneo_nombre}
              estado={partido.estado}
            />
          ))}
      </Row>
    </div>
  );
}
