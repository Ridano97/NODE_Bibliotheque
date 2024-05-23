const express = require("express");
const EmpruntsController = require("../Controllers/EmpruntsController");
const router = express.Router();

router.get('/', (request, result) => EmpruntsController.getAllEmprunts(request, result));
router.get('/:id' , (request , result) => EmpruntsController.getEmpruntsByID(request, result));




module.exports = router ; 