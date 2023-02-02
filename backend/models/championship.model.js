const connection = require("../connection");

const getModelChamp = async () => {
  const [result] = await connection.query("SELECT * FROM championship;");
  return result;
};

const getModelChampByID = async () => {
  const [result] = await connection.query(
    "SELECT * FROM championship WHERE idchampionship = ?;"
  );
  return result;
};

const updateModelChampById = async (name, logo, id) => {
  const [result] = await connection.query(
    "UPDATE championship SET name = ?, logo = ?  WHERE idchampionship = ?",
    [name, logo, id]
  );
  return result;
};

const postModelChamp = async (name, logo) => {
  const result = await connection.query(
    "INSERT INTO championship (name, logo) VALUES (?,?)",
    [name, logo]
  );
  return result;
};

const deleteModelChampById = async (id) => {
  const [result] = await connection.query(
    "DELETE FROM championship WHERE idchampionship = ?",
    [id]
  );
  return result;
};
module.exports = {
  getModelChamp,
  getModelChampByID,
  updateModelChampById,
  postModelChamp,
  deleteModelChampById,
};
