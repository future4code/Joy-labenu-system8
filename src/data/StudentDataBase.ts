import BaseDatabase from "./BaseDatabase"
import { Student, StudentHobbie, Hobbie } from "../Classes/typeStudent" 


export class CharacterStudent extends BaseDatabase {
    
    public async create(student: Student){
        await BaseDatabase.connection("labenusystem_estudante")
        .insert(student)
    }

    public async getIdClass(idClass:number){
        return await BaseDatabase.connection("labenusystem_turma").select("estudantes").where({ id: idClass })
    }

    public async getStudent(idClass:number){
        return await BaseDatabase.connection("labenusystem_estudante").select().where({ id: idClass })
    }

    public async getIdStudent(nomeStudent:string){
        return await BaseDatabase.connection("labenusystem_estudante")
        .select("id")
        .where({ nome: nomeStudent})
    }

    public async updateClassStudent(studentId:number, classId:number){
        return await BaseDatabase.connection("labenusystem_estudante")
        .update({turma_id: classId})
        .where({ id: studentId })
    }

    public async updateListaEstudante(idClass:number, estudantes:any[]){
        return await BaseDatabase.connection("labenusystem_turma")
        .update({estudantes: `${estudantes}`})
        .where({ id: idClass })
    }

    public async getHobbies(){
        return await BaseDatabase.connection("labenusystem_hobbies").select()
    }

    public async getIdHobbie(hobbie:string){
        return await BaseDatabase.connection("labenusystem_hobbies").select("id")
        .where({ hobbies: hobbie })
    }

    public async creatHobbies(hobbies: Hobbie){
        await BaseDatabase.connection("labenusystem_hobbies")
        .insert(hobbies)
    }

    public async estudantesHobbie(ids:StudentHobbie){
        await BaseDatabase.connection("estudantes_hobbie")
        .insert(ids)
    }


}