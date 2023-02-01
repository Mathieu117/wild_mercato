const connection = require("../connection");

const getModelPlayers = async () => {
  const [result] = await connection.query("SELECT * FROM player;");
  return result;
};

const getModelPlayerByID = async (id) => {
  const [result] = await connection.query(
    "SELECT * FROM player WHERE idplayer = ?;",
    [id]
  );
  return result;
};
const updateModelPlayerById = async (
  lastname,
  firstname,
  team_idteam,
  picture,
  id
) => {
  const [result] = await connection.query(
    "UPDATE player SET lastname = ?, firstname = ?, team_idteam = ?, picture = ?  WHERE idplayer = ?",
    [lastname, firstname, team_idteam, picture, id]
  );
  return result;
};

const deleteModelPlayerById = async (id) => {
  const [result] = await connection.query(
    "DELETE FROM player WHERE idplayer = ?",
    [id]
  );
  return result;
};

module.exports = {
  getModelPlayers,
  getModelPlayerByID,
  deleteModelPlayerById,
  updateModelPlayerById,
};
