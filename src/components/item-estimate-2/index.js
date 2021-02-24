import React, { Fragment } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";

const ItemEstimate2 = ({ infoEstructural }) => {
  const { num_conformaciones, rmsd_min, rmsd_max, rmsd_avg } = infoEstructural;
  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">Información Estructural</h2>
            <br />
            <TableContainer component={Paper}>
              <Table className="table__detail" arial-label="simple data">
                <TableBody>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      #Conformaciones:
                    </TableCell>
                    <TableCell>{num_conformaciones}</TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      RMSD Mínimo:
                    </TableCell>
                    <TableCell>{rmsd_min}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      RMSD Máximo:
                    </TableCell>
                    <TableCell>{rmsd_max}</TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      style={{ fontWeight: "bold" }}
                    >
                      RMSD Promedio:
                    </TableCell>
                    <TableCell>{rmsd_avg}</TableCell>
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

export default ItemEstimate2;
