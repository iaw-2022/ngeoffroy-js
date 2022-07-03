import React, { useState, useEffect } from "react";
import { loadEquipos } from "../../utils/loaders";
import EquipoCard from "../cards/EquipoCard";
import { Row, Button } from "react-bootstrap";

export default function Equipos() {
  const [equipos, setEquipos] = useState([]);
  const [inputBuscar, setInputBuscar] = useState("");
  const [equiposFiltrados, setEquiposFiltrados] = useState([]);

  useEffect(() => {
    loadEquipos(setEquipos);
  }, [equiposFiltrados]);

  const handleFiltrarEquipos = (e) => {
    setInputBuscar(e.target.value);
    let dataEquipos = equipos.filter(
      (equipo) =>
        equipo.nombre === inputBuscar ||
        equipo.capitan === inputBuscar ||
        equipo.nombre_estadio === inputBuscar
    );
    setEquiposFiltrados(dataEquipos);
  };

  return (
    <div className="Component__content">
      <input
        type="text"
        className="Buscar-input"
        placeholder="Buscar equipos."
        aria-label=""
        aria-describedby="basic-addon1"
        onChange={(e) => handleFiltrarEquipos(e)}
      ></input>
      <Button variant="outline-info" onClick={handleFiltrarEquipos}>
        {" "}
        Buscar{" "}
      </Button>
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
