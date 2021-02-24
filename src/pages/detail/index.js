import React, { Fragment, useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import CardsDetail from "../../components/cards-detail";
import prsContext from "../../context/prs/prsContext";
import Spinner from "../../components/spinner";

const Detail = () => {
  // Obtener el state del context
  const contextPrs = useContext(prsContext);
  const {
    pr,
    infoGeneral,
    infoEstructural,
    conformaciones,
    loading,
    getDetailInfo,
  } = contextPrs;

  useEffect(() => {
    if (pr) getDetailInfo(pr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const component = loading ? (
    <Spinner />
  ) : (
    <CardsDetail
      infoGeneral={infoGeneral}
      infoEstructural={infoEstructural}
      conformaciones={conformaciones}
    />
  );

  return <Fragment>{pr ? component : <Redirect to="/" />}</Fragment>;
};

export default Detail;
