const sequelize = require("../Config/Sequelize");
const {Model, DataTypes} = require('sequelize');
const Livre = require("./Livre");

class Auteur extends Model {

}

Auteur.init ({
    Au_ID : {
        type : DataTypes.INTEGER,
        autoIcrement : true,
        primaryKey : true
    },

    Au_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Au_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Au_NbLivres : {
        type : DataTypes.INTEGER,
        allowNull : false
    },

    Au_Annee : {
        type : DataTypes.DATE,
        allowNull : false
    },

    Au_type : {
        type : DataTypes.STRING,
        allowNull : true
    }

}, {
    sequelize,
    modelName : 'Auteur',
    tableName : 'auteur',
    timestamps : false 



})





module.exports = Auteur;