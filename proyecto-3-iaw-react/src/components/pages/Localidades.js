import React, { useState, useEffect } from "react";
import { loadLocalidades } from "../../utils/loaders";

export default function Localidades() {
  const [localidades, setLocalidades] = useState([]);

  useEffect(() => {
    loadLocalidades(setLocalidades);
  }, []);

  return (
    <div>
      <ul>
        {localidades.map((localidad) => (
          <li> {localidad.nombre}</li>
        ))}
      </ul>
    </div>
  );
}