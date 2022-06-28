import "../../utils/css/styles.css";
import ball from "../../assets/abs-logo.jpg";

export default function Header() {
  return (
    <div className="Header-style">
      <a href="#">
        {" "}
        <img
          src={ball}
          className="Logo-header"
          alt="logo"
          width={80}
          height={80}
        />
      </a>

      <div className="Icons">
        <ul>
          <li>
            <a href="equipos">Equipos</a>
          </li>
          <li>
            <a href="jugadores">Jugadores</a>
          </li>
          <li>
            <a href="partidos">Partidos</a>
          </li>
          <li>
            <a href="torneos">Torneos</a>
          </li>
          <li>
            <a href="localidades">Localidades</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
