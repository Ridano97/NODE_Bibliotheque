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

    async removeEmprunteur(emprunteurID){
        return await Emprunteur.destroy({
            where : { Em_ID : emprunteurID}
        })
    }

    async updateEmprunteur(emprunteurID, emprunteur){
        return await Emprunteur.update(emprunteur, {
            where : {Em_ID : emprunteurID},
            individualHooks : true
        })
    }
}

module.exports = new EmprunteurService() ;