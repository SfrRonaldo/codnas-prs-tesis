import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import prsContext from "../../context/prs/prsContext";

const PDBSelect = ({ handleInputChange, onKeyPress }) => {
  const contextPrs = useContext(prsContext);

  const { prs } = contextPrs;

  return (
    <Autocomplete
      id="pdbChain"
      options={prs}
      getOptionLabel={(option) => option.pdb_id}
      size="small"
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Proteína repetida"
          variant="outlined"
          style={{ width: "100%" }}
          onKeyPress={onKeyPress}
        />
      )}
    />
  );
};

export default PDBSelect;
