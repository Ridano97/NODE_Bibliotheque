const express = require("express");
const LivreController = require("../Controllers/LivreController");
const Livre = require("../Models/Livre");
const router = express.Router();

router.get('/', (request, result) => LivreController.getAllLivre(request, result));
router.get('/:id', (request, result) => LivreController.getAllLivreByID(request, result))

module.exports = router ;
