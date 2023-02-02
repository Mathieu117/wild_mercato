const playersModel = require("../models/players.model");

const getPlayers = async (req, res) => {
  const players = await playersModel.getModelPlayers();
  res.status(200).send(players);
};

const getPlayerByID = async (req, res) => {
  const id = parseInt(req.params.id);
  const player = await playersModel.getModelPlayerByID(id);
  res.status(200).send(player);
};

const updatePlayerById = async (req, res) => {
  const { lastname, firstname, team_idteam, picture } = req.body;
  const id = parseInt(req.params.id);
  const player = await playersModel.updateModelPlayerById(
    lastname,
    firstname,
    team_idteam,
    picture,
    id
  );
  res.status(200).send("Player modified");
};

const postPlayer = async (req, res) => {
  const { lastname, firstname, team_idteam, picture } = req.body;
  const player = await playersModel.postModelPlayer(
    lastname,
    firstname,
    team_idteam,
    picture
  );
  res.status(201).send("Player created");
};

const deletePlayerById = async (req, res) => {
  const id = parseInt(req.params.id);
  const player = await playersModel.deleteModelPlayerById(id);
  res.status(200).send("Player deleted");
};

module.exports = {
  getPlayers,
  getPlayerByID,
  deletePlayerById,
  updatePlayerById,
  postPlayer,
};
