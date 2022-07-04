import React, { useState, useEffect } from "react";
import { loadEquipos } from "../../utils/loaders";
import EquipoCard from "../cards/EquipoCard";
import { Row, Button } from "react-bootstrap";

export default function Equipos() {
  const [equipos, setEquipos] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [equiposFiltrados, setEquiposFiltrados] = useState([]);
  const [botonRestablecer, setBotonRestablecer] = useState(false);

  useEffect(() => {
    loadEquipos(setEquipos);
  }, [equiposFiltrados]);

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
    setEquiposFiltrados([]);
  };

  const handleFiltrarEquipos = () => {
    const dataTransform = transformInput(inputBuscar);
    let dataEquipos = equipos.filter(
      (equipo) =>
        equipo.nombre === dataTransform ||
        equipo.capitan === dataTransform ||
        equipo.nombre_estadio === dataTransform
    );
    setEquiposFiltrados(dataEquipos);
    setBotonRestablecer(true);
  };

  return (
    <div className="Component__content">
      <div className="Buscar__div">
        <input
          type="text"
          className="Buscar-input"
          placeholder="Buscar equipos."
          aria-label=""
          aria-describedby="basic-addon1"
          onChange={(e) => setInputBuscar(e.target.value)}
        ></input>
        {!botonRestablecer && (
          <Button variant="btn btn-info" onClick={handleFiltrarEquipos}>
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
        {equiposFiltrados.length > 0 &&
          equiposFiltrados.map((equipo) => (
            <EquipoCard
              key={equipo.id}
              nombre={equipo.nombre}
              logo={equipo.logo}
              nombre_estadio={equipo.nombre_estadio}
              capitan={equipo.capitan}
            />
          ))}

        {equiposFiltrados.length === 0 &&
          equipos.map((equipo) => (
            <EquipoCard
              key={equipo.id}
              nombre={equipo.nombre}
              logo={equipo.logo}
              nombre_estadio={equipo.nombre_estadio}
              capitan={equipo.capitan}
            />
          ))}
      </Row>
    </div>
  );
}
