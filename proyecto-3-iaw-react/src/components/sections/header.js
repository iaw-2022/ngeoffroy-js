import "../../utils/css/styles.css";
import ball from "../../assets/ball.png"

export default function Header() {
  return (
    <div className="Header-icons">
        <div>
          <a href="#"> <img src={ball} alt="logo" width={100} height={100}/></a>
        </div>
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
