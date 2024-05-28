const express = require("express");
const EmpruntsController = require("../Controllers/EmpruntsController");
const router = express.Router();

router.get('/', (request, result) => EmpruntsController.getAllEmprunts(request, result));
router.get('/:id' , (request , result) => EmpruntsController.getEmpruntsByID(request, result));
router.post('/', (request, result) => EmpruntsController.addEmprunts(request, result));
router.delete('/:id' , (request, result) => EmpruntsController.removeEmprunts(request, result));
router.patch('/:id' , (request, result) => EmpruntsController.updateEmprunts(request, result));


module.exports = router ; 