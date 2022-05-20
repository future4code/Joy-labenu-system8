import BaseDatabase from "./connection"
import { Class } from "../types" 

export class CharacterClass extends BaseDatabase {
    
    public async create(turma: Class){
        await this.connection("labenusystem_turma")
        .insert(turma)
    }
}