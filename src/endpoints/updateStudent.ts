import { Request, Response }  from "express";
import { CharacterStudent } from "../data/StudentDataBase";
import { Student, StudentHobbie, Hobbie } from "../Classes/typeStudent"
import { CustomError } from "../Classes/CustomError"


export async function updateStudent(
    req: Request,
    res: Response
): Promise<void> {
    try{
        
        const studentId:any = req.params.id
        const turmaId = req.body.turmaId

        const baseStudent = new CharacterStudent()


        const getStudent = await baseStudent.getStudent(Number(studentId))

        const oldClass = await baseStudent.getIdClass(getStudent[0].turma_id)

        const newClass = await baseStudent.getIdClass(turmaId)

        console.log("oldClass", oldClass)

        console.log("Id di estudante", getStudent[0].turma_id)

        if(!turmaId){
            throw new CustomError("Digite o id da turma.", 406)
        }

        const oldStudent = oldClass[0].estudantes

        const newStudent = JSON.parse("[" + oldStudent + "]")
        const filterStudent = newStudent.filter((index:number) =>{ return index !== Number(studentId)})

        const filter = filterStudent.toString()

        
        
        await baseStudent.updateListaEstudante(getStudent[0].turma_id, filter)


        if(!newClass[0].estudantes){
            await baseStudent.updateListaEstudante(turmaId, studentId)
            console.log(`${studentId}`)
        }else{
            const idStudents = [newClass[0].estudantes, studentId]
            await baseStudent.updateListaEstudante(turmaId, idStudents)
            console.log(idStudents)
        }


        // await baseStudent.updateClassStudent(Number(studentId), turmaId)


        
        res.status(200).send("Turma trocada com sucesso!!");
    } catch (error : any){
        res.status( error.statusCode || 400).send(error.sqMessage || error.message)
    }
}