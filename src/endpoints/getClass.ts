import { Request, Response }  from "express";
import { CharacterClass } from "../data/ClassDataBase";
import { Class } from "../Classes/typeClass"
import { CustomError } from "../Classes/CustomError"
import  BaseDatabase  from "../data/BaseDatabase"

export async function getClass(
    req: Request,
    res: Response
): Promise<void> {
    try{
    

        const createClass = new CharacterClass()

        const result = await createClass.getClass()

        
        console.log(result)
        
        res.status(200).send(result);
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}