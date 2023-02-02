import React from "react";
import { NavLink } from "react-router-dom";

const CardInfo = ({ source, lien }) => {
  return (
    <NavLink to={`/${lien}`}>
      <img src={source} alt="" className="cardInfo" />
    </NavLink>
  );
};

export default CardInfo;
