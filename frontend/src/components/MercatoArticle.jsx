import React from "react";
import CardInfo from "./CardInfo";

const MercatoArticle = ({ player, lien }) => {
  return (
    <div className="mercatoArticle">
      {player.map((el) => {
        return <CardInfo lien={lien} source={el.picture} />;
      })}
    </div>
  );
};

export default MercatoArticle;
