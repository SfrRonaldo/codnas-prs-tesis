import React from "react";
import Form from "../form";
import Button from "../button";
import TutorialIcon from "@material-ui/icons/MenuBook";

const Search = ({ title, text, color }) => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <li className="cards__item">
              <div className="cards__item__paper">
                <div className="cards__item__title">
                  <span>{title}</span>
                </div>
                <Form />
                <div className={`cards__item__body ${color}`}>
                  <span>{text}</span>
                </div>
                <div className={`cards__item__btn`}>
                  <Button to="/tutorial" buttonStyle="btn--outline" width="40%">
                    <TutorialIcon className="icon__tutorial" />
                    <span>¿Cómo evaluar?</span>
                  </Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;
