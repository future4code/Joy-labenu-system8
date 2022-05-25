import { Request, Response }  from "express";
import { CharacterStudent } from "../data/StudentDataBase";
import { Student, StudentHobbie, Hobbie } from "../Classes/typeStudent"
import { CustomError } from "../Classes/CustomError"


export async function postStudent(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const { nome, email, dataNacimento, turmaId, hobbies} = req.body

        const enverter = dataNacimento.split('/').reverse().join('-');

        console.log(enverter)

        if(!nome || !email || !turmaId || !dataNacimento){
            throw new CustomError("Esta faltando alguma imformação", 406)
        }

        const baseStudent = new CharacterStudent()

        // Buscando o id da turma
        const getClass = await baseStudent.getIdClass(turmaId)

        if(!getClass){
            throw new CustomError("Não existe turma com id.", 406)
        }

        
        //------
        const newStudent = new Student (
            nome,
            email,
            enverter,
            turmaId,
            hobbies,
        ) 

        console.log("body", nome)
        console.log(newStudent)
        console.log("")

        // Criando estudante
        await baseStudent.create(newStudent)
        
        // Buscando o id do estudante atravez do nome
        const getStudent = await baseStudent.getIdStudent(nome)
        const idStudent = getStudent[0].id
        console.log("id estudante:", getStudent[0].id)

        // Iserido o estudante na turma
        if(!getClass[0].estudantes){
            await baseStudent.updateListaEstudante(turmaId, idStudent)
            console.log(`${idStudent}`)
        }else{
            const idStudents = [getClass[0].estudantes, idStudent]
            await baseStudent.updateListaEstudante(turmaId, idStudents)
            console.log(idStudents)
        } 



        const verificarHobbis = hobbies.map(async(index:any) => {
            
            const validar = await baseStudent.getIdHobbie(index)
            console.log(index)

            if(!validar[0]){
    
                const criatHobbies = new Hobbie (
                    index
                )
    
                await baseStudent.creatHobbies(criatHobbies) 
    
                const result = await baseStudent.getIdHobbie(index)
                const idHobbie = result[0].id
                console.log("id do hobbie criado", idHobbie)
    
                const newStudentHobbie = new StudentHobbie (
                    idStudent,
                    idHobbie
                )
    
                await baseStudent.estudantesHobbie(newStudentHobbie)
    
            } else{
    
                const result = await baseStudent.getIdHobbie(index)
                const idHobbie = result[0].id
                console.log("id do hobbie exstente", index)
    
                const newStudentHobbie = new StudentHobbie (
                    idStudent,
                    idHobbie
                )
                
                await baseStudent.estudantesHobbie(newStudentHobbie)
            }
            
        })


        
        res.status(200).send("Estudante criado com sucesso!!");
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}