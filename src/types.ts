class Class {
	private nomeTurma: string
	docentes:[]
    estudantes:[]
	private modulo:Number

    constructor(nomeTurma: string, docentes:[], estudantes:[], modulo:Number){
        this.nomeTurma = nomeTurma
        this.docentes = docentes
        this.estudantes = estudantes
        this.modulo = modulo
    }

    public getNomeTurma(): string {
        return this.nomeTurma
    }

    
}