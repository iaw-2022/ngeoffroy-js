import { useState, useEffect } from "react";
import * as React from "react";
import { TextField, Typography, Button, Modal, Box } from "@mui/material";
import "../../utils/css/styles.css";

export default function EditarEquipo({ open, setOpen, equipo }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  const styleButtons = {
    marginLeft: "1em",
    marginTop: "2em",
  };

  const [nuevoEquipo, setNuevoEquipo] = useState({
    nombre: equipo.nombre,
    logo: equipo.logo,
    nombre_estadio: equipo.nombre_estadio,
    capitan: equipo.capitan,
  });
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <center>
          <Box sx={style}>
            <Typography>
              {" "}
              <h2>Editar Curso</h2>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="filled-basic"
                  label="Nombre del estadio"
                  name="nombre_estadio"
                  value={nuevoEquipo.nombre_estadio}
                  variant="filled"
                  type="text"
                />

                <TextField
                  id="filled-basic"
                  label="Nombre del capitán del equipo"
                  name="nombre_capitan"
                  value={nuevoEquipo.capitan}
                  variant="filled"
                  type="text"
                />
              </Box>
            </Typography>
            <center>
              <Button
                sx={styleButtons}
                variant="contained"
                onClick={handleClose}
                color="error"
              >
                Regresar
              </Button>

              <Button sx={styleButtons} variant="contained" color="success">
                Guardar cambios
              </Button>
            </center>
          </Box>
        </center>
      </Modal>
    </div>
  );
}
