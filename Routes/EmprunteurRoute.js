const express = require("express");
const EmprunteurController = require("../Controllers/EmprunteurController");
const router = express.Router();

router.get('/', (request, result) => EmprunteurController.getAllEmprunteur(request, result));
router.get('/:id' , (request , result) => EmprunteurController.getEmprunteurByID(request, result));
router.post('/' , (request, result) => EmprunteurController.addEmprunteur(request, result));
router.delete('/:id' , (request, result) => EmprunteurController.removeEmprunteur(request, result));
router.patch('/:id' , (request, result) => EmprunteurController.updateEmprunteur(request, result));




module.exports = router ; 