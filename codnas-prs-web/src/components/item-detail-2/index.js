import React, { Fragment } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const ItemDetail2 = ({ infoEstructural }) => {
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">Información Estructural</h2>
            <br />
            <TableContainer component={Paper}>
              <Table className="table-detail" arial-label="simple data">
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      #Conformaciones:
                    </TableCell>
                    <TableCell>{infoEstructural.pdbChain}</TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      RMSD Mínimo:
                    </TableCell>
                    <TableCell>{infoEstructural.pdbChain}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      RMSD Máximo:
                    </TableCell>
                    <TableCell>{infoEstructural.pdbChain}</TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      RMSD Promedio:
                    </TableCell>
                    <TableCell>{infoEstructural.pdbChain}</TableCell>
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

export default ItemDetail2;
