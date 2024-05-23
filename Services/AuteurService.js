const Auteur = require("../Models/Auteur");
const { where } = require("sequelize");

class AuteurService {

    async getAllAuteur() {
       return await Auteur.findAll({include : "livres"});
    
    }

    async getAllAuteurByID(auteurID) {
        return await Auteur.findByPk(auteurID)

    }
    
    async addAuteur(auteur){
        return await Auteur.create(auteur);
    }


}


module.exports = new AuteurService() ;