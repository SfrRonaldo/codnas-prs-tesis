import React from "react";
import { Grid, TextField } from "@material-ui/core";
import Button from "../button";
import PDBSelect from "../autocomplete";
import "./index.css";

const Form = () => {
  return (
    <div className="form-content">
      <div className="form-control">
        <Grid container justify="center" spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <PDBSelect />
          </Grid>
        </Grid>
      </div>
      <div className="form-control">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={6} lg={6} md={6}>
            <TextField
              id="inf"
              label="Inf."
              variant="outlined"
              size="small"
              type="number"
              placeholder="2"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} lg={6} md={6}>
            <TextField
              id="sup"
              label="Sup."
              variant="outlined"
              size="small"
              type="number"
              placeholder="79"
              fullWidth
            />
          </Grid>
        </Grid>
      </div>
      <div className="form-control">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} lg={6} md={6}>
            <Button to="/estimate" buttonStyle="btn--primary">
              Estimar
            </Button>
          </Grid>
          <Grid item xs={12} lg={6} md={6}>
            <Button to="/detail" buttonStyle="btn--primary">
              Buscar
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Form;
