import React, { useState, useEffect } from "react";
import { loadEquipos } from "../../utils/loaders";
import EquipoCard from "../cards/EquipoCard";
import { Row } from "react-bootstrap";

export default function Equipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    loadEquipos(setEquipos);
  }, []);

  return (
    <div class="Component__content">
      <Row>
        {equipos.map((equipo) => (
          <EquipoCard
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
