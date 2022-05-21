import { Request, Response }  from "express";
import { CustomError } from "../../Classes/CustomError";
import { DocenteDataBase } from "../../data/DocenteDataBase";



export async function putDocente(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const idDocente = req.params.id
        const turma_id = req.body.turma_id

        if(!turma_id){
            throw new CustomError("Insira o ID da turma", 406)
        }


        const updateDocente = new DocenteDataBase()

        
        await updateDocente.updateTurmaDocente(+idDocente, turma_id)

        

        
        res.status(200).send(`Docente transferidopara para a turma ${turma_id} com sucesso!!`);
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}