export class CustomError extends Error {
    statusCode: Number

    constructor(mensagem: string, statusCode:number){
        super(mensagem)
        this.statusCode= statusCode
    }

}


export class Class {
	private nome_turma: string
	docentes?:[]
    estudantes?:[]
	private modulo?:Number

    constructor(nomeTurma: string, modulo?:Number, docentes?:[], estudantes?:[]){
        this.nome_turma = nomeTurma
        this.docentes = docentes
        this.estudantes = estudantes
        this.modulo = modulo
    }

    
}