const models = require("../../database/models");

const addLikeDislike=async (req,res) => {
    try{

        const {body}=req;

        const existPlace= await models.places.findOne({

            where: {
                id: body.placeId,
                statusDeLete:false,
            },
        
        });

        if (!existPlace) return res.status(404).send("El lugar no existe");


        const addLikeDislike= await models.likes.create({
            isLike:body.isLike,
            placeId:body.placeId,
        });

        return res.status(201).send(addLikeDislike);

    } catch (error){
        return res.status(500).send("Error interno en el servidor");
    }


};

module.exports= { addLikeDislike};

