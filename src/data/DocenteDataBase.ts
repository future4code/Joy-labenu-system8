import BaseDatabase from "./BaseDatabase"
import { Docente } from "../Classes/ClassDocente"

export class DocenteDataBase extends BaseDatabase {
    
    public async create(Docente: Docente){
        await BaseDatabase.connection("labenusystem_docente")
        .insert(Docente)
    }

    public async getDocentes(){
        return await BaseDatabase.connection("labenusystem_docente").select()
    }

    public async updateTurmaDocente(idDocente:number, turma_id:number){
        await BaseDatabase.connection("labenusystem_docente")
        .update({turma_id: turma_id})
        .where({ id: idDocente })
    }
}