import React, { Fragment, useEffect, useState } from "react";
import {
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  useTheme,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import LastPageIcon from "@material-ui/icons/LastPage";
import FirstPageIcon from "@material-ui/icons/FirstPage";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

const ItemEstimate3 = ({ conformaciones }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    console.log(conformaciones);
  }, []);

  return (
    <Fragment>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="cards__item__info">
            <h2 className="cards__item__subtitle">Conformaciones</h2>
            <br />
            <TableContainer component={Paper}>
              <Table
                className="table__detail"
                size="small"
                aria-label="simple data"
              >
                <TableHead>
                  <TableRow>
                    <TableCell
                      component="th"
                      scope="row"
                      className="table__cell"
                    >
                      PDB ID
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="table__cell"
                    >
                      LIMITE INFERIOR
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="table__cell"
                    >
                      LIMITE SUPERIOR
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="table__cell"
                    >
                      SEC. SIMILITUD
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      className="table__cell"
                    >
                      RMSD
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {conformaciones
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((r, id) => (
                      <TableRow key={id}>
                        <TableCell>{r.conformero}</TableCell>
                        <TableCell>{r.lim_inf}</TableCell>
                        <TableCell>{r.lim_sup}</TableCell>
                        <TableCell>{r.sec_similitud}</TableCell>
                        <TableCell>{r.rmsd}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            {
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  15,
                  { label: "Todo", value: conformaciones.length },
                ]}
                component="div"
                count={conformaciones.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "PDB por página" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
                labelRowsPerPage="PDB por página"
              />
            }
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default ItemEstimate3;
