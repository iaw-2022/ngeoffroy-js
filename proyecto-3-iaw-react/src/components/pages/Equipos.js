import React, { useState, useEffect } from "react";
import { loadEquipos } from "../../utils/loaders";
import EquipoCard from "../cards/EquipoCard";
import Header from "../sections/header";
import { Button } from "react-bootstrap";

export default function Equipos() {
  const [equipos, setEquipos] = useState([]);

  useEffect(() => {
    loadEquipos(setEquipos);
  }, []);

  return (
    <div>
      <Header />
      <Button> Registrar nuevo equipo </Button>
      <ul>
        {equipos.map((equipo) => (
          <li>
            {" "}
            <EquipoCard
              nombre={equipo.nombre}
              logo={equipo.logo}
              nombre_estadio={equipo.nombre_estadio}
              capitan={equipo.capitan}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
