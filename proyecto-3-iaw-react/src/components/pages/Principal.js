import silueta from "../../assets/silueta.png";
import facebook from "../../assets/facebook.png";

export default function Principal() {
  return (
    <div>
      <br />
      <h2 className="Principal__titulo"> Asociación Bahiense de Softball</h2>
      <div className="Principal__contenedor">
        <div style={{ marginRight: "3em" }}>
          <p className="Principal__texto">
            Somos la Asociación Bahiense de Softball, ente que se encarga de
            organizar todos los eventos deportivos asociados al softball dentro
            de nuestra ciudad. Nuestra principal motivación es la de poder
            organizar los distintos partidos que se jueguen en nuestras canchas,
            y de esta forma mantener a todos los equipos actualizados con
            información real.
            <br />
            <br />
            Para un contacto más directo, los invitamos a que nos escriban a
            nuestra página de facebook, haciendo clic en el botón que se
            encuentra debajo.
          </p>
          <div className="Principal__contacto">
            <a
              href="https://www.facebook.com/ABSoftbol"
              class="btn btn-primary"
              style={{
                color: "white",
                fontWeight: "bold",
                borderRadius: "1em",
                fontSize: 17,
              }}
            >
              <img src={facebook} alt="icon" style={{ marginRight: 3 }} />
              Contactanos
            </a>
          </div>
        </div>
        <div>
          <img src={silueta} alt="logo" />
        </div>
      </div>
    </div>
  );
}
