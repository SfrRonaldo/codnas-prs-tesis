import React, { Fragment } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const ItemEstimate1 = ({ infoGeneral }) => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h1 className="cards__item__title">{infoGeneral.pdbChain}</h1>
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
                    <TableCell>infoGeneral</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Título:
                    </TableCell>
                    <TableCell>title</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Organismo
                    </TableCell>
                    <TableCell>organism</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Región repetida:
                    </TableCell>
                    <TableCell>region_repetida</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      Clasificación:
                    </TableCell>
                    <TableCell>rank</TableCell>
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

export default ItemEstimate1;
