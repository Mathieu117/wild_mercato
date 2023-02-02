const championshipModel = require("../models/championship.model");

const getChamp = async (req, res) => {
  const championship = await championshipModel.getModelChamp();
  res.status(200).send(championship);
};

const getChampByID = async (req, res) => {
  const championship = await championshipModel.getModelChampByID();
  res.status(200).send(championship);
};

const updateChampById = async (req, res) => {
  const { name, logo } = req.body;
  const id = parseInt(req.params.id);
  const championship = await championshipModel.updateModelChampById(
    name,
    logo,
    id
  );
  res.status(200).send("Championship modified");
};

const postChamp = async (req, res) => {
  const { name, logo } = req.body;
  const player = await championshipModel.postModelChamp(name, logo);
  res.status(201).send("Championship created");
};

const deleteChampById = async (req, res) => {
  const id = parseInt(req.params.id);
  const player = await playersModel.deleteModelChampById(id);
  res.status(200).send("Championship deleted");
};

module.exports = {
  getChamp,
  getChampByID,
  updateChampById,
  postChamp,
  deleteChampById,
};
