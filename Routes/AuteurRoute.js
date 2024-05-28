const express = require("express");
const AuteurController = require("../Controllers/AuteurController");
const router = express.Router();

router.get('/', (request, result) => AuteurController.getAllAuteur(request, result));
router.get('/:id' , (request, result) => AuteurController.getAllAuteurByID(request, result));
router.post('/' , (request, result) => AuteurController.addAuteur(request, result));
router.delete('/:id' , (request, result) => AuteurController.removeAuteur(request, result));
router.patch('/:id' , (request, result) => AuteurController.updateAuteur(request, result));

module.exports = router ; 