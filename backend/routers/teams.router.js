const express = require("express");
const router = express.Router();
const teamsController = require("../controllers/teams.controller");

router.get("/", teamsController.getTeams);
router.get("/:id", teamsController.getTeamByID);
router.delete("/:id", teamsController.deleteTeamById);
router.put("/:id", teamsController.updateTeamById);
router.post("/", teamsController.postTeam);

module.exports = router;
