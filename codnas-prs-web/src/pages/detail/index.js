import React, { Fragment, useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import CardsDetail from "../../components/cards-detail";
import PrsContext from "../../context/prs/prsContext";

const Detail = () => {
  // Obtener el state del context
  const prsContext = useContext(PrsContext);
  const { getPr } = prsContext;

  const [pr, setPr] = useState(null);

  useEffect(() => {
    const response = async () => {
      const a = await getPr();
      setPr(a);
    };
    response();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      {pr ? (
        pr.pdbChain ? (
          <CardsDetail infoGeneral={pr} />
        ) : (
          <Redirect to="/" />
        )
      ) : null}
    </Fragment>
  );
};

export default Detail;
