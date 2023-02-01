const express = require("express");
const router = express.Router();
const championshipController = require("../controllers/championship.controller");

router.get("/", championshipController.getChamp);
router.get("/:id", championshipController.getChampByID);

module.exports = router;
