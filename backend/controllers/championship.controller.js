const championshipModel = require("../models/championship.model");

const getChamp = async (req, res) => {
  const championship = await championshipModel.getModelChamp();
  res.status(200).send(championship);
};

const getChampByID = async (req, res) => {
  const championship = await championshipModel.getModelChampByID();
  res.status(200).send(championship);
};

module.exports = {
  getChamp,
  getChampByID,
};
