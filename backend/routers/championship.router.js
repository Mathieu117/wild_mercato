const express = require("express");
const router = express.Router();
const championshipController = require("../controllers/championship.controller");

router.get("/", championshipController.getChamp);
router.get("/:id", championshipController.getChampByID);
router.delete("/:id", championshipController.deleteChampById);
router.put("/:id", championshipController.updateChampById);
router.post("/", championshipController.postChamp);

module.exports = router;
