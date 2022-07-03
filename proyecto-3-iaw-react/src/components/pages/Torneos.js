import React, { useState, useEffect } from "react";
import { loadTorneos } from "../../utils/loaders";
import { Row } from "react-bootstrap";
import TorneoCard from "../cards/TorneoCard";

export default function Localidades() {
  const [torneos, setTorneos] = useState([]);

  useEffect(() => {
    loadTorneos(setTorneos);
  }, []);

  return (
    <div class="Component__content">
      <Row>
        {torneos.map((torneo) => (
          <TorneoCard
            nombre={torneo.nombre}
            logo={torneo.logo}
            fecha_ini={torneo.fecha_ini}
            fecha_fin={torneo.fecha_fin}
          />
        ))}
      </Row>
    </div>
  );
}
