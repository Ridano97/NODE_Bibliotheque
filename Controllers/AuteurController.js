const AuteurService = require("../Services/AuteurService");


class AuteurController {
    async getAllAuteur(request, result){
        try {
            const auteurs = await AuteurService.getAllAuteur();
            result.json(auteurs);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des Auteurs"})
        }
    }

    async getAllAuteurByID(request, result){
        try {
            const auteur = await AuteurService.getAllAuteurByID(request.params.id);
            result.json(auteur);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération des auteurs"})
        }
    }

    async addAuteur(request, result){
        try {
            const auteur = await AuteurService.addAuteur(request.body);
            result.json(auteur);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout de l'auteur"})
        }
    }
}



module.exports = new AuteurController() ; 