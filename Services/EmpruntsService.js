const { where } = require("sequelize");
const Emprunts = require("../Models/Emprunts");

class EmpruntsService {

    async getAllEmprunts() {
        return await Emprunts.findAll({include : ["livre", "emprunteur"] });
    }

    async getEmpruntsByID(empruntsID){
        return await Emprunts.findByPk(empruntsID)
    }
}

module.exports = new EmpruntsService() ;