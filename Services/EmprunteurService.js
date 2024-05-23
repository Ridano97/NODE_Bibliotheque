const { where } = require("sequelize");
const Emprunteur = require("../Models/Emprunteur");

class EmprunteurService {

    async getAllEmprunteur() {
        return await Emprunteur.findAll({include : "emprunts"});
    }

    async getEmprunteurByID(emprunteurID){
        return await Emprunteur.findByPk(emprunteurID)
    }

    async addEmprunteur(emprunteur){
        return await Emprunteur.create(emprunteur);
    }
}

module.exports = new EmprunteurService() ;