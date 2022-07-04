import axios from "axios";

import {
  equiposURL,
  jugadoresURL,
  partidosURL,
  torneosURL,
  localidadesURL,
} from "./url";

export async function loadEquipos(setEquipos) {
  const response = await axios.get(equiposURL);
  setEquipos(response.data);
}

export async function loadJugadores(setJugadores) {
  const response = await axios.get(jugadoresURL);
  setJugadores(response.data);
}

export async function loadPartidos(setPartidos) {
  const response = await axios.get(partidosURL);
  setPartidos(response.data);
}

export async function loadTorneos(setTorneos) {
  const response = await axios.get(torneosURL);
  setTorneos(response.data);
}

export async function loadLocalidades(setLocalidades) {
  const response = await axios.get(localidadesURL);
  setLocalidades(response.data);
}
