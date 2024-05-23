const EmprunteurService = require("../Services/EmprunteurService");


class EmprunteurController {

        async getAllEmprunteur(request, result){
        try {
            const emprunteurs = await EmprunteurService.getAllEmprunteur();
            result.json(emprunteurs);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la reception des emprunteurs"})
        }

    }

    async getEmprunteurByID(request, result){
        try {
            const emprunteur = await EmprunteurService.getEmprunteurByID(request.params.id);
            result.json(emprunteur);
        } catch (error) {
            result.status(500);
            result.json({error : "Une erreur est survenue lors de la récupération de l'emprunteur"});
        }
    }

    async addEmprunteur(request, result){
        try {
            const emprunteur = await EmprunteurService.addEmprunteur(request.body);
            result.json(emprunteur);
        } catch (error) {
            console.log(error);
            result.status(500);
            result.json({error : "Une erreur est survenue lors de l'ajout de l'emprunteur"});
        }
    }
}


module.exports = new EmprunteurController(); 