import React, { Fragment } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const ItemEsimate1 = ({ infoGeneral }) => {
  const {
    pdb_id,
    nombre_proteina,
    titulo,
    organismo,
    region_repetida,
    clasificacion,
  } = infoGeneral;

  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h1 className="cards__item__title">{pdb_id}</h1>
            <br />
            <h2 className="cards__item__subtitle">Información General</h2>
            <br />
            <TableContainer component={Paper}>
              <Table className="table__detail" aria-label="simple data">
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Nombre de la proteína repetida:
                    </TableCell>
                    <TableCell>{nombre_proteina}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Título:
                    </TableCell>
                    <TableCell>{titulo}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Organismo
                    </TableCell>
                    <TableCell>{organismo}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Región repetida:
                    </TableCell>
                    <TableCell>{region_repetida}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Clasificación:
                    </TableCell>
                    <TableCell>{clasificacion}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default ItemEsimate1;
