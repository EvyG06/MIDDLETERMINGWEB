'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable("Evaluaciones", {
            id: {
                type:Sequelize.UUID,
                autoIncrement: true,
                primaryKey: true
            },
            estudiante_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                foreignKey: true

            },
            asignatura: {
                type: Sequelize.STRING,
                allowNull: false,
                foreignKey: true
            },
            calificacion1: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            calificacion2: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            calificacion3: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            estado: {
                type: Sequelize.STRING,
                allowNull: false,
                foreignKey: true
            }
        }, {
            timestamps: false
        });
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable("Evaluaciones");
    }
};


async function evaluarEstudiante(estudiante_id, asignatura, cal1, cal2, cal3) {
    const promedio = (cal1 + cal2 + cal3) / 3;
    const estado = promedio >= 3.0 ? 'Aprobado' : 'Reprobado';

    await Evaluacion.create({
        estudiante_id,
        asignatura,
        calificacion1: cal1,
        calificacion2: cal2,
        calificacion3: cal3,
        estado
    });

    console.log(`Estudiante ${estudiante_id} en ${asignatura} tiene promedio de ${promedio.toFixed(2)}: ${estado}`);
}

sequelize.sync().then(async () => {
    console.log("Base de datos sincronizada");
    await evaluarEstudiante(1, 'Matemáticas', 3.5, 4.0, 2.8);
    await evaluarEstudiante(2, 'Historia', 2.0, 2.5, 3.0);
    

    const resultados = await Evaluacion.findAll();
    console.log("Resultados: ", JSON.stringify(resultados, null, 2));
}).catch(error => console.error("Error en la sincronización:", error));
