
export class Student {
    private nome: string;
    private email: string;
    private data_nasc: Date;
    private turma_id: Number;
    private hobbies: []

    constructor(nome: string, email: string, dataNacimento: Date, turmaId: Number, hobbies: []){
        this.nome = nome
        this.email = email
        this.data_nasc = dataNacimento
        this.turma_id = turmaId
        this.hobbies = hobbies
    }

}

export class StudentHobbie {
    private estudante_id: Number
    private hobbie_id: Number

    constructor(estudanteId: Number, hobbiesId: Number){
        this.estudante_id = estudanteId
        this.hobbie_id = hobbiesId
    }
}

export class Hobbie {
    private hobbies: string

    constructor(hobbies: string){
        this.hobbies = hobbies
    }
}