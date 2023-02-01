const playersModel = require("../models/teams.model");

const getTeams = async (req, res) => {
  const players = await playersModel.getModelPlayers();
  res.status(200).send(players);
};

const getTeamByID = async (req, res) => {
  const player = await playersModel.getModelPlayerByID(id);
  res.status(200).send(player);
};

module.exports = {
  getTeams,
  getTeamByID,
};
