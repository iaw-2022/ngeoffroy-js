import React from 'react';
import ReactDOM from 'react-dom/client';
import Principal from './components/pages/Principal';
import Equipos from './components/pages/Equipos';
import Partidos from './components/pages/Partidos';
import Torneos from './components/pages/Torneos';
import Jugadores from './components/pages/Jugadores';
import Localidades from './components/pages/Localidades';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />}/>
        <Route path="equipos" element={<Equipos />}/>
        <Route path="jugadores" element={<Jugadores />}/>
        <Route path="partidos" element={<Partidos />}/>
        <Route path="torneos" element={<Torneos />}/>
        <Route path="localidades" element={<Localidades />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
