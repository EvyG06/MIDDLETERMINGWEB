const express = require("express");
const router = express.Router();
const EvaluationController = require("../controller/EvaluationController");

router.post("/", EvaluationController.obtenerpromedio)

module.exports= router;