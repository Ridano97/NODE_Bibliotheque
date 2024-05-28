const Emprunts = require("../Models/Emprunts");

class EmpruntsService {

    async getAllEmprunts() {
        return await Emprunts.findAll({include : ["livre", "emprunteur"] });
    }

    async getEmpruntsByID(empruntsID){
        return await Emprunts.findByPk(empruntsID)
    }

    async addEmprunts(emprunts){
        return await Emprunts.findByPk(emprunts)
    }
    
    async removeEmprunts(empruntsID){
        return await Emprunts.destroy({
            where : { Emp_ID : empruntsID }
        })
    }

    async updateEmprunts(emprunteurID, emprunteur){
        return await Emprunts.update( emprunteur, {
            where : {Emp_ID : emprunteurID},
            individualHooks : true 
        })
    }
}

module.exports = new EmpruntsService() ;