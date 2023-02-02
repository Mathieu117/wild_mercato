import React from "react";

const InputSelect = ({ teamSelectInput, handleTeamInput }) => {
  return (
    <input
      className="selectTeam"
      type="text"
      placeholder="Rechercher"
      onChange={handleTeamInput}
      value={teamSelectInput}
    />
  );
};

export default InputSelect;
