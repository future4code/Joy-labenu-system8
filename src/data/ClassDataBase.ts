import BaseDatabase from "./BaseDatabase"
import { Class } from "../Classes/typeClass" 

export class CharacterClass extends BaseDatabase {
    
    public async create(turma: Class){
        await BaseDatabase.connection("labenusystem_turma")
        .insert(turma)
    }

    public async getClass(){
        return await BaseDatabase.connection("labenusystem_turma").select().where("modulo", ">", 0)
    }

    public async getIdClass(idClass:number){
        return await BaseDatabase.connection("labenusystem_turma").select().where({ id: idClass })
    }

    public async updateListaDoceste(idClass:number, docentes:[]){
        return await BaseDatabase.connection("labenusystem_turma")
        .update({docentes: docentes})
        .where({ id: idClass })
    }

    public async updateListaEstudante(idClass:number, estudantes:[]){
        return await BaseDatabase.connection("labenusystem_turma")
        .update({docentes: estudantes})
        .where({ id: idClass })
    }

}