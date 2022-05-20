import { Request, Response }  from "express";
import { CharacterClass } from "../data/CharacterDataBase";
import { Class } from "../types"
import { CustomError } from "../types"

export async function postClass(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const nomeTurma = req.body.nomeTurma
        const docentes = req.body.docentes
        const estudantes = req.body.estudantes
        const modulo = req.body.modulo

        if(!nomeTurma){
            throw new CustomError("Insira o nome da turma", 406)
        }

        const newClass = new Class (
            nomeTurma, 
            docentes,
            estudantes, 
            modulo
        ) 

        const createClass = new CharacterClass()

        await createClass.create(newClass)
        
        res.status(200).send("Turma criada com sucesso!!");
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}