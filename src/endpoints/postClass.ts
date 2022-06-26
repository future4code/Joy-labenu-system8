import { Request, Response }  from "express";
import { CharacterClass } from "../data/ClassDataBase";
import { Class } from "../Classes/typeClass"
import { CustomError } from "../Classes/CustomError"


export async function postClass(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const { nome, modulo} = req.body

        if(!nome){
            throw new CustomError("Insira o nome da turma", 406)
        }

        const newClass = new Class (
            nome,
            modulo
        ) 

        console.log("body", modulo)
        console.log(newClass)

        const createClass = new CharacterClass()

        await createClass.create(newClass)

        

        
        res.status(200).send("Turma criada com sucesso!!");
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}