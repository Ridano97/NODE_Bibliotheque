// Vient de la dependance
const {Model, DataTypes} = require ('sequelize');
//vient de notre fichier Sequelize.js
const sequelize = require ('../Config/Sequelize');
const bcrypt = require("bcrypt");
const Emprunts = require('./Emprunts');


class Emprunteur extends Model {

    async validatepassword(password){
        return await bcrypt.compare(password, this.Em_password)
    }

    async toto(tata) {
        return 
    }

}

Emprunteur.init ({

    Em_ID : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },

    Em_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Em_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Em_Ville : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Em_Telephone : {
        type : DataTypes.CHAR,
        length : 10,
        allowNull : false
    },

    Em_Adresse : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Em_CodePostal : {
        type : DataTypes.CHAR,
        length : 7,
        allowNull : false
    },


    Em_Email : {
        type : DataTypes.STRING,
        allowNull : false
    },

    Em_password : {
        type : DataTypes.STRING,
        allowNull : false
    }



},{
    sequelize,
    modelName : 'Emprunteur',
    tableName : 'Emprunteur',
    timestamps : false, 
    hooks : {
        beforeCreate : async (emprunteur) => {
            emprunteur.Em_password = await bcrypt.hash(emprunteur.Em_password, 10);
        },

        beforeUpdate : async (emprunteur) => {
            if (emprunteur.changed('Em_password')) {
                emprunteur.Em_password = await bcrypt.hash(emprunteur.Em_password, 10);
            }
        }
    }

})    

Emprunteur.hasMany(Emprunts, {as : "emprunts", foreignKey : "Fk_Emprunteur"})
Emprunts.belongsTo(Emprunteur, {as : "emprunteur", foreignKey :"Fk_Emprunteur" });


module.exports = Emprunteur ;