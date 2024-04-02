const express = require("express");
const router = express.Router();
const administradorController = require("../controllers/administrador.controller");

router.post("/", administradorController.createAdministrador);

module.exports = router;
