"use strict";
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Pedido extends Model {
        static associate(models) {
            Pedido.hasMany(models.EvaluationModel, { foreignKey: "idfk", as: "Estudiante_idfk" })
        }
    }

    Estudiantes.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        Estudiante_id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
            
        }

    },
        {
            sequelize,
            modelName: "Estuadiante",
            tableName: "Estudiante",
            timestamps: true
        }

    );
    return Pedido;
}