import React, { useState, useEffect } from "react";
import { loadLocalidades } from "../../utils/loaders";
import LocalidadCard from "../cards/LocalidadCard";
import { Row } from "react-bootstrap";

export default function Localidades() {
  const [localidades, setLocalidades] = useState([]);

  useEffect(() => {
    loadLocalidades(setLocalidades);
  }, []);

  return (
    <div class="Component__content">
      <Row>
        {localidades.map((localidad) => (
          <LocalidadCard
            nombre={localidad.nombre}
            cod_postal={localidad.cod_postal}
            cant_habitantes={localidad.cant_habitantes}
          />
        ))}
      </Row>
    </div>
  );
}