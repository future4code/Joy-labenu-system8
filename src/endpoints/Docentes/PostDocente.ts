import { Request, Response }  from "express";
import { Docente } from "../../Classes/ClassDocente";
import { CustomError } from "../../Classes/CustomError";
import { DocenteDataBase } from "../../data/DocenteDataBase";



export async function postDocente(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const { nome, email, data_nasc, especialidades, turma_id} = req.body

        if(!nome || !email || !turma_id ||!especialidades){
            throw new CustomError("Insira as informações coretamente", 406)
        }

        const newDocente = new Docente (
            nome,
            email,
            turma_id,
            especialidades,
            data_nasc 
        ) 

        console.log(newDocente)

        const createDocente = new DocenteDataBase()

        await createDocente.create(newDocente)

        

        
        res.status(200).send("Docente criado com sucesso!!");
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}