const express = require("express");
const LivreController = require("../Controllers/LivreController");
const router = express.Router();

router.get('/', (request, result) => LivreController.getAllLivre(request, result));
router.get('/:id', (request, result) => LivreController.getAllLivreByID(request, result))
router.post('/' , (request, result ) => LivreController.addLivre(request, result));

module.exports = router ;
