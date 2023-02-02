import React from "react";
import CardInfo from "./CardInfo";

const YourTeamArticle = ({ team, teamSelect, teamSelectInput }) => {
  return (
    <div className="yourTeamArticle">
      {team
        .filter((el) =>
          el.city.toLowerCase().includes(teamSelectInput.toLowerCase())
        )
        .filter((el) => {
          if (teamSelect === "") return true;
          if (teamSelect === el.name) return true;
        })
        .map((el) => {
          return <CardInfo titre={el.name} source={el.fanion} />;
        })}
    </div>
  );
};

export default YourTeamArticle;
