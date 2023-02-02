import React from "react";

const YourTeamSelect = ({ team, handleTeam, teamSelect }) => {
  return (
    <div className="yourTeamTitle">
      <h2>Your Team</h2>{" "}
      <select
        name="Your Team"
        id=""
        className="selectTeam"
        onChange={handleTeam}
        value={teamSelect}
      >
        <option value="">Votre Club</option>
        {team.map((el) => {
          return <option value={el.name}>{el.name}</option>;
        })}
      </select>
    </div>
  );
};

export default YourTeamSelect;
