const connection = require("../connection");

const getModelChamp = async () => {
  const [result] = await connection.query("SELECT * FROM championship;");
  return result;
};

const getModelChampByID = async () => {
  const [result] = await connection.query(
    "SELECT * FROM championship WHERE idteam = ?;"
  );
  return result;
};

module.exports = {
  getModelChamp,
  getModelChampByID,
};
