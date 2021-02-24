import React, { Fragment, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import prsContext from "../../context/prs/prsContext";
import Spinner from "../../components/spinner";
import CardsEstimate from "../../components/cards-estimate";

const Estimate = () => {
  // Obtener el state del context
  const contextPrs = useContext(prsContext);
  const {
    pr,
    lower,
    higher,
    infoGeneral,
    infoEstructural,
    conformaciones,
    loading,
    getEstimateInfo,
  } = contextPrs;

  useEffect(() => {
    if (pr && lower && higher) getEstimateInfo({ pr, lower, higher });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const component = loading ? (
    <Spinner />
  ) : (
    <CardsEstimate
      infoGeneral={infoGeneral}
      infoEstructural={infoEstructural}
      conformaciones={conformaciones}
    />
  );

  return <Fragment>{pr ? component : <Redirect to="/" />}</Fragment>;
};

export default Estimate;
