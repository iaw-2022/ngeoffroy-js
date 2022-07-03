import React, { useState, useEffect } from "react";
import { loadPartidos } from "../../utils/loaders";
import { Row } from "react-bootstrap";
import PartidoCard from "../cards/PartidoCard";

export default function Localidades() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    loadPartidos(setPartidos);
  }, []);

  return (
    <div class="Component__content">
      <Row>
        {partidos.map((partido) => (
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
