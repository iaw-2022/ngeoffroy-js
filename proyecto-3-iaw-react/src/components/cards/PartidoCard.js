import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ListGroup, Row, Col } from "react-bootstrap";
import versus from "../../assets/versus2.jpg";
import matchday from "../../assets/matchday.png";
import matchday2 from "../../assets/matchday2.png";

export default function LocalidadCard({
  equipo_local,
  equipo_visitante,
  resultado_local,
  resultado_visita,
  localidad_nombre,
  torneo_nombre,
  estado,
}) {
  const [borderColorEstado, setBorderColorEstado] = useState("");
  useEffect(() => {
    if (estado === "FINALIZADO") setBorderColorEstado("#28a745");
    else {
      if (estado === "SUSPENDIDO") setBorderColorEstado("#dc3545");
      else setBorderColorEstado("#17a2b8");
    }
  }, []);

  return (
    <Card
      className="Partido__content"
      style={{
        width: "18rem",
        borderRadius: "3em",
        borderWidth: "1em",
        borderColor: borderColorEstado,
      }}
    >
      <Card.Body>
        <div className="Partido__row">
          <Card.Img className="Partido__matchday-icon" src={matchday} />
          <Card.Img className="Partido__matchday-icon" src={matchday2} />
        </div>
        <Card.Title
          className="Partido__titulo"
          style={{
            fontWeight: "bold",
            color: borderColorEstado,
            textDecoration: "underline",
          }}
        >
          {estado}
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row className="Partido__content-row">
              <Col className="Partido__equipos-style">{equipo_local}</Col>
              <Col className="Partido__resultado-style">-</Col>
              <Col className="Partido__equipos-style">{equipo_visitante}</Col>
            </Row>
            <br />
            <Row className="Partido__content-row">
              <Col className="Partido__resultado-style">{resultado_local}</Col>
              <Col className="Partido__resultado-style">-</Col>
              <Col className="Partido__resultado-style">{resultado_visita}</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            La localidad elegida para el partido fué {localidad_nombre}
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            Partido correspondiente al torneo {torneo_nombre}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
