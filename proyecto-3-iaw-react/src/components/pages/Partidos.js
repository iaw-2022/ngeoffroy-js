import React, { useState, useEffect } from "react";
import { loadPartidos } from "../../utils/loaders";
import { Row, Button } from "react-bootstrap";
import PartidoCard from "../cards/PartidoCard";

export default function Localidades() {
  const [partidos, setPartidos] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [partidosFiltrados, setPartidosFiltrados] = useState([]);

  useEffect(() => {
    loadPartidos(setPartidos);
  }, [partidosFiltrados]);

  const handleFiltrarPartidos = (e) => {
    setInputBuscar(e.target.value);
    let dataPartidos = partidos.filter(
      (partido) =>
        partido.equipo_local === inputBuscar ||
        partido.equipo_visitante === inputBuscar ||
        partido.localidad_nombre === inputBuscar ||
        partido.torneo_nombre === inputBuscar ||
        partido.estado === inputBuscar
    );
    setPartidosFiltrados(dataPartidos);
  };

  return (
    <div class="Component__content">
      <input
        type="text"
        className="Buscar-input"
        placeholder="Buscar torneos."
        aria-label=""
        aria-describedby="basic-addon1"
        onChange={(e) => handleFiltrarPartidos(e)}
      ></input>
      <Button variant="outline-info" onClick={handleFiltrarPartidos}>
        {" "}
        Buscar{" "}
      </Button>
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