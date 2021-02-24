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
            {infoEstructural.map((item) => (
              <div
                key={item.region}
                style={{ color: "#252e48", marginBottom: "2vh" }}
              >
                <h3 style={{ marginBottom: "2vh" }}>Región {item.region}</h3>
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
                        <TableCell>{item.num_conformaciones}</TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ fontWeight: "bold" }}
                        >
                          RMSD Mínimo:
                        </TableCell>
                        <TableCell>{item.rmsd_min}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ fontWeight: "bold" }}
                        >
                          RMSD Máximo:
                        </TableCell>
                        <TableCell>{item.rmsd_max}</TableCell>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ fontWeight: "bold" }}
                        >
                          RMSD Promedio:
                        </TableCell>
                        <TableCell>{item.rmsd_avg}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            ))}
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default ItemDetail2;
