import React, { useState, useEffect } from "react";
import { loadTorneos } from "../../utils/loaders";

export default function Localidades() {
  const [torneos, setTorneos] = useState([]);

  useEffect(() => {
    loadTorneos(setTorneos);
  }, []);

  return (
    <div>
      <ul>
        {torneos.map((torneo) => (
          <li> {torneo.nombre}</li>
        ))}
      </ul>
    </div>
  );
}