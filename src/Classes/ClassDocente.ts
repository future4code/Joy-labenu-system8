

export class Docente {
	private nome: string
    private email: string
    private turma_id: number
    private especialidades: string
    private data_nasc?: Date

    constructor(nome: string, email:string , turma_id: number, especialidades:string , data_nasc?:Date){
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
        this.especialidades = especialidades
    } 
}