import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import ball from "../../assets/ball.png";
import { FaUserFriends } from "react-icons/fa";

export default function navbar() {
  return (
    <>
      <Navbar className="Header-style" collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/principal"
            className="navbar__brand"
          ></Navbar.Brand>
          <Navbar.Toggle
            className="navbar__toggle"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse className="navbar__collapse">
            <Nav.Link as={Link} to="/principal" className="navbar__link">
              <img
                src={ball}
                className="Logo-header"
                alt="logo"
                width={80}
                height={80}
              />
            </Nav.Link>
            <Nav id="navbar__nav">
              <Nav.Link as={Link} to="/equipos" className="navbar__link">
                <div className="navbar__nav_text" style={{ fontSize: 22 }}>
                  Equipos
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/jugadores" className="navbar__link">
                <div className="navbar__nav_text" style={{ fontSize: 22 }}>
                  Jugadores
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/partidos" className="navbar__link">
                <div className="navbar__nav_text" style={{ fontSize: 22 }}>
                  Partidos
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/torneos" className="navbar__link">
                <div className="navbar__nav_text" style={{ fontSize: 22 }}>
                  Torneos
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="/localidades" className="navbar__link">
                <div className="navbar__nav_text" style={{ fontSize: 22 }}>
                  Localidades
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
}
