const {Evaluation} = require("../models");


const EvaluationController = {

    obtenerCalificación:async (req, res)=>{
        try{
            const evaluation = await Evaluation.findAll({
                include: [{ model: Evaluation, as: 'Evaluación', include:
                        [{model: calificaciones, as: 'Calificaciones'}]
                        }]
                    });
        
                    if(!evaluation){
                        return res.status(404).json({error: "No hay calificaciones"})
                    }
                    return res.json(evaluation);

        }catch(error){
                    return res.status(500).json({error: error.message})
                }
            }
        
  


}

module.exports = EvaluationController;