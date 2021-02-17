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
          <Grid item lg={6} md={6} xs={8}>
            <PDBSelect />
          </Grid>
        </Grid>
      </div>
      <div className="form-control">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={4} lg={3} md={3}>
            <TextField
              id="inf"
              label="Inf."
              variant="outlined"
              size="small"
              type="number"
              placeholder="2"
            />
          </Grid>
          <Grid item xs={4} lg={3} md={3}>
            <TextField
              id="sup"
              label="Sup."
              variant="outlined"
              size="small"
              type="number"
              placeholder="79"
            />
          </Grid>
        </Grid>
      </div>
      <div className="form-control">
        <Grid container justify="center" spacing={3}>
          <Grid item xs={12} lg={3} md={3}>
            <Button to="/estimate" buttonStyle="btn--primary">
              Estimar
            </Button>
          </Grid>
          <Grid item xs={12} lg={3} md={3}>
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
