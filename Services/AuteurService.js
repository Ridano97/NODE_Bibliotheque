const Auteur = require("../Models/Auteur");

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

    async removeAuteur(auteurID){
        return await Auteur.destroy({
            where : {Au_ID : auteurID}
        })
    }

    async updateAuteur(auteurID, auteur){
        return await Auteur.update(auteur , {
            where : {Au_ID : auteurID},
            individualHooks : true
        })
    }

}


module.exports = new AuteurService() ;