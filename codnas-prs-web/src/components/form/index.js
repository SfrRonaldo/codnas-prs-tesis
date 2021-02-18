import React, { Fragment, useContext, useEffect, useState } from "react";
import { Grid, TextField, Snackbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import PrsContext from "../../context/prs/prsContext";
import Button from "../button";
import PDBSelect from "../autocomplete";
import "./index.css";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Form = () => {
  // Obtener el state del context
  const prsContext = useContext(PrsContext);

  const { setCurrentPr, clearPr } = prsContext;

  const [pr, setPr] = useState({
    pdbChain: "",
    lower: "",
    higher: "",
  });
  const [open, setOpen] = useState(false);
  const [msgError, setMsgError] = useState("");

  const history = useHistory();

  useEffect(() => {
    clearPr();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pdbChain, lower, higher } = pr;

  const handleChange = (e) => {
    setPr({ ...pr, [e.target.name]: e.target.value });
  };

  const handleInputChange = (_e, newInputValue) => {
    setPr({ ...pr, pdbChain: newInputValue });
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // En el caso de no rellenar formulario
      if (pdbChain === "" && lower === "" && higher === "") {
        setMsgError(
          "Falta llenar el campo de la proteína repetida con o sin los campos de la región de repetición (Inf. y Sup.)."
        );
        handleClick();
        return;
      }
      // En el caso de solo rellenar el pdbChain
      if (pdbChain !== "" && lower === "" && higher === "") {
        setCurrentPr(pr);
        setMsgError("");
        history.push("/detail");
        return;
      }
      // En el caso de rellenar el pdbChain y uno de los limites de la region de repeticion
      if (pdbChain !== "" && (lower === "" || higher === "")) {
        setMsgError(
          "Si gusta estimar precisa de llenar los campos de la región de repetición (Inf. y Sup.)."
        );
        handleClick();
        return;
      }
      // En el caso de no rellenar el pdb chain
      if ((lower !== "" || higher !== "") && pdbChain === "") {
        setMsgError("Falta llenar el campo de la proteína repetida.");
        handleClick();
        return;
      }
      setCurrentPr(pr);
      setMsgError("");
      history.push("/estimate");
    }
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (_e, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const onClickDetail = (_e) => {
    if (pdbChain === "") {
      setMsgError("Falta llenar el campo de la proteína repetida.");
      handleClick();
      return;
    }
    setCurrentPr(pr);
    setMsgError("");
    history.push("/detail");
  };

  const onClickEstimate = (_e) => {
    if (pdbChain === "" && lower === "" && higher === "") {
      setMsgError(
        "Falta llenar el campo de la proteína repetida con los campos de la región de repetición (Inf. y Sup.)."
      );
      handleClick();
      return;
    }
    // En el caso de rellenar el pdbChain y uno de los limites de la region de repeticion
    if (pdbChain !== "" && (lower === "" || higher === "")) {
      setMsgError(
        "Falta llenar los campos de la región de repetición (Inf. y Sup.)."
      );
      handleClick();
      return;
    }
    // En el caso de no rellenar el pdb chain
    if ((lower !== "" || higher !== "") && pdbChain === "") {
      setMsgError("Falta llenar el campo de la proteína repetida.");
      handleClick();
      return;
    }
    setCurrentPr(pr);
    setMsgError("");
    history.push("/estimate");
  };

  return (
    <Fragment>
      <div className="form-content">
        <div className="form-control">
          <Grid container justify="center" spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              <PDBSelect
                handleInputChange={handleInputChange}
                onKeyPress={onKeyPress}
              />
            </Grid>
          </Grid>
        </div>
        <div className="form-control">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={6} lg={6} md={6}>
              <TextField
                id="lower"
                name="lower"
                label="Inf."
                variant="outlined"
                size="small"
                type="number"
                placeholder="2"
                fullWidth
                onChange={handleChange}
                onKeyPress={onKeyPress}
              />
            </Grid>
            <Grid item xs={6} lg={6} md={6}>
              <TextField
                id="higher"
                name="higher"
                label="Sup."
                variant="outlined"
                size="small"
                type="number"
                placeholder="79"
                fullWidth
                onChange={handleChange}
                onKeyPress={onKeyPress}
              />
            </Grid>
          </Grid>
        </div>
        <div className="form-control">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={12} lg={6} md={6}>
              <Button
                to={""}
                onClick={onClickEstimate}
                buttonStyle="btn--primary"
              >
                Estimar
              </Button>
            </Grid>
            <Grid item xs={12} lg={6} md={6}>
              <Button
                to={""}
                onClick={onClickDetail}
                buttonStyle="btn--primary"
              >
                Buscar
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={1000}
        onClose={handleClose}
        style={{ textAlign: "center" }}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="error">
          {msgError}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Form;
