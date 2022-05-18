import { Request, Response }  from "express";
import connection from "../data/connection";

export async function postProducts(
    req: Request,
    res: Response
): Promise<void> {
    try{
        const nomeTurma = req.body.nomeTurma
        const docentes = req.body.docentes
        const estudantes = req.body.estudantes
        const modulo = req.body.modulo

        

        const result = 0
        
        res.status(200).send("Produto criado com sucesso!!");
    } catch (error : any){
        res.status(400).send(error.sqMessage || error.message)
    }
}