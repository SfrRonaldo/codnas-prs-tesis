import React, { Fragment, useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import PrsContext from "../../context/prs/prsContext";

const Estimate = () => {
  // Obtener el state del context
  const prsContext = useContext(PrsContext);
  const { getPr } = prsContext;

  const [pr, setPr] = useState(null);

  useEffect(() => {
    setPr(getPr());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {pr ? pr.pdbChain ? <h1>ESTIMAR</h1> : <Redirect to="/" /> : null}
    </Fragment>
  );
};

export default Estimate;
