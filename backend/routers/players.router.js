const express = require("express");
const router = express.Router();
const playersController = require("../controllers/players.controller");

router.get("/", playersController.getPlayers);
router.get("/:id", playersController.getPlayerByID);
router.delete("/:id", playersController.deletePlayerById);
router.put("/:id", playersController.updatePlayerById);

module.exports = router;
