import { Request, Response }  from "express";
import { DocenteDataBase } from "../../data/DocenteDataBase";


export async function getDocentes(
    req: Request,
    res: Response
): Promise<void> {
    try{
    

        const createDocente = new DocenteDataBase()

        const result = await createDocente.getDocentes()      
        
        res.status(200).send(result);
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}