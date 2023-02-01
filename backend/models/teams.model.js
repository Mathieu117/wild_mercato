const connection = require("../connection");

const getModelTeams = async () => {
  const [result] = await connection.query("SELECT * FROM team;");
  return result;
};

const getModelTeamByID = async (id) => {
  const [result] = await connection.query(
    "SELECT * FROM team WHERE idteam = ?;",
    [id]
  );
  return result;
};

module.exports = {
  getModelTeams,
  getModelTeamByID,
};
