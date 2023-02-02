import React from "react";
import CardInfo from "./CardInfo";

const MercatoArticle = ({ player }) => {
  return (
    <div className="mercatoArticle">
      {player.map((el) => {
        return <CardInfo titre={el.lastname} source={el.picture} />;
      })}
    </div>
  );
};

export default MercatoArticle;
