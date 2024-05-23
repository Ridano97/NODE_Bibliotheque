const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Auteur = require('./Auteur');

class Livre extends Model {

}

Livre.init ({

    Li_ID: {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    Li_Type : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Li_Titre : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Li_Description : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Li_Categorie : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Li_AnneeSortie : {
        type : DataTypes.DATE,
        allowNull : false
    },
    Fk_Auteur : {
        type : DataTypes.INTEGER,
        allowNull : false,
      
    },

},{
    sequelize,
    modelName : 'Livre',
    tableName : 'livre',
    timestamps : false 



})

Auteur.hasMany(Livre, {as : "livres" , foreignKey : "Fk_Auteur"});
Livre.belongsTo(Auteur, {as : "auteur", foreignKey :"Fk_Auteur" });

module.exports = Livre ; 


