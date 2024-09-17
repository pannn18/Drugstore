import { NextFunction, Request, Response } from "express";
import Joi from "joi";

/** create schema for add new madicine */
const createscheme = Joi.object({
    name: Joi.string().required(),
    stock: Joi.number().min(0).required(),
    price: Joi.number().min(0).required(),
    exp_date: Joi.date().required(),
    type: Joi.string().valid("Syrup", "Tablet", "Powder").required()
})

const createValidation = (req:Request,res:Response, next:NextFunction) => {
    const validate = createscheme.validate(req.body)
    if(validate.error){
        return res.status(400).json({
            message: validate .error .details .map(it => it.message) .join()
        })
    }

    
    next()
}
export {createValidation}