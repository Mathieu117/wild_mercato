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

const updateModelTeamById = async (
  name,
  city,
  championshipId,
  fanion,
  stadium,
  stadium_pic,
  id
) => {
  const [result] = await connection.query(
    "UPDATE team SET name = ?, city = ?, championshipId = ?, fanion = ?, stadium = ?, stadium_pic  = ?  WHERE idteam = ?",
    [name, city, championshipId, fanion, stadium, stadium_pic, id]
  );
  return result;
};

const postModelTeam = async (
  name,
  city,
  championshipId,
  fanion,
  stadium,
  stadium_pic
) => {
  const result = await connection.query(
    "INSERT INTO team (name, city, championshipId, fanion, stadium, stadium_pic) VALUES (?,?,?,?,?,?)",
    [name, city, championshipId, fanion, stadium, stadium_pic]
  );
  return result;
};

const deleteModelTeamById = async (id) => {
  const [result] = await connection.query("DELETE FROM team WHERE idteam = ?", [
    id,
  ]);
  return result;
};
module.exports = {
  getModelTeams,
  getModelTeamByID,
  updateModelTeamById,
  postModelTeam,
  deleteModelTeamById,
};
