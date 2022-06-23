import React, { useState, useEffect } from "react";
import { loadPartidos } from "../../utils/loaders";

export default function Localidades() {
  const [partidos, setPartidos] = useState([]);

  useEffect(() => {
    loadPartidos(setPartidos);
  }, []);

  return (
    <div>
      <ul>
        {partidos.map((partido) => (
          <li> {partido.equipo_local}</li>
        ))}
      </ul>
    </div>
  );
}