const teamsModel = require("../models/teams.model");

const getTeams = async (req, res) => {
  const players = await teamsModel.getModelTeams();
  res.status(200).send(players);
};

const getTeamByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const player = await teamsModel.getModelTeamByID(id);
  res.status(200).send(player);
};

const updateTeamById = async (req, res) => {
  const { name, city, championshipId, fanion, stadium, stadium_pic } = req.body;
  const id = parseInt(req.params.id);
  const team = await teamsModel.updateModelTeamById(
    name,
    city,
    championshipId,
    fanion,
    stadium,
    stadium_pic,
    id
  );
  res.status(200).send("Team modified");
};

const postTeam = async (req, res) => {
  const { name, city, championshipId, fanion, stadium, stadium_pic } = req.body;
  const player = await teamsModel.postModelTeam(
    name,
    city,
    championshipId,
    fanion,
    stadium,
    stadium_pic
  );
  res.status(201).send("Team created");
};

const deleteTeamById = async (req, res) => {
  const id = parseInt(req.params.id);
  const player = await teamsModel.deleteModelTeamById(id);
  res.status(200).send("Team deleted");
};

module.exports = {
  getTeams,
  getTeamByID,
  updateTeamById,
  postTeam,
  deleteTeamById,
};
